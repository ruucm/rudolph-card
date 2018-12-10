import { Data, Override, Animatable } from 'framer'

import { nose, nose2, nose3 } from './datas'
import { showNose1, showNose2, showNose3 } from './animate'

// Animation Objects
const data = Data({
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
    onTap: showNose1,
  }
}

// nose2

export const NoseWrap2: Override = () => {
  return {
    top: nose2.wrapTop,
    left: nose2.wrapLeft,
    opacity: nose2.wrapOpacity,
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
    opacity: nose2.textsTitleOpacity,
    left: nose2.textsTitleLeft,
    scale: nose2.textsTitleScale,
  }
}

export const Texts2: Override = () => {
  return {
    opacity: nose2.textsDescOpacity,
    left: nose2.textsDescLeft,
  }
}

export const NextButton: Override = () => {
  return {
    scale: nose.nextBtnScale,
    opacity: nose.nextBtnOpacity,
    onTap: showNose2,
  }
}
export const NextButton2: Override = () => {
  return {
    scale: nose2.nextBtnScale,
    opacity: nose2.nextBtnOpacity,
    onTap: showNose3,
  }
}

// nose3
export const Nose3: Override = () => {
  return {
    opacity: nose3.opacity,
    scale: nose3.scale,
    top: nose3.top,
    left: nose3.left,
    radius: nose3.radius,
    width: nose3.width,
    height: nose3.height,
    shadows: nose3.shadow,
    background: nose3.background,

    style: {
      transition: 'border-radius 1.2s ease-in-out, box-shadow 2s ease-out',
    },
  }
}

export const NextButton3: Override = () => {
  return {
    scale: nose3.nextBtnScale,
    opacity: nose3.nextBtnOpacity,
  }
}

export const Texts3Title: Override = () => {
  return {
    opacity: nose3.textsTitleOpacity,
    left: nose3.textsTitleLeft,
    scale: nose3.textsTitleScale,
  }
}

export const Texts3: Override = () => {
  return {
    opacity: nose3.textsDescOpacity,
    left: nose3.textsDescLeft,
  }
}
