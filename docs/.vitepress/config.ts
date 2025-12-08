import { withMermaid } from "vitepress-plugin-mermaid";

const currentYear = new Date().getFullYear();

export default withMermaid({
    title: 'MII Gesamtarchitektur',
    description: 'Dieses Repository enthält ein Modell der Data Sharing Architektur der MII in mehreren Teilmodellen und unterschiedlichen Detailstufen.',
    ignoreDeadLinks: true,
    base: process.env.DOCS_BASE || '',
    appearance: true,
    lastUpdated: true,
    themeConfig: {
        siteTitle: true,

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
                    text: 'Überblick',link: '00_overview/index.md', collapsed: true,
                    items:
                        [
                            {text: 'Vereinfacht', link: '00_overview/basic.md'},
                            {text: 'Detailiert', link: '00_overview/detailed.md'},
                        ]
                },
                {
                    text: 'DIZ', link: '01_diz/index.md', collapsed: true, 
                    items:
                        [
                            {text: 'Vereinfacht', link: '01_diz/basic.md'},
                            {text: 'Detailiert', link: '01_diz/detailed.md'},
                        ]
                },
                {
                    text: 'FDPG', link: '02_fdpg/index.md', collapsed: true,
                    items:
                        [
                            {text: 'Detailiert', link: '02_fdpg/detailed.md'},
                            {text: 'Feasibility', link: '02_fdpg/feasibility.md'},
                            {text: 'KDS Report', link: '02_fdpg/kds-report.md'},
                        ]
                }
            ]
        },
        footer: {
            message: 'Released under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>',
            copyright: `Copyright © 2024 - ${currentYear}`,
        },
        search: {
            provider: 'local'
        }
    }
})