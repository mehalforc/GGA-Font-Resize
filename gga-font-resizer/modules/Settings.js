import { warn, error, debug, log } from '../main.js'

export const requestURL = '../modules/gga-font-resizer/module.json'
export var MODULE_TITLE = ''
export var MODULE_NAME = ''
export var MODULE_VERSION = ''

$.getJSON(requestURL, function (json) {
  MODULE_TITLE = json.title
  MODULE_NAME = json.name
  MODULE_VERSION = json.version
})
