import { animate } from 'framer'

import { nose1, snow } from '../datas'
import { sleep } from '../utils'

var lock01 = false

const showNose1 = async () => {
  // nose shirink
  if (!lock01) {
    nose1.scale.set(0.6)
    animate.spring(nose1.scale, 1)
    lock01 = true
  }

  await sleep(100)

  // animate nose
  animate.easeOut(nose1.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: 5,
      y: 30,
      blur: 20,
      spread: 0,
    },
  ])
  animate.easeOut(nose1.noseImgOpacity, 0)

  await sleep(1000)
  animate.easeOut(nose1.top, -104)

  await sleep(700)

  nose1.radius.set('20px')

  // animate.easeInOut(nose1.radius, '20px')

  await sleep(700)

  animate.easeInOut(nose1.width, 300)
  animate.easeInOut(nose1.height, 350)
  animate.easeOut(nose1.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: -15,
      y: 4,
      blur: 20,
      spread: 0,
    },
  ])
  animate.easeInOut(nose1.background, 'white')

  await sleep(300)

  // animate coverImg
  animate.easeOut(nose1.coverImgOpacity, 0.99, { duration: 0.3 })

  // animate title
  await sleep(800)
  await animate.ease(nose1.titleOverlayTop, -54, { duration: 0.6 }).finished
  nose1.titleOverlayOpacity.set(0)

  // start snow!
  snow.snowOn = true
}

export default showNose1
