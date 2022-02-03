import { warn, error, debug, log } from '../main.js'

export let readyHooks = async () => {
  warn('Ready Hooks processing...')
  Hooks.on('ready', function () {})
}
export const setupHooks = async () => {
  warn('Setup Hooks processing...')
  Hooks.on('renderActorSheet', (app, html, data) => {
    warn('Processing Actor Sheet...' + app)
    let myFontSize = 1.0
    let myFontSizeOther = 0.8
    let myFontSizeResource = 0.65

    const divElem = document.querySelector('#' + app.id)
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        let theFontSize = ((($('#' + entry.target.id).width() / 800) * myFontSize - 1) * 0.1 + 1) * 100
        let theFontSizeOther = ((($('#' + entry.target.id).width() / 800) * myFontSizeOther - 1) * 0.1 + 1) * 100
        let theFontSizeResource = ((($('#' + entry.target.id).width() / 800) * myFontSizeResource - 1) * 0.1 + 1) * 100
        $('#' + entry.target.id + ', #' + entry.target.id + ' *').css('font-size', theFontSize + '%')
        $(
          '#' +
            entry.target.id +
            ' .header, #' +
            entry.target.id +
            ' .points, #' +
            entry.target.id +
            ' .label, #portrait .sharebutton'
        ).css('font-size', theFontSizeOther * 0.75 + '%')

        $('#' + entry.target.id + ' .tracked-resource button').css('font-size', theFontSizeResource + '%')
        $('#' + entry.target.id + ' .tracked-resource button').css('height', theFontSizeResource * 0.75 + '%')
        $('#' + entry.target.id + ' .tracked-resource input').height(
          $('#' + entry.target.id + ' .tracked-resource button').height()
        )
        $('#' + entry.target.id + ' .img-display').width($('#' + entry.target.id + ' #points').width() * 0.85)
      }
    })

    resizeObserver.observe(divElem)
  })
}
export const initHooks = async () => {
  warn('Init Hooks processing...')
  Hooks.on('init', function () {})
}
