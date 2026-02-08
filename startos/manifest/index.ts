import { setupManifest } from '@start9labs/start-sdk'
import { UPTIMEKUMA_VERSION } from '../install/versions'

export const manifest = setupManifest({
  id: 'uptime-kuma',
  title: 'Uptime Kuma',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/uptime-kuma-startos',
  upstreamRepo: 'https://github.com/louislam/uptime-kuma',
  supportSite: 'https://github.com/louislam/uptime-kuma/issues',
  marketingSite: 'https://github.com/louislam/uptime-kuma',
  donationUrl: 'https://opencollective.com/uptime-kuma',
  docsUrl:
    'https://github.com/Start9Labs/uptime-kuma-startos/blob/main/instructions.md',
  description: {
    short: {
      en_US: 'Uptime Kuma - A fancy self-hosted monitoring tool',
      es_ES: 'Uptime Kuma - Una elegante herramienta de monitoreo autohospedada',
      de_DE: 'Uptime Kuma - Ein elegantes selbst gehostetes Überwachungstool',
      pl_PL: 'Uptime Kuma - Eleganckie narzędzie do monitorowania self-hosted',
      fr_FR: 'Uptime Kuma - Un outil de surveillance auto-hébergé sophistiqué',
    },
    long: {
      en_US:
        'Uptime Kuma is an easy-to-use self-hosted monitoring tool. It allows you to monitor the uptime of your websites, servers, and applications, providing real-time notifications and detailed reports. With a sleek and user-friendly interface, Uptime Kuma ensures you stay informed about the status of your critical systems effortlessly.',
      es_ES:
        'Uptime Kuma es una herramienta de monitoreo autohospedada fácil de usar. Te permite monitorear el tiempo de actividad de tus sitios web, servidores y aplicaciones, proporcionando notificaciones en tiempo real e informes detallados. Con una interfaz elegante y fácil de usar, Uptime Kuma te asegura mantenerte informado sobre el estado de tus sistemas críticos sin esfuerzo.',
      de_DE:
        'Uptime Kuma ist ein einfach zu verwendendes selbst gehostetes Überwachungstool. Es ermöglicht Ihnen, die Betriebszeit Ihrer Websites, Server und Anwendungen zu überwachen und bietet Echtzeit-Benachrichtigungen und detaillierte Berichte. Mit einer eleganten und benutzerfreundlichen Oberfläche stellt Uptime Kuma sicher, dass Sie mühelos über den Status Ihrer kritischen Systeme informiert bleiben.',
      pl_PL:
        'Uptime Kuma to łatwe w użyciu narzędzie do monitorowania self-hosted. Pozwala monitorować czas działania twoich stron internetowych, serwerów i aplikacji, zapewniając powiadomienia w czasie rzeczywistym i szczegółowe raporty. Dzięki eleganckiemu i przyjaznemu użytkownikowi interfejsowi, Uptime Kuma zapewnia, że pozostaniesz poinformowany o statusie swoich krytycznych systemów bez wysiłku.',
      fr_FR:
        "Uptime Kuma est un outil de surveillance auto-hébergé facile à utiliser. Il vous permet de surveiller la disponibilité de vos sites web, serveurs et applications, en fournissant des notifications en temps réel et des rapports détaillés. Avec une interface élégante et conviviale, Uptime Kuma vous garantit d'être informé de l'état de vos systèmes critiques sans effort.",
    },
  },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerTag: `louislam/uptime-kuma:${UPTIMEKUMA_VERSION}-alpine`,
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  },
  dependencies: {},
})
