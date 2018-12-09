import { Data, animate, Override, Animatable } from 'framer'

// Utils
var lock01 = false
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Animations

const data = Data({
  noseWrapTop: Animatable(231),
  noseWrapLeft: Animatable(123),
  noseWrapOpacity: Animatable(1),

  noseScale: Animatable(1),
  noseTop: Animatable(0),
  noseRadius: Animatable('100px'),
  noseWidth: Animatable(130),
  noseHeight: Animatable(125),
  noseBoxShadow: [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: 0,
      y: 0,
      blur: 0,
      spread: 0,
    },
  ],
  noseBackground: Animatable('#DD3137'),

  titleTop: Animatable(0),

  textsTitleOpacity: Animatable(0),
  textsTitleLeft: Animatable(0),
  textsTitleScale: Animatable(1),

  textsOpacity: Animatable(0),
  textsLeft: Animatable(0),

  nextBtnScale: Animatable(1),
  nextBtnOpacity: Animatable(0),

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

  // nose2
  nose2Opacity: Animatable(0.2),
  nose2Scale: Animatable(1),
  nose2Top: Animatable(0),
  nose2Left: Animatable(-111),
  nose2Radius: Animatable('100px'),
  nose2Width: Animatable(130),
  nose2Height: Animatable(125),
  nose2BoxShadow: [
    {
      inset: false,
      color: 'rgba(0, 0, 0, 0.25)',
      x: 0,
      y: 0,
      blur: 0,
      spread: 0,
    },
  ],
  nose2Background: Animatable('#DD3137'),

  texts2TitleOpacity: Animatable(0),
  texts2TitleLeft: Animatable(0),
  texts2TitleScale: Animatable(1),

  texts2Opacity: Animatable(0),
  texts2Left: Animatable(0),

  nextBtn2Scale: Animatable(1),
  nextBtn2Opacity: Animatable(0),
})

export const Title: Override = () => {
  return {
    top: data.titleTop,
  }
}

export const TextsTitle: Override = () => {
  return {
    opacity: data.textsTitleOpacity,
    left: data.textsTitleLeft,
    scale: data.textsTitleScale,
  }
}

export const Texts: Override = () => {
  return {
    opacity: data.textsOpacity,
    left: data.textsLeft,
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
    top: data.noseWrapTop,
    left: data.noseWrapLeft,
    opacity: data.noseWrapOpacity,
  }
}

export const Nose: Override = () => {
  return {
    scale: data.noseScale,
    top: data.noseTop,
    radius: data.noseRadius,
    width: data.noseWidth,
    height: data.noseHeight,
    shadows: data.noseBoxShadow,
    background: data.noseBackground,

    style: {
      transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',
    },

    async onTap() {
      // nose shirink
      if (!lock01) {
        data.noseScale.set(0.6)
        animate.spring(data.noseScale, 1)
        lock01 = true
      }

      await sleep(100)

      // animate title
      animate.easeIn(data.titleTop, -300)

      // animate nose
      animate.easeOut(data.noseBoxShadow, [
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
      animate.easeOut(data.noseTop, -50)

      await sleep(700)

      animate.easeInOut(data.noseRadius, '20px')

      await sleep(700)

      animate.easeInOut(data.noseWidth, 350)
      animate.easeInOut(data.noseHeight, 350)
      animate.easeInOut(data.noseBackground, 'white')

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
      animate.easeInOut(data.textsTitleOpacity, 0.99)
      animate.ease(data.textsTitleLeft, 30)

      animate.easeInOut(data.textsOpacity, 0.99)
      animate.spring(data.textsLeft, 30, {
        tension: 80,
        friction: 40,
      })

      // animate next button
      animate.easeInOut(data.nextBtnOpacity, 0.99)

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
    opacity: data.nose2Opacity,
    scale: data.nose2Scale,
    top: data.nose2Top,
    left: data.nose2Left,
    radius: data.nose2Radius,
    width: data.nose2Width,
    height: data.nose2Height,
    shadows: data.nose2BoxShadow,
    background: data.nose2Background,

    style: {
      transition: 'border-radius 1.2s ease-in-out, box-shadow 2s ease-out',
    },
  }
}
export const Texts2Title: Override = () => {
  return {
    opacity: data.texts2TitleOpacity,
    left: data.texts2TitleLeft,
    scale: data.texts2TitleScale,
  }
}

export const Texts2: Override = () => {
  return {
    opacity: data.texts2Opacity,
    left: data.texts2Left,
  }
}

export const NextButton: Override = () => {
  return {
    scale: data.nextBtnScale,
    opacity: data.nextBtnOpacity,
    async onTap() {
      data.nextBtnScale.set(0.6)
      animate.spring(data.nextBtnScale, 1)
      await sleep(200)

      animate.ease(data.noseScale, 0.8)
      animate.ease(data.noseWrapLeft, 0)
      animate.ease(data.noseWrapTop, 230)
      animate.ease(data.noseWrapOpacity, 0.3)

      // nose2 in
      animate.easeOut(data.nose2BoxShadow, [
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

      animate.ease(data.nose2Opacity, 0.99)
      animate.ease(data.nose2Left, -350)

      animate.easeInOut(data.nose2Radius, '20px')

      animate.easeInOut(data.nose2Width, 350)
      animate.easeInOut(data.nose2Height, 350)
      animate.easeInOut(data.nose2Background, 'white')

      await sleep(1000)

      animate.easeInOut(data.texts2TitleOpacity, 0.99)
      animate.ease(data.texts2TitleLeft, 30)

      animate.easeInOut(data.texts2Opacity, 0.99)
      animate.spring(data.texts2Left, 30, {
        tension: 80,
        friction: 40,
      })

      animate.easeInOut(data.nextBtn2Opacity, 0.99)
    },
  }
}

export const NextButton2: Override = () => {
  return {
    scale: data.nextBtn2Scale,
    opacity: data.nextBtn2Opacity,
  }
}
