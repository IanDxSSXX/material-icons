import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class GifSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11.5 9H13v6h-1.5V9zM10 9H5v6h5v-3H8.5v1.5h-2v-3H10V9zm9 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z\"/>")
      .name("GifSharp")
  }
}

export default GifSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
