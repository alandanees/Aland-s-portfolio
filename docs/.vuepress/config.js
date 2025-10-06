import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: '/Aland-s-portfolio/',  // Must match your repo name exactly
  ignoreDeadLinks: true,
  rewrites:{
    'README.md': 'index.md',
  },
  title: 'Aland\'s Portfolio',
  description: 'Aland Anees - Software Engineering Student & Frontend Developer',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Projects',
        link: '/projects/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      }
    ],
  }),

  bundler: viteBundler(),
})
