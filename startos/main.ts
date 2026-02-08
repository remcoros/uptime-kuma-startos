import { sdk } from './sdk'
import { uiPort } from './utils'
import { i18n } from './i18n'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting Uptime Kuma')

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      {
        imageId: 'main',
      },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/app/data',
        readonly: false,
      }),
      'main',
    ),
    exec: {
      command: sdk.useEntrypoint(), 
      cwd: '/app',
    },
    ready: {
      display: i18n('Web Interface'), // If null, the health check will NOT be displayed to the user. If provided, this string will be the name of the health check and displayed to the user.
      // The function below determines the health status of the daemon.
      fn: () =>
        sdk.healthCheck.checkWebUrl(
          effects,
          'http://uptime-kuma.startos:' + uiPort,
          {
            successMessage: i18n('The web interface is ready'),
            errorMessage: i18n('The web interface is unreachable'),
          },
        ),
    },
    requires: [],
  })
})
