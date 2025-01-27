import { t, Trans } from '@lingui/macro'
import GoTo from 'components/button/GoTo'
import EmptyBoxIcon from 'components/icons/EmptyBoxIcon'
import { Table } from 'components/table'
import { formatEther } from 'ethers/lib/utils'
import { gql } from 'graphql-request'
import { useEnsAddresses } from 'hooks/useEnsAddresses'
import useQuery from 'hooks/useQuery'
import useRToken from 'hooks/useRToken'
import { useMemo } from 'react'
import { Box, BoxProps, Text } from 'theme-ui'
import { formatCurrencyCell, shortenAddress } from 'utils'
import { ExplorerDataType, getExplorerLink } from 'utils/getExplorerLink'

// TODO: Filter zero address from mappings on theGraph side
const query = gql`
  query getVoters($id: String!) {
    delegates(
      where: {
        governance: $id
        address_not: "0x0000000000000000000000000000000000000000"
      }
      orderBy: "delegatedVotes"
      orderDirection: "desc"
    ) {
      id
      address
      numberVotes
      delegatedVotes
      governance {
        totalTokenSupply
      }
    }
  }
`

// TODO: Proposal data casting?
const useVoters = () => {
  const rToken = useRToken()
  const response = useQuery(rToken?.address && !rToken.isRSV ? query : null, {
    id: rToken?.address.toLowerCase(),
  })

  const { data, error } = response

  const addresses = data?.delegates?.map((delegate: any) => delegate.address)
  const ensRes: string[] = useEnsAddresses(addresses)

  return useMemo(() => {
    if (!ensRes?.length)
      return {
        data: [],
        error: false,
        loading: true,
      }
    const delegatesWithEns = data?.delegates?.map(
      (delegate: any, idx: number) => {
        const ens = ensRes[idx]
        return {
          ...delegate,
          displayAddress: !!ens ? ens : shortenAddress(delegate.address),
        }
      }
    )
    return {
      data: delegatesWithEns ?? [],
      error: !!error,
      loading: !data?.delegates && !error,
    }
  }, [JSON.stringify(response), ensRes])
}

const TopVoters = (props: BoxProps) => {
  const { data } = useVoters()

  const columns = useMemo(
    () => [
      {
        Header: t`Rank`,
        accessor: 'id',
        Cell: ({ row }: any) => {
          return <Text>{row.index + 1}</Text>
        },
      },
      {
        Header: t`Address`,
        Cell: ({ row }: any) => {
          const { displayAddress, address } = row.original
          return (
            <Box variant="layout.verticalAlign">
              <Text>{displayAddress}</Text>
              <GoTo href={getExplorerLink(address, ExplorerDataType.ADDRESS)} />
            </Box>
          )
        },
      },
      {
        Header: t`Votes`,
        accessor: 'delegatedVotes',
        Cell: formatCurrencyCell,
      },
      {
        Header: t`Vote weight`,
        Cell: ({ row }: any) => {
          const {
            delegatedVotes,
            governance: { totalTokenSupply },
          } = row.original

          return (
            <Text>
              {+(
                (delegatedVotes / +formatEther(totalTokenSupply)) *
                100
              ).toFixed(2) || 0}
              %
            </Text>
          )
        },
      },
      {
        Header: t`Proposals voted`,
        accessor: 'numberVotes',
      },
    ],
    [data]
  )

  return (
    <Box
      variant="layout.card"
      p={2}
      sx={{ backgroundColor: 'contentBackground' }}
      {...props}
    >
      <Text variant="title" p={3}>
        <Trans>Top voting addresses</Trans>
      </Text>
      <Table mt={4} p={0} maxHeight={420} compact columns={columns} data={data} />
      {!data.length && (
        <Box py={4} mt={3} sx={{ textAlign: 'center' }}>
          <EmptyBoxIcon />
          <Text
            mt={3}
            variant="legend"
            sx={{
              display: 'block',
            }}
          >
            No voters at this moment...
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default TopVoters
