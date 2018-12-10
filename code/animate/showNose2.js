import { animate } from 'framer'

import { nose, nose2 } from '../datas'
import { sleep } from '../utils'

const showNose2 = async () => {
  nose.nextBtnScale.set(0.6)
  animate.spring(nose.nextBtnScale, 1)
  await sleep(200)

  animate.ease(nose.scale, 0.8)
  animate.ease(nose.wrapLeft, 0)
  animate.ease(nose.wrapTop, 230)
  animate.ease(nose.wrapOpacity, 0.3)

  // nose2 in
  animate.easeOut(nose2.shadow, [
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

  animate.ease(nose2.opacity, 0.99)
  animate.ease(nose2.left, -350)

  animate.easeInOut(nose2.radius, '20px')

  animate.easeInOut(nose2.width, 350)
  animate.easeInOut(nose2.height, 350)
  animate.easeInOut(nose2.background, 'white')

  await sleep(1000)

  animate.easeInOut(nose2.textsTitleOpacity, 0.99)
  animate.ease(nose2.textsTitleLeft, 30)

  animate.easeInOut(nose2.textsDescOpacity, 0.99)
  animate.spring(nose2.textsDescLeft, 30, {
    tension: 80,
    friction: 40,
  })

  animate.easeInOut(nose2.nextBtnOpacity, 0.99)
}

export default showNose2
