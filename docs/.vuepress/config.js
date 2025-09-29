module.exports = {
  title: "Aland's Portfolio",
  description: 'My portfolio',
  base: '/Aland-s-portfolio/',
  ssr: false,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: 'auto'
  }

}