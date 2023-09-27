import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MobileFriendlySharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 1H7v5h2V4h10v16H9v-2H7v5h14V1zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z\"/>")
      .name("MobileFriendlySharp")
  }
}

export default MobileFriendlySharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
