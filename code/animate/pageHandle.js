import { animate } from 'framer'
import { showNose1, showNose2, showNose3 } from '../animate'

import { nose1, nose2, nose3 } from '../datas'

const noses = [nose1, nose2, nose3]
const animations = [showNose1, showNose2, showNose3]
const lock = [false, false, false]

const fadeOthers = index => {
  for (let i = 0; i < noses.length; i++) {
    if (i == index)
      animate.easeInOut(noses[i].wrapOpacity, 0.99, { duration: 0.3 })
    else animate.easeInOut(noses[i].wrapOpacity, 0.55, { duration: 0.3 })
  }
}

const pageHandle = index => {
  if (!lock[index]) {
    console.log('animate! - ', index)
    animations[index]()
    lock[index] = true
  }
  fadeOthers(index)
}

export default pageHandle
