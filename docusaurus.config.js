// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alchemix Holyheld Top-up',
  tagline: 'Step by step guide to use top-up on Holyheld',
  favicon: 'img/favicon.ico',

  // URL de production de votre site
  url: 'https://alchemix.fi',
  // Chemin de base sous lequel votre site est servi
  baseUrl: '/',

  // Configuration pour le déploiement sur GitHub Pages
  organizationName: 'alchemix', // Remplacez par le nom de votre organisation
  projectName: 'alchemix-holyheld-topup', // Remplacez par le nom de votre dépôt

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Paramètres d'internationalisation
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // URL pour l'édition des pages docs
          editUrl:
            'https://github.com/alchemix/alchemix-holyheld-topup/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Alchemix Blog',
            description: 'Keep up with the latest Alchemix news',
          },
          // URL pour l'édition des articles de blog
          editUrl:
            'https://github.com/alchemix/alchemix-holyheld-topup/edit/main/',
          onInlineTags: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Remplacez les couleurs par défaut par celles d'Alchemix
      image: 'img/docusaurus.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },

          {
            href: 'https://github.com/alchemix-finance/alchemix-holyheld',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/alchemix',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/alchemixfi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/alchemix-finance/alchemix-holyheld',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Alchemix.`,
      },
      prism: {
        theme: prismThemes.dracula,
      },
    }),
};

export default config;