import { animate } from 'framer'

import { nose3 } from '../datas'
import { sleep } from '../utils'

const showNose3 = async () => {
  // animate nose
  animate.easeOut(nose3.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: 5,
      y: 30,
      blur: 20,
      spread: 0,
    },
  ])
  animate.easeOut(nose3.noseImgOpacity, 0)

  animate.easeOut(nose3.top, -104)

  nose3.radius.set('20px')

  await sleep(700)

  animate.easeInOut(nose3.width, 300)
  animate.easeInOut(nose3.height, 350)
  animate.easeOut(nose3.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: -15,
      y: 4,
      blur: 20,
      spread: 0,
    },
  ])
  animate.easeInOut(nose3.background, 'white')

  await sleep(300)

  // animate coverImg
  animate.easeOut(nose3.coverImgOpacity, 0.99, { duration: 0.3 })

  // animate title
  await sleep(800)
  await animate.ease(nose3.titleOverlayTop, -54, { duration: 0.6 }).finished
  nose3.titleOverlayOpacity.set(0)
}

export default showNose3
