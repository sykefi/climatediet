function validateForm(form: HTMLFormElement) {
  let isValid = true
  const hasBrowserSupport = 'reportValidity' in document.createElement('form')
  if (hasBrowserSupport) {
    isValid = form.reportValidity()
  } else {
    // validation check for older browsers. Highlights the incorrect fields with red color and !
    Array.from(form.getElementsByTagName('input')).forEach((input) => {
      const parent = input.parentElement
      if (input.disabled) {
        return
      }

      const prevErrorElements =
        parent == null ? [] : parent.getElementsByClassName('error-bang')
      if (!input.validity.valid) {
        isValid = false
        input.style.color = 'red'

        if (prevErrorElements.length > 0) {
          return
        }
        const errorElement = document.createElement('b')
        errorElement.className = 'error-bang'
        errorElement.innerHTML = ' ! '
        errorElement.style.color = 'red'
        input.insertAdjacentElement('beforebegin', errorElement)
      } else {
        input.style.color = ''
        if (parent != null) {
          Array.from(prevErrorElements).forEach((el) => {
            parent.removeChild(el)
          })
        }
      }
    })
  }
  return isValid
}

function isOldInternetExplorer() {
  const ua = window.navigator.userAgent
  return ua.indexOf('MSIE') !== -1 || ua.indexOf('Trident') !== -1
}

function scrollToElement(elementId: string) {
  if (!elementId) {
    return
  }
  const element = document.getElementById(elementId)
  if (element) {
    const top = (element as any).offsetTop
    window.scrollTo(0, top)
  }
}

function roundResults(value: number) {
  if (value === 0) {
    return 0
  }
  if (value < 10) {
    return value
  }
  if (value < 200) {
    return Math.round(value / 10) * 10 // if small enough, return rounded to 10
  }
  return Math.round(value / 100) * 100 // round to hundred
}

export { validateForm, isOldInternetExplorer, scrollToElement, roundResults }
