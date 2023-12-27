import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SplitscreenSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 4v5H6V4h12m2-2H4v9h16V2zm-2 13v5H6v-5h12m2-2H4v9h16v-9z\"/>")
      .name("SplitscreenSharp")
  }
}

export default SplitscreenSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
