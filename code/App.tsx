import { Data, animate, Override, Animatable } from 'framer'
import { nose1, nose2, nose3, thanks } from './datas'
import {
  showNose1,
  showNose2,
  showNose3,
  showSnow,
  pageHandle,
} from './animate'

export const Pages: Override = () => {
  return {
    onChangePage: pageHandle,
  }
}

// nose
export const NoseWrap01: Override = () => {
  return {
    top: nose1.wrapTop,
    left: nose1.wrapLeft,
    opacity: nose1.wrapOpacity,
  }
}

export const NoseImg: Override = () => {
  return {
    opacity: nose1.noseImgOpacity,
  }
}

export const Nose01: Override = () => {
  return {
    scale: nose1.scale,
    top: nose1.top,
    radius: nose1.radius,
    width: nose1.width,
    height: nose1.height,
    shadows: nose1.shadow,
    blur: nose1.blur,
    background: nose1.background,
    style: {
      transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',
    },
    onTap: showNose1,
  }
}

export const CoverImage01: Override = () => {
  return {
    // top: nose1.coverImgTop,
    opacity: nose1.coverImgOpacity,
  }
}

export const TitleOverlay01: Override = () => {
  return {
    top: nose1.titleOverlayTop,
  }
}
export const Title01: Override = () => {
  return {
    opacity: nose1.textsTitleOpacity,
    left: nose1.textsTitleLeft,
    scale: nose1.textsTitleScale,
  }
}

export const Author01: Override = () => {
  return {
    opacity: nose1.textsOpacity,
    left: nose1.textsLeft,
  }
}

// nose2
export const NoseWrap02: Override = () => {
  return {
    top: nose2.wrapTop,
    left: nose2.wrapLeft,
    opacity: nose2.wrapOpacity,
  }
}

export const Nose02: Override = () => {
  return {
    scale: nose2.scale,
    top: nose2.top,
    radius: nose2.radius,
    width: nose2.width,
    height: nose2.height,
    shadows: nose2.shadow,
    blur: nose2.blur,
    background: nose2.background,
    style: {
      transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',
    },
    onTap: showNose1,
  }
}

export const CoverImage02: Override = () => {
  return {
    // top: nose2.coverImgTop,
    opacity: nose2.coverImgOpacity,
  }
}

export const TitleOverlay02: Override = () => {
  return {
    top: nose2.titleOverlayTop,
  }
}
export const Title02: Override = () => {
  return {
    opacity: nose2.textsTitleOpacity,
    left: nose2.textsTitleLeft,
    scale: nose2.textsTitleScale,
  }
}

export const Author02: Override = () => {
  return {
    opacity: nose2.textsOpacity,
    left: nose2.textsLeft,
  }
}
