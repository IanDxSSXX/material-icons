import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeVerticalRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M0 12c0 3.22 1.13 6.18 3.02 8.5H1.75c-.41 0-.75.34-.75.75s.34.75.75.75H5c.55 0 1-.45 1-1v-3.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.16c-1.86-2.11-3-4.88-3-7.91s1.14-5.79 3-7.91v2.16c0 .41.34.75.75.75S6 6.66 6 6.25V3c0-.55-.45-1-1-1H1.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.27A13.413 13.413 0 0 0 0 12zm8.83 7.1c-.26-.6.09-1.28.73-1.41l3.58-.71-4.35-9.81c-.34-.76 0-1.64.76-1.98.76-.34 1.64 0 1.98.76l2.43 5.49.84-.37c.28-.13.59-.18.9-.17l4.56.21a2 2 0 0 1 1.83 1.45l1.23 4.33c.27.96-.2 1.97-1.11 2.37l-5.63 2.49c-.48.21-1.26.33-1.76.14l-5.45-2.27a.952.952 0 0 1-.54-.52z\"/>")
      .name("SwipeVerticalRound")
  }
}

export default SwipeVerticalRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
