import { Data, animate, Override, Animatable } from 'framer'

import { nose, nose2 } from './datas'

// Utils
var lock01 = false
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Animations

const data = Data({
  titleTop: Animatable(0),

  spark01Opacity: Animatable(0),
  spark01Top: Animatable(0),
  spark01Right: Animatable(0),

  spark02Opacity: Animatable(0),
  spark02Top: Animatable(0),
  spark02Right: Animatable(0),

  spark03Opacity: Animatable(0),
  spark03Top: Animatable(0),
  spark03Left: Animatable(0),

  spark04Opacity: Animatable(0),
  spark04Top: Animatable(0),
  spark04Right: Animatable(0),

  hatOpacity: Animatable(0),
  hatTop: Animatable(-100),
  hatScaleY: Animatable(1),
})

export const Title: Override = () => {
  return {
    top: data.titleTop,
  }
}

export const TextsTitle: Override = () => {
  return {
    opacity: nose.textsTitleOpacity,
    left: nose.textsTitleLeft,
    scale: nose.textsTitleScale,
  }
}

export const Texts: Override = () => {
  return {
    opacity: nose.textsOpacity,
    left: nose.textsLeft,
  }
}

export const Spark01: Override = () => {
  return {
    opacity: data.spark01Opacity,
    top: data.spark01Top,
    right: data.spark01Right,
  }
}
export const Spark02: Override = () => {
  return {
    opacity: data.spark02Opacity,
    top: data.spark02Top,
    right: data.spark02Right,
  }
}
export const Spark03: Override = () => {
  return {
    opacity: data.spark03Opacity,
    top: data.spark03Top,
    left: data.spark03Left,
  }
}
export const Spark04: Override = () => {
  return {
    opacity: data.spark04Opacity,
    top: data.spark04Top,
    right: data.spark04Right,
  }
}

export const Hat: Override = () => {
  return {
    opacity: data.hatOpacity,
    top: data.hatTop,
    scaleY: data.hatScaleY,
  }
}

export const NoseWrap: Override = () => {
  return {
    top: nose.wrapTop,
    left: nose.wrapLeft,
    opacity: nose.wrapOpacity,
  }
}

export const Nose: Override = () => {
  return {
    scale: nose.scale,
    top: nose.top,
    radius: nose.radius,
    width: nose.width,
    height: nose.height,
    shadows: nose.shadow,
    background: nose.background,

    style: {
      transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',
    },

    async onTap() {
      // nose shirink
      if (!lock01) {
        nose.scale.set(0.6)
        animate.spring(nose.scale, 1)
        lock01 = true
      }

      await sleep(100)

      // animate title
      animate.easeIn(data.titleTop, -300)

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
      animate.easeInOut(data.spark01Opacity, 0.99, {
        duration: 0.2,
      })
      animate.easeOut(data.spark01Top, 130, {
        duration: 0.3,
      })
      animate.easeOut(data.spark01Right, 80, {
        duration: 0.3,
      })

      animate.easeInOut(data.spark02Opacity, 0.99, {
        duration: 0.3,
      })
      animate.easeOut(data.spark02Top, 100, {
        duration: 0.25,
      })
      animate.easeOut(data.spark02Right, 15, {
        duration: 0.3,
      })

      animate.easeInOut(data.spark03Opacity, 0.99, {
        duration: 0.3,
      })
      animate.easeOut(data.spark03Top, 120, {
        duration: 0.3,
      })
      animate.easeOut(data.spark03Left, 80, {
        duration: 0.3,
      })

      animate.easeInOut(data.spark04Opacity, 0.99, {
        duration: 0.3,
      })
      animate.easeOut(data.spark04Top, 160, {
        duration: 0.3,
      })
      animate.easeOut(data.spark04Right, 10, {
        duration: 0.3,
      })

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
    },
  }
}

export const Nose2: Override = () => {
  return {
    opacity: nose2.opacity,
    scale: nose2.scale,
    top: nose2.top,
    left: nose2.left,
    radius: nose2.radius,
    width: nose2.width,
    height: nose2.height,
    shadows: nose2.shadow,
    background: nose2.background,

    style: {
      transition: 'border-radius 1.2s ease-in-out, box-shadow 2s ease-out',
    },
  }
}
export const Texts2Title: Override = () => {
  return {
    opacity: nose2.texts2TitleOpacity,
    left: nose2.texts2TitleLeft,
    scale: nose2.texts2TitleScale,
  }
}

export const Texts2: Override = () => {
  return {
    opacity: nose2.texts2Opacity,
    left: nose2.texts2Left,
  }
}

export const NextButton: Override = () => {
  return {
    scale: nose.nextBtnScale,
    opacity: nose.nextBtnOpacity,
    async onTap() {
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

      animate.easeInOut(nose2.texts2TitleOpacity, 0.99)
      animate.ease(nose2.texts2TitleLeft, 30)

      animate.easeInOut(nose2.texts2Opacity, 0.99)
      animate.spring(nose2.texts2Left, 30, {
        tension: 80,
        friction: 40,
      })

      animate.easeInOut(nose2.nextBtn2Opacity, 0.99)
    },
  }
}

export const NextButton2: Override = () => {
  return {
    scale: nose2.nextBtn2Scale,
    opacity: nose2.nextBtn2Opacity,
  }
}
