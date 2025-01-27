import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { SmallButton } from 'components/button'
import TokenItem from 'components/token-item'
import { useAtomValue } from 'jotai'
import { memo } from 'react'
import { transition } from 'theme'
import { Box, Divider, Flex, Text } from 'theme-ui'
import availableTokensAtom from './atoms'
import BackHomeIcon from '../icons/BackHomeIcon'

const ActionItem = styled(Flex)`
  transition: ${transition};
  padding: 16px;
  cursor: pointer;

  &:hover {
    background-color: #6d3210;
  }
`

/**
 * Token selector list of available RTokens
 */
const TokenList = memo(
  ({
    onSelect,
    onHome,
  }: {
    onSelect(address: string): void
    onHome(): void
  }) => {
    const tokens = useAtomValue(availableTokensAtom)

    return (
      <Box
        sx={{
          maxHeight: 320,
          minWidth: 200,
          overflow: 'auto',
          backgroundColor: 'black',
          borderRadius: '13px',
        }}
      >
        <Box>
          <ActionItem
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={onHome}
          >
            <BackHomeIcon />
            <Text ml={2} sx={{ color: 'invertedText' }}>
              <Trans>Dashboard</Trans>
            </Text>
          </ActionItem>
        </Box>
        {!!Object.values(tokens).length && (
          <Divider
            sx={{ border: '1px dashed', borderColor: 'invertedText' }}
            my={0}
          />
        )}
        {Object.values(tokens).map(({ address, logo, symbol }) => (
          <ActionItem key={address} onClick={() => onSelect(address)}>
            <TokenItem
              sx={{ color: 'invertedText' }}
              symbol={symbol}
              logo={logo}
            />
          </ActionItem>
        ))}
      </Box>
    )
  }
)

export default TokenList
