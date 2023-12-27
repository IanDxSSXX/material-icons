import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatAlignRightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z\"/>")
      .name("FormatAlignRightSharp")
  }
}

export default FormatAlignRightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
