import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatStrikethroughFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z\"/>")
      .name("FormatStrikethroughFilled")
  }
}

export default FormatStrikethroughFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
