import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PlayDisabledFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8 5.19V5l11 7-2.55 1.63L8 5.19zm12 14.54-5.11-5.11L8 7.73 4.27 4 3 5.27l5 5V19l5.33-3.4 5.4 5.4L20 19.73z\"/>")
      .name("PlayDisabledFilled")
  }
}

export default PlayDisabledFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
