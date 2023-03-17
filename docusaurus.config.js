// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arthera Resources',
  tagline: 'Building the next decentralized economy',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.arthera.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'artheranet', // Usually your GitHub org/user name.
  projectName: 'arthera-docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
      require.resolve("docusaurus-lunr-search"),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Arthera Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          {
            type: "doc",
            docId: "intro/intro",
            position: "left",
            label: "What is Arthera ?",
          },
          {
            type: "doc",
            docId: "dapp/intro",
            position: "left",
            label: "For Developers",
          },
          {
            href: "https://twitter.com/artheranet",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://github.com/artheranet",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Arthera Network. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"],
      },
      announcementBar: {
        id: "support_us",
        content: `Arthera is currently running in TestNet`,
        backgroundColor: "rgb(8 53 117)",
        textColor: "white",
        isCloseable: true,
      },
    }),
};

module.exports = config;
