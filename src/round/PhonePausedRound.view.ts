import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhonePausedRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm3 1v5c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zm.23 11.26-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z\"/>")
      .name("PhonePausedRound")
  }
}

export default PhonePausedRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
