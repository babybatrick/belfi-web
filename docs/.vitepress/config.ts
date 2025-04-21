export default {
  lang: 'en-US',
  title: ' ',
  description: 'A fast tunnel proxy that helps you bypass firewalls.',

  lastUpdated: true,

  cleanUrls: true,

  head: [
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-8EPB62PDWX'}],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8EPB62PDWX');`],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    nav: nav(),

    logo: {
      dark: '/logo-ffffff.svg',
      light: '/logo-1c1e21.svg',
      alt: 'Belfi'
    },

    sidebar: {
      '/guide': sidebarguide(),
      '/docs': sidebardocs()
    },

    editLink: {
      pattern: 'https://github.com/babybatrick/belfi-web/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/babybatrick/belfi' },
      { icon: 'discord', link: 'https://discord.com' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/></svg>'
      }, link: 'https://t.me' },
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