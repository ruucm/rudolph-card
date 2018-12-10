import { animate } from 'framer'

import { nose, nose2, nose3 } from '../datas'
import { sleep } from '../utils'

const showSnow = async () => {
  nose3.nextBtnScale.set(0.6)
  animate.ease(nose3.nextBtnScale, 60, {
    duration: 2,
  })

  animate.ease(nose3.nextBtnOpacity, 0.2)
  await sleep(200)
  animate.ease(nose3.nextBtnOpacity, 1)
  animate.ease(nose3.nextBtnBackground, '#004ED8')
}

export default showSnow
