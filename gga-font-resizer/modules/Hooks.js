import { warn, error, debug, log } from '../main.js'
import { GFR } from './GFR.js'

export let readyHooks = async () => {
  warn('Ready Hooks processing...')
  Hooks.on('ready', function () {})
}
export const setupHooks = async () => {
  warn('Setup Hooks processing...')
  GFR.init()
  Hooks.on('renderActorSheet', (app, html, data) => {
    warn('Processing Actor Sheet...')
    $('#qnotes')
      .append('<hr/>')
      .append("<a class='GFR'><i class='fas fa-plus-square'></i></a> ")
      .append("<a class='GFR'><i class='fas fa-square'></i></a> ")
      .append("<a class='GFR'><i class='fas fa-minus-square'></i></a>")
  })
}
export const initHooks = async () => {
  warn('Init Hooks processing...')
  Hooks.on('init', function () {})
}
