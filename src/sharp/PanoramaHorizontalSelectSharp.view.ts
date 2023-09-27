import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PanoramaHorizontalSelectSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9 4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9z\"/>")
      .name("PanoramaHorizontalSelectSharp")
  }
}

export default PanoramaHorizontalSelectSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
