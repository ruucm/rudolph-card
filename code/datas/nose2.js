import { Animatable } from 'framer'

// nose2
const opacity = Animatable(0.2)
const scale = Animatable(1)
const top = Animatable(0)
const left = Animatable(-111)
const radius = Animatable('100px')
const width = Animatable(130)
const height = Animatable(125)
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

const texts2TitleOpacity = Animatable(0)
const texts2TitleLeft = Animatable(0)
const texts2TitleScale = Animatable(1)

const texts2Opacity = Animatable(0)
const texts2Left = Animatable(0)

const nextBtn2Scale = Animatable(1)
const nextBtn2Opacity = Animatable(0)

export default {
  opacity,
  scale,
  top,
  left,
  radius,
  width,
  height,
  shadow,
  background,
  texts2TitleOpacity,
  texts2TitleLeft,
  texts2TitleScale,
  texts2Opacity,
  texts2Left,
  nextBtn2Scale,
  nextBtn2Opacity,
}
