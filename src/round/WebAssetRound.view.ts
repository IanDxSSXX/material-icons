import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WebAssetRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1z\"/>")
      .name("WebAssetRound")
  }
}

export default WebAssetRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
