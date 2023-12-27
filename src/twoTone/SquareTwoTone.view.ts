import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SquareTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 5h14v14H5z\" opacity=\".3\"/><path d=\"M3 3v18h18V3H3zm16 16H5V5h14v14z\"/>")
      .name("SquareTwoTone")
  }
}

export default SquareTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
