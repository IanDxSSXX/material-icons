import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeVerticalSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M1 3.5h2.02C1.13 5.82 0 8.78 0 12s1.13 6.18 3.02 8.5H1V22h5v-5H4.5v2.91c-1.86-2.11-3-4.88-3-7.91s1.14-5.79 3-7.91V7H6V2H1v1.5zm20.71 7.68 2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98.76-.34 1.64 0 1.98.76l2.43 5.49 1.26-.56 6.49.3z\"/>")
      .name("SwipeVerticalSharp")
  }
}

export default SwipeVerticalSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
