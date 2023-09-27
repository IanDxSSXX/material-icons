import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FeaturedVideoTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 19h18V5H3v14zM4 6h9v7H4V6z\" opacity=\".3\"/><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z\"/>")
      .name("FeaturedVideoTwoTone")
  }
}

export default FeaturedVideoTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
