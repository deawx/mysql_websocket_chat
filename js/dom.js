/**
 * This file provides a replacement for jquery.
 */

/**
 * Construct with a selector thats all to it.
 *
 * @param selector
 * @private
 */
let _dom = function (selector) {
  this.elm = document.querySelector(selector)
}

/**
 * Put display style block on the current element.
 */
_dom.prototype.hide = function () {
  this.elm.style.display = 'none'
}

/**
 * Ad a EventListener for the domelement
 *
 * @param {Evennt} event The x evemt
 * @param callback
 */
_dom.prototype.on = function (event, callback) {
  this.elm.addEventListener(event, callback)
}

_dom.prototype.get = function () {
  return this.elm
}

/**
 * Get or set a property on a dom element. Don't pass
 * the value parameter if you want to get the value.
 * If you want to set the value pass the value.
 *
 * @param {string} attribute The attribute name
 * @param {string}[value] Value to set (optional)
 * @returns {string | null}
 */
_dom.prototype.prop = function (attribute, value) {
  if (typeof value !== 'undefined' && value.length > -1) {
    this.elm.setAttribute(attribute, value)
  } else
    return this.elm.getAttribute(attribute)
}

/**
 *
 * @param html
 */
_dom.prototype.append = function (html) {
  this.elm.insertAdjacentHTML('beforeend', html)
}

/**
 *
 * @param value
 * @returns {string | number}
 */
_dom.prototype.val = function (value) {
  if (typeof  value !== 'undefined') {
    this.elm.value = value
  } else
    return this.elm.value
}

/**
 *
 * @param selector
 * @returns {_dom}
 */
let dom = (selector) => {
  return new _dom(selector)
}
