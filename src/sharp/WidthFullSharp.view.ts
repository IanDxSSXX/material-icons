import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WidthFullSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4H2v16h20V4zM4 6h1v12H4V6zm16 12h-1V6h1v12z\"/>")
      .name("WidthFullSharp")
  }
}

export default WidthFullSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
