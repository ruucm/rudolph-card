import { Animatable } from 'framer'

// nose2 wrap
const wrapTop = Animatable(181)
const wrapLeft = Animatable(363)
const wrapOpacity = Animatable(1)

// nose2
const opacity = Animatable(0.2)
const scale = Animatable(1)
const top = Animatable(0)
const left = Animatable(-111)
const radius = Animatable('100px')
const width = Animatable(130)
const height = Animatable(120)
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
const background = Animatable('#DD3137')

const textsTitleOpacity = Animatable(0)
const textsTitleLeft = Animatable(0)
const textsTitleScale = Animatable(1)

const textsDescOpacity = Animatable(0)
const textsDescLeft = Animatable(0)

const nextBtnScale = Animatable(1)
const nextBtnOpacity = Animatable(0)

export default {
  wrapTop,
  wrapLeft,
  wrapOpacity,
  opacity,
  scale,
  top,
  left,
  radius,
  width,
  height,
  shadow,
  background,
  textsTitleOpacity,
  textsTitleLeft,
  textsTitleScale,
  textsDescOpacity,
  textsDescLeft,
  nextBtnScale,
  nextBtnOpacity,
}
