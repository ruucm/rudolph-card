import { Animatable } from 'framer'

const wrapTop = Animatable(356)

// const wrapLeft = Animatable(138)
const wrapLeft = Animatable(0)
const wrapOpacity = Animatable(1)

const scale = Animatable(1)
const top = Animatable(0)
const radius = Animatable('100px')
const width = Animatable(100)
const height = Animatable(100)
const shadow = [
  {
    inset: false,
    color: 'rgba(0, 0, 0, 0.25)',
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
  },
]
const blur = 0
const background = Animatable('#DD3137')

const noseImgOpacity = Animatable(1)

const coverImgTop = Animatable(-400)
const coverImgOpacity = Animatable(0)

const overlayOpacity = Animatable(0)

const trackNumTop = Animatable(0)
const trackNumOpacity = Animatable(0)

const titleOverlayTop = Animatable(0)
const titleOverlayOpacity = Animatable(1)
const titleTop = Animatable(0)
const titleOpacity = Animatable(0)

const authorTop = Animatable(0)
const authorOpacity = Animatable(0)

export default {
  wrapTop,
  wrapLeft,
  wrapOpacity,
  scale,
  top,
  radius,
  width,
  height,
  shadow,
  blur,
  background,
  noseImgOpacity,
  coverImgTop,
  coverImgOpacity,
  overlayOpacity,
  trackNumTop,
  trackNumOpacity,
  titleOverlayTop,
  titleOverlayOpacity,
  titleTop,
  titleOpacity,
  authorTop,
  authorOpacity,
}
