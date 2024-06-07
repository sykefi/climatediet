export default {
  install(app) {
    const componentFiles = import.meta.globEager('./components/forms/*.vue')

    Object.entries(componentFiles).forEach(([path, m]) => {
      const componentName = path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')

      app.component(componentName, m.default)
    })
  },
}
