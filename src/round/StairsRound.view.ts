import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class StairsRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 5h-1.42v3.33H13v3.33h-2.58l.03 3.34H7c-.55 0-1-.45-1-1s.45-1 1-1h1.42v-3.33H11V9.33h2.58V6H17c.55 0 1 .45 1 1s-.45 1-1 1z\"/>")
      .name("StairsRound")
  }
}

export default StairsRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
