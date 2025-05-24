import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v1_23_16 = VersionInfo.of({
  version: '1.23.16:1.0',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
