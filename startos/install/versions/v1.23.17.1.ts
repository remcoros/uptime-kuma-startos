import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v1_23_17_1 = VersionInfo.of({
  version: '1.23.17:1-beta.0',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
