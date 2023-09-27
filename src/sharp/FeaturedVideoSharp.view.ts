import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FeaturedVideoSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M23 3H1v18h22V3zm-11 9H3V5h9v7z\"/>")
      .name("FeaturedVideoSharp")
  }
}

export default FeaturedVideoSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
