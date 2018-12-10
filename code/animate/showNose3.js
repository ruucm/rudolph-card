import { animate } from 'framer'

import { nose, nose2, nose3 } from '../datas'
import { sleep } from '../utils'

const showNose3 = async () => {
  nose2.nextBtnScale.set(0.6)
  animate.spring(nose2.nextBtnScale, 1)
  await sleep(200)

  animate.ease(nose.wrapLeft, -400)

  animate.ease(nose2.scale, 0.8)
  animate.ease(nose2.wrapLeft, 240)
  animate.ease(nose2.wrapTop, 180)
  animate.ease(nose2.wrapOpacity, 0.3)

  // nose3 in
  animate.easeOut(nose3.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: 5,
      y: 30,
      blur: 20,
      spread: 5,
    },
  ])

  await sleep(250)

  animate.ease(nose3.opacity, 0.99)
  animate.ease(nose3.left, -350)

  animate.easeInOut(nose3.radius, '20px')

  animate.easeInOut(nose3.width, 350)
  animate.easeInOut(nose3.height, 350)
  animate.easeInOut(nose3.background, 'white')

  await sleep(1000)

  animate.easeInOut(nose3.textsTitleOpacity, 0.99)
  animate.ease(nose3.textsTitleLeft, 30)

  animate.easeInOut(nose3.textsDescOpacity, 0.99)
  animate.spring(nose3.textsDescLeft, 30, {
    tension: 80,
    friction: 40,
  })

  animate.easeInOut(nose3.nextBtnOpacity, 0.99)
}

export default showNose3
