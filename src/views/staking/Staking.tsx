import { Trans } from '@lingui/macro'
import { Container } from 'components'
import { Box, Grid, Text } from 'theme-ui'
import Balances from './components/balances'
import Overview from './components/overview'
import Stake from './components/stake'
import Unstake from './components/unstake'

const Staking = () => (
  <Container pb={4}>
    <Text ml={4} mb={3} variant="sectionTitle">
      <Trans>Stake + UnStake</Trans>
    </Text>
    <Grid columns={[1, 1, 1, '2fr 1.5fr']} gap={4}>
      <Box>
        <Grid columns={[1, 2]} gap={4} mb={4}>
          <Stake />
          <Unstake />
        </Grid>
        <Balances />
      </Box>
      <Overview />
    </Grid>
  </Container>
)

export default Staking
