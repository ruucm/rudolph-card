import { showNose1, showNose2, showNose3 } from '../animate'

const animations = [showNose1, showNose2, showNose3]
const lock = [false, false, false]

const pageHandle = index => {
  if (!lock[index]) {
    console.log('animate! - ', index)
    animations[index]()
    lock[index] = true
  }
}

export default pageHandle
