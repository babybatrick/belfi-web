export default {
  lang: 'en-US',
  title: ' ',
  description: 'A fast tunnel proxy that helps you bypass firewalls.',

  lastUpdated: true,

  cleanUrls: true,

  head: [
    ['script', {src: 'https://www.googletagmanager.com/gtag/'}],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-');`]
  ],

  themeConfig: {
    nav: nav(),

    logo: {
      dark: '/../src/img/logo-ffffff.svg',
      light: '/../src/img/logo-1c1e21.svg',
      alt: 'Belfi'
    },

    sidebar: {
      '/guide': sidebarguide(),
      '/docs': sidebardocs()
    },

    editLink: {
      pattern: 'https://github.com/babybatrick/belfiweb/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/babybatrick/belfi' },
      { icon: 'discord', link: 'https://github.com/babybatrick/belfi' },
    ],

    footer: {
      message: 'This website is released under the GPL-3 License.',
      copyright: 'Copyright © 2025 Belfi contributors'
    },

    algolia: {
      appId: '',
      apiKey: '',
      indexName: 'belfi'
    },
  }
}

function nav() {
  return [
    {
      text: 'Usage Guide',
      link: '/guide/',
      activeMatch: '/guide' 
    },
    {
      text: 'Documentation',
      link: '/docs/',
      activeMatch: '/docs'
    }
  ]
}

function sidebarguide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is Belfi?', link: '/guide/' },
      ]
    },
    {
      text: 'Installation',
      collapsible: true,
      items: [
        { text: 'Initial Setup', link: '/guide/setup' },
        { text: 'Downloading', link: '/guide/downloading' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deployment', link: '/guide/deployment' },
        { text: 'Docker Operations', link: '/guide/docker' }
      ]
    },
    {
      text: 'Configuration',
      collapsible: true,
      items: [
        { text: 'Hysteria 2', link: '/guide/hysteria2' },
        { text: 'TUIC', link: '/guide/tuic' },
        { text: 'ShadowSocks', link: '/guide/shadowsocks' },
        { text: 'Trojan', link: '/guide/trojan' },
        { text: 'Juicity', link: '/guide/juicity' }
      ]
    },
    {
      text: 'Troubleshooting',
      collapsible: true,
      items: [
        { text: 'Dealing with new issues', link: '/guide/issues' }
      ]
    },
    {
      text: 'About',
      collapsible: true,
      items: [
        { text: 'Contributors', link: '/guide/contributors' }
      ]
    }
  ]
}

function sidebardocs() {
  return [
    {
      text: 'About',
      collapsible: true,
      items: [
        { text: 'Documentation', link: '/docs/' },
        { text: 'Structure', link: '/docs/structure' },
      ]
    },
    {
      text: 'File-by-File Breakdown',
      collapsible: true,
      items: [
        { text: 'compose.yaml', link: '/docs/compose-yaml' },
        { text: '.env and belfi.conf', link: '/docs/environment' },
        { text: 'build', link: '/docs/build' },
        {
          text: 'ssl/', 
          items: [
            { text: 'fullchain.pem', link: '/docs/ssl/fullchain-pem' },
            { text: 'privkey.pem', link: '/docs/ssl/privkey-pem' },
          ]
        },
        {
          text: 'scripts/', 
          items: [
            { text: 'setup.sh', link: '/docs/scripts/setup-sh' },
            { text: 'input.sh', link: '/docs/scripts/input-sh' },
            { text: 'certificate.sh', link: '/docs/scripts/certificate-sh' },
            { text: 'config.sh', link: '/docs/scripts/config-sh' },
            { text: 'client.sh', link: '/docs/scripts/client-sh' },
            { text: 'output.sh', link: '/docs/scripts/output-sh' },
            { 
              text: 'subscripts/', 
              items: [
                { text: 'belfi.sh', link: '/docs/scripts/subscripts/belfi-sh' },
                { 
                  text: 'server/', 
                  items: [
                    { text: 'hysteria2.sh', link: '/docs/scripts/subscripts/server/hysteria2-sh' },
                    { text: 'tuic.sh', link: '/docs/scripts/subscripts/server/tuic-sh' },
                    { text: 'shadowsocks.sh', link: '/docs/scripts/subscripts/server/shadowsocks-sh' },
                    { text: 'trojan.sh', link: '/docs/scripts/subscripts/server/trojan-sh' },
                    { text: 'juicity.sh', link: '/docs/scripts/subscripts/server/juicity-sh' }
                  ]
                },
                { 
                  text: 'client/', 
                  items: [
                    { text: 'hysteria2.sh', link: '/docs/scripts/subscripts/client/hysteria2-sh' },
                    { text: 'tuic.sh', link: '/docs/scripts/subscripts/client/tuic-sh' },
                    { text: 'shadowsocks.sh', link: '/docs/scripts/subscripts/client/shadowsocks-sh' },
                    { text: 'trojan.sh', link: '/docs/scripts/subscripts/client/trojan-sh' },
                    { text: 'juicity.sh', link: '/docs/scripts/subscripts/client/juicity-sh' }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: 'proxy/', 
          items: [
            {
              text: 'hysteria2/', 
              items: [
                { text: 'config.json', link: '/docs/proxy/hysteria2/config-json' },
                { text: 'client', link: '/docs/proxy/hysteria2/client' }
              ]
            },
            {
              text: 'tuic/', 
              items: [
                { text: 'config.json', link: '/docs/proxy/tuic/config-json' },
                { text: 'client', link: '/docs/proxy/tuic/client' }
              ]
            },
            {
              text: 'shadowsocks/', 
              items: [
                { text: 'config.json', link: '/docs/proxy/shadowsocks/config-json' },
                { text: 'client', link: '/docs/proxy/shadowsocks/client' }
              ]
            },
            {
              text: 'trojan/', 
              items: [
                { text: 'config.json', link: '/docs/proxy/trojan/config-json' },
                { text: 'client', link: '/docs/proxy/trojan/client' }
              ]
            },
            {
              text: 'juicity/', 
              items: [
                { text: 'config.json', link: '/docs/proxy/juicity/config-json' },
                { text: 'client', link: '/docs/proxy/juicity/client' }
              ]
            }
          ]
        },
      ]
    }
  ]
}