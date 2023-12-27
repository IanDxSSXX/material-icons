import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatIndentIncreaseTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z\"/>")
      .name("FormatIndentIncreaseTwoTone")
  }
}

export default FormatIndentIncreaseTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
