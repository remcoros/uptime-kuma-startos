import { VersionInfo, VersionGraph, IMPOSSIBLE } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const versions = VersionGraph.of(
  VersionInfo.of({
    version: '1.23.15:1.0',
    releaseNotes: 'Revamped for StartOS 0.3.6',
    migrations: {
      // up: async ({ effects }) => {},
      down: IMPOSSIBLE,
    },
  })
)
