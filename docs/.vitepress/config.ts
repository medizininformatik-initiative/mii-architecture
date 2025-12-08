import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
    title: 'MII Gesamtarchitektur',
    description: 'Dieses Repository enthält ein Modell der Data Sharing Architektur der MII in mehreren Teilmodellen und unterschiedlichen Detailstufen.',
    ignoreDeadLinks: true,
    base: process.env.DOCS_BASE || '',
    appearance: true,
    lastUpdated: true,
    themeConfig: {
        siteTitle: false,

        editLink: {
            pattern: 'https://github.com/medizininformatik-initiative/mii-architecture/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/medizininformatik-initiative/mii-architecture' }
        ],

        footer: {
            message: 'Released under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>',
        },

        search: {
            provider: 'local'
        },

        outline: {
            level: [2, 3]
        },

        nav: [
            { text: 'Home', link: '/' }
        ],

        sidebar: {
            '/': [
                {
                    text: 'MII-Architektur',
                    link: '/index.md',
                    activeMatch: '^/$'
                },
                {
                    text: 'Einleitung',
                    link: '/introduction.md',
                    activeMatch: '^/$'
                },
                {
                    text: 'Überblick',
                    link: '00_overview/index.md',
                    items:
                        [
                            {text: 'Vereinfacht', link: '00_overview/basic.md'},
                            {text: 'Detailiert', link: '00_overview/detailed.md'},
                        ]
                }
            ]
        }
    }
})