import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PaddingRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm6 3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z\"/>")
      .name("PaddingRound")
  }
}

export default PaddingRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
