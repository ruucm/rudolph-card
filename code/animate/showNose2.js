import { animate } from 'framer'

import { nose2 } from '../datas'
import { sleep } from '../utils'

const showNose2 = async () => {
  // animate nose
  animate.easeOut(nose2.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: 5,
      y: 30,
      blur: 20,
      spread: 0,
    },
  ])
  animate.easeOut(nose2.noseImgOpacity, 0)

  animate.easeOut(nose2.top, -104)

  nose2.radius.set('20px')

  await sleep(700)

  animate.easeInOut(nose2.width, 300)
  animate.easeInOut(nose2.height, 350)
  animate.easeOut(nose2.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: -15,
      y: 4,
      blur: 20,
      spread: 0,
    },
  ])
  animate.easeInOut(nose2.background, 'white')

  await sleep(300)

  // animate coverImg
  animate.easeOut(nose2.coverImgOpacity, 0.99, { duration: 0.3 })

  // animate title
  await sleep(800)
  await animate.ease(nose2.titleOverlayTop, -54, { duration: 0.6 }).finished
  nose2.titleOverlayOpacity.set(0)
}

export default showNose2
