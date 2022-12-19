import { t } from '@lingui/macro'
import BackButton from 'components/rtoken-setup/components/BackButton'
import Navigation from 'components/section-navigation/Navigation'
import { useMemo } from 'react'
import { Box } from 'theme-ui'

const NavigationSidebar = () => {
  // TODO: Listen for lang
  const sections = useMemo(
    () => [
      t`Intro`,
      t`Primary basket`,
      t`Emergency basket`,
      t`Revenue split`,
      t`RToken params`,
    ],
    []
  )

  const step2Navigation = useMemo(
    () => [t`Governance setup`, t`Register listing`],
    []
  )

  return (
    <Box variant="layout.sticky">
      <Box mb={4}>
        <BackButton />
      </Box>
      <Navigation title={t`Step 1`} sections={sections} />
      <Navigation
        title={t`Step 2`}
        initialIndex={5}
        sections={step2Navigation}
      />
    </Box>
  )
}

export default NavigationSidebar
