import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CropPortraitSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 3H5v18h14V3zm-2 16H7V5h10v14z\"/>")
      .name("CropPortraitSharp")
  }
}

export default CropPortraitSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
