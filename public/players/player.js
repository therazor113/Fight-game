import { Sprite } from '../sprite/sprite.js'

export const player = new Sprite({
  position: {
    x: 0,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'white'
})

export const playerKeys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  },
}