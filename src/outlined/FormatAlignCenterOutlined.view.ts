import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatAlignCenterOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z\"/>")
      .name("FormatAlignCenterOutlined")
  }
}

export default FormatAlignCenterOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
