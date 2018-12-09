import { Data, animate, Override, Animatable } from 'framer'
import { log } from 'ruucm-util'

const data = Data({
  itemAreaTop: Animatable(129),
  itemAreaWidth: Animatable(335),
  itemAreaHeight: Animatable(409),
  itemAreaRadius: Animatable('20px'),
  itemAreaOverFlow: 'hidden',
  itemDescBottom: Animatable(-333),
  textImgBottom: Animatable(-100),

  closeBtnOpacity: Animatable(0),
})

export const ItemArea: Override = () => {
  return {
    top: data.itemAreaTop,
    width: data.itemAreaWidth,
    height: data.itemAreaHeight,
    radius: data.itemAreaRadius,
    overflow: data.itemAreaOverFlow,
  }
}

export const TextImg: Override = () => {
  return {
    bottom: data.textImgBottom,
  }
}

export const ItemImg: Override = () => {
  return {
    originY: 0, // animation origin
    onMouseDown() {
      animate.ease(data.itemAreaWidth, 320)
    },
    async onTap() {
      data.closeBtnOpacity.set(0.99)
      data.itemAreaOverFlow = 'scroll'
      animate.ease(data.itemAreaTop, 0)
      animate.ease(data.itemAreaWidth, 375)
      animate.ease(data.itemAreaHeight, 2000)
      await animate.ease(data.itemAreaRadius, '0px').finished
      animate.easeInOut(data.textImgBottom, 20)
    },
  }
}

export const ItemDesc: Override = () => {
  return {
    originY: 0, // animation origin
    bottom: data.itemDescBottom,
  }
}

export const CloseBtn: Override = () => {
  return {
    opacity: data.closeBtnOpacity,

    onTap() {
      data.closeBtnOpacity.set(0)

      animate.ease(data.itemAreaTop, 129)
      animate.ease(data.itemAreaWidth, 335)
      animate.ease(data.itemAreaHeight, 409)
      animate.ease(data.itemAreaRadius, '20px')

      setTimeout(async () => {
        await animate.easeInOut(data.textImgBottom, -100).finished
        data.itemAreaOverFlow = 'hidden'
      }, 400)
    },
  }
}
