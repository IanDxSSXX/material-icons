import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PentagonFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m2 9 4 12h12l4-12-10-7z\"/>")
      .name("PentagonFilled")
  }
}

export default PentagonFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>