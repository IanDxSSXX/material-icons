import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CurtainsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 19V3H4v16H2v2h20v-2h-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7z\"/>")
      .name("CurtainsSharp")
  }
}

export default CurtainsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
