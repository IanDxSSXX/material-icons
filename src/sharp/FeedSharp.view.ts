import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FeedSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 3H3v18h18V8l-5-5zM7 7h5v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2zm-2-4V5l4 4h-4z\"/>")
      .name("FeedSharp")
  }
}

export default FeedSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
