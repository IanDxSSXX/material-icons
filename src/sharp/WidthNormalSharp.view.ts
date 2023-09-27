import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WidthNormalSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 4H2v16h20V4zM4 6h4v12H4V6zm16 12h-4V6h4v12z\"/>")
      .name("WidthNormalSharp")
  }
}

export default WidthNormalSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
