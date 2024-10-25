import { sdk } from './sdk'
import { T } from '@start9labs/start-sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects, started }) => {
  console.info('Starting Uptime Kuma')

  //const depResult = await sdk.checkDependencies(effects)
  //depResult.throwIfNotSatisfied()

  const healthReceipts: T.HealthReceipt[] = []

  return sdk.Daemons.of({
    effects,
    started,
    healthReceipts,
  }).addDaemon('primary', {
    image: { id: 'main' }, // Must match an Image ID declared in the manifest.
    command: ['docker_entrypoint.sh'], // The command to start the daemon.
    mounts: sdk.Mounts.of().addVolume('main', null, '/app/data', false),
    ready: {
      display: 'Web Interface', // If null, the health check will NOT be displayed to the user. If provided, this string will be the name of the health check and displayed to the user.
      // The function below determines the health status of the daemon.
      fn: () =>
        // sdk.healthCheck.checkWebUrl(
        //   effects,
        //   'http://uptime-kuma.embassy:' + uiPort,
        //   {
        //     successMessage: 'The web interface is ready',
        //     errorMessage: 'The web interface is unreachable',
        //   },
        // ),
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'The web interface is ready',
          errorMessage: 'The web interface is unreachable',
        }),
    },
    requires: [], // If this daemon depends on the successful initialization of one or more prior daemons, enter their IDs here.
    //onStdout: (chunk) => console.info("from service: " + chunk.toString()),
    //onStderr: (chunk) => console.error("from service: " + chunk.toString())
  })
})
