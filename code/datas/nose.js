import { Animatable } from 'framer'

const wrapTop = Animatable(231)

const wrapLeft = Animatable(123)
const wrapOpacity = Animatable(1)

const scale = Animatable(1)
const top = Animatable(0)
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

const textsOpacity = Animatable(0)
const textsLeft = Animatable(0)

const nextBtnScale = Animatable(1)
const nextBtnOpacity = Animatable(0)
const nextBtnBackground = Animatable('#DD3137')

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
  background,
  textsTitleOpacity,
  textsTitleLeft,
  textsTitleScale,
  textsOpacity,
  textsLeft,
  nextBtnScale,
  nextBtnOpacity,
  nextBtnBackground,
}
