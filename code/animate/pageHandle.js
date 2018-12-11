import { showNose1, showNose2, showNose3 } from '../animate'

const animations = [showNose1, showNose2, showNose3]

const pageHandle = eventIndex => {
  console.log('eventIndex', eventIndex)
  animations[eventIndex]()
}

export default pageHandle
