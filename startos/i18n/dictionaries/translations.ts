import { LangDict } from './default'

export default {
  es_ES: {
    // main.ts
    1: 'La interfaz web está lista',
    2: 'La interfaz web no está accesible',

    // interfaces.ts
    100: 'Interfaz web',
    101: 'Interfaz web',
  },
  de_DE: {
    // main.ts
    1: 'Die Weboberfläche ist bereit',
    2: 'Die Weboberfläche ist nicht erreichbar',

    // interfaces.ts
    100: 'Weboberfläche',
    101: 'Weboberfläche',
  },
  pl_PL: {
    // main.ts
    1: 'Interfejs webowy jest gotowy',
    2: 'Interfejs webowy jest niedostępny',

    // interfaces.ts
    100: 'Interfejs webowy',
    101: 'Interfejs webowy',
  },
  fr_FR: {
    // main.ts
    1: "L'interface web est prête",
    2: "L'interface web est inaccessible",

    // interfaces.ts
    100: 'Interface web',
    101: 'Interface web',
  },
} satisfies Record<string, LangDict>
