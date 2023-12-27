import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatAlignRightTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z\"/>")
      .name("FormatAlignRightTwoTone")
  }
}

export default FormatAlignRightTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
