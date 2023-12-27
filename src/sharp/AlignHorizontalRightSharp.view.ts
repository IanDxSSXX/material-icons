import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AlignHorizontalRightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z\"/>")
      .name("AlignHorizontalRightSharp")
  }
}

export default AlignHorizontalRightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
