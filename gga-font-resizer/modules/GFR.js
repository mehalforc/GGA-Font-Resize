import { warn, error, debug, log } from '../main.js'

export class GFR {
  static init() {
    warn('Init GFR...')
    GFR.clickable = '.GFR i.fas.fa-terminal'
    GFR.fontBigger = '.GFR i.fas.fa-plus-square'
    GFR.fontReset = '.GFR i.fas.fa-square'
    GFR.fontSmaller = '.GFR i.fas.fa-minus-square'

    GFR.myFontSize = 1.0
    GFR.theFontSize = GFR.myFontSize

    GFR.myFontSizeOther = 0.8
    GFR.theFontSizeOther = GFR.myFontSizeOther

    GFR.myFontSizeResource = 0.65
    GFR.theFontSizeResource = GFR.myFontSizeResource

    GFR.myFontSizeOffset = 0.002

    $(document).on('click', GFR.fontBigger, function () {
      GFR.theFontSize = GFR.theFontSize + GFR.myFontSizeOffset
      GFR.theFontSizeOther = GFR.theFontSizeOther + GFR.myFontSizeOffset
      GFR.theFontSizeResource = GFR.theFontSizeResource + GFR.myFontSizeOffset

      $('div.gurps.sheet.actor, div.gurps.sheet.actor *').css('font-size', GFR.theFontSize + 'em')
      $(
        'div.gurps.sheet.actor .header, div.gurps.sheet.actor .points, div.gurps.sheet.actor .label, #portrait .sharebutton'
      ).css('font-size', GFR.theFontSizeOther + 'em')
      $('div.gurps.sheet.actor .tracked-resource button i').css('font-size', GFR.theFontSizeResource + 'em')
    })

    $(document).on('click', GFR.fontReset, function () {
      $('div.gurps.sheet.actor, div.gurps.sheet.actor *').css('font-size', GFR.myFontSize + 'em')
      $(
        'div.gurps.sheet.actor .header, div.gurps.sheet.actor .points, div.gurps.sheet.actor .label, #portrait .sharebutton'
      ).css('font-size', GFR.myFontSizeOther + 'em')

      $('div.gurps.sheet.actor .tracked-resource button i').css('font-size', GFR.myFontSizeResource + 'em')
    })

    $(document).on('click', GFR.fontSmaller, function () {
      GFR.theFontSize = GFR.theFontSize - GFR.myFontSizeOffset
      GFR.theFontSizeOther = GFR.theFontSizeOther - GFR.myFontSizeOffset
      GFR.theFontSizeResource = GFR.theFontSizeResource - GFR.myFontSizeOffset

      $('div.gurps.sheet.actor, div.gurps.sheet.actor *').css('font-size', GFR.theFontSize + 'em')
      $(
        'div.gurps.sheet.actor .header, div.gurps.sheet.actor .points, div.gurps.sheet.actor .label, #portrait .sharebutton'
      ).css('font-size', GFR.theFontSizeOther + 'em')
      $('div.gurps.sheet.actor .tracked-resource button i').css('font-size', GFR.theFontSizeResource + 'em')
    })
  }
}
