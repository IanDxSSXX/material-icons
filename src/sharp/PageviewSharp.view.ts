import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PageviewSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11.5 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM22 4H2v16h20V4zm-5.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z\"/>")
      .name("PageviewSharp")
  }
}

export default PageviewSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
