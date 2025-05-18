import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'uptime-kuma',
  title: 'Uptime Kuma',
  license: 'MIT',
  wrapperRepo: 'https://github.com/remcoros/uptime-kuma-startos',
  upstreamRepo: 'https://github.com/louislam/uptime-kuma',
  supportSite: 'https://github.com/louislam/uptime-kuma/issues',
  marketingSite: 'https://github.com/louislam/uptime-kuma',
  donationUrl: 'https://opencollective.com/uptime-kuma',
  description: {
    short: 'Uptime Kuma - A fancy self-hosted monitoring tool',
    long: 'Uptime Kuma is an easy-to-use self-hosted monitoring tool. It allows you to monitor the uptime of your websites, servers, and applications, providing real-time notifications and detailed reports. With a sleek and user-friendly interface, Uptime Kuma ensures you stay informed about the status of your critical systems effortlessly.',
  },
  volumes: ['main'],
  images: {
    main: {
      arch: ['x86_64', 'aarch64'],
      source: {
        dockerTag: 'louislam/uptime-kuma:1.23.16-alpine',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
