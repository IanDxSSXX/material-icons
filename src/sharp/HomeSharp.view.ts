import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HomeSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z\"/>")
      .name("HomeSharp")
  }
}

export default HomeSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>