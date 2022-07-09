export const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')

export function createCanvas() {
  canvas.width = 1024
  canvas.height = 576
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
}