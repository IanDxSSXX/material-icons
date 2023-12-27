import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BorderAllFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z\"/>")
      .name("BorderAllFilled")
  }
}

export default BorderAllFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
