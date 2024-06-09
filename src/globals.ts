export default {
  install(app) {
    const componentFiles = import.meta.glob('./components/forms/*.vue', {eager: true})

    Object.entries(componentFiles).forEach(([path, m]) => {
      const componentName = path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')

      app.component(componentName, m.default)
    })
  },
}
