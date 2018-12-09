import { animate } from 'framer'

import { nose } from '../datas'
import { sleep } from '../utils'

var lock01 = false

const showNose1 = async () => {
  // nose shirink
  if (!lock01) {
    nose.scale.set(0.6)
    animate.spring(nose.scale, 1)
    lock01 = true
  }

  await sleep(100)

  // animate title
  // animate.easeIn(data.titleTop, -300)

  // animate nose
  animate.easeOut(nose.shadow, [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: 5,
      y: 30,
      blur: 20,
      spread: 0,
    },
  ])

  await sleep(1000)
  animate.easeOut(nose.top, -50)

  await sleep(700)

  animate.easeInOut(nose.radius, '20px')

  await sleep(700)

  animate.easeInOut(nose.width, 350)
  animate.easeInOut(nose.height, 350)
  animate.easeInOut(nose.background, 'white')

  await sleep(750)

  // animate sparks
  // animate.easeInOut(data.spark01Opacity, 0.99, {
  //   duration: 0.2,
  // })
  // animate.easeOut(data.spark01Top, 130, {
  //   duration: 0.3,
  // })
  // animate.easeOut(data.spark01Right, 80, {
  //   duration: 0.3,
  // })

  // animate.easeInOut(data.spark02Opacity, 0.99, {
  //   duration: 0.3,
  // })
  // animate.easeOut(data.spark02Top, 100, {
  //   duration: 0.25,
  // })
  // animate.easeOut(data.spark02Right, 15, {
  //   duration: 0.3,
  // })

  // animate.easeInOut(data.spark03Opacity, 0.99, {
  //   duration: 0.3,
  // })
  // animate.easeOut(data.spark03Top, 120, {
  //   duration: 0.3,
  // })
  // animate.easeOut(data.spark03Left, 80, {
  //   duration: 0.3,
  // })

  // animate.easeInOut(data.spark04Opacity, 0.99, {
  //   duration: 0.3,
  // })
  // animate.easeOut(data.spark04Top, 160, {
  //   duration: 0.3,
  // })
  // animate.easeOut(data.spark04Right, 10, {
  //   duration: 0.3,
  // })

  await sleep(200)

  // animate texts

  // data.textsTitleScale.set(0.6)
  // animate.spring(data.textsTitleScale, 1)
  animate.easeInOut(nose.textsTitleOpacity, 0.99)
  animate.ease(nose.textsTitleLeft, 30)

  animate.easeInOut(nose.textsOpacity, 0.99)
  animate.spring(nose.textsLeft, 30, {
    tension: 80,
    friction: 40,
  })

  // animate next button
  animate.easeInOut(nose.nextBtnOpacity, 0.99)

  await sleep(1500)

  // animate hat
  // animate.easeInOut(data.hatOpacity, 0.99)

  // animate.easeIn(data.hatTop, 5, {
  //   duration: 1,
  // })
  // await sleep(800)
  // animate.easeOut(data.hatScaleY, 0.9, {
  //   duration: 0.2,
  // })

  // await sleep(300)

  // animate.easeIn(data.hatScaleY, 1, {
  //   duration: 0.2,
  // })

  // animate.easeOut(data.hatTop, 10, {
  //   duration: 0.2,
  // })
}

export default showNose1
