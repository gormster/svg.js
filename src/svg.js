import * as svgMembers from './main.js'
import { makeInstance } from './utils/adopter'

// The main wrapping element
export default function SVG (element) {
  return makeInstance(element)
}

Object.assign(SVG, svgMembers)
