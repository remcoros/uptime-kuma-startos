import { sdk } from './sdk'
import { T } from '@start9labs/start-sdk'
import { uiPort } from './utils'
import {
  HostnameInfo,
  IpHostname,
} from '@start9labs/start-sdk/base/lib/osBindings'

export const main = sdk.setupMain(async ({ effects, started }) => {
  console.info('Starting Uptime Kuma')

  const lanInfo = await sdk.getServicePortForward(effects, {
    hostId: 'ui',
    internalPort: uiPort,
  })
  console.log('LAN Info:')
  console.dir(lanInfo, { depth: null })

  const si = await effects.listServiceInterfaces({})
  console.log('listServiceInterfaces:')
  console.dir(si, { depth: null })

  const hi = await effects.getHostInfo({ hostId: 'ui' })
  console.log('getHostInfo:')
  console.dir(hi, { depth: null })

  const host = hi?.hostnameInfo[uiPort].find(
    (host) => host.kind === 'ip' && host.hostname.kind === 'local',
  )
  const hostname = host?.hostname as Extract<IpHostname, { kind: 'local' }>
  const publicHostnameAndPort = `${hostname?.value}:${hostname?.sslPort}`

  console.log('public on: ' + publicHostnameAndPort)

  const healthReceipts: T.HealthCheck[] = []

  return sdk.Daemons.of(effects, started, healthReceipts).addDaemon('primary', {
    subcontainer: { imageId: 'main' }, // Must match an Image ID declared in the manifest.
    command: ['docker_entrypoint.sh'], // The command to start the daemon.
    mounts: sdk.Mounts.of().addVolume('main', null, '/app/data', false),
    ready: {
      display: 'Web Interface', // If null, the health check will NOT be displayed to the user. If provided, this string will be the name of the health check and displayed to the user.
      // The function below determines the health status of the daemon.
      fn: () =>
        sdk.healthCheck.checkWebUrl(
          effects,
          'http://uptime-kuma.embassy:' + uiPort,
          {
            successMessage: 'The web interface is ready',
            errorMessage: 'The web interface is unreachable',
          },
        ),
      // sdk.healthCheck.checkPortListening(effects, uiPort, {
      //   successMessage: 'The web interface is ready',
      //   errorMessage: 'The web interface is unreachable',
      // }),
    },
    requires: [], // If this daemon depends on the successful initialization of one or more prior daemons, enter their IDs here.
    //onStdout: (chunk) => console.info("from service: " + chunk.toString()),
    //onStderr: (chunk) => console.error("from service: " + chunk.toString())
  })
})
