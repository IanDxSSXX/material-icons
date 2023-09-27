import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MuseumFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-6 7h-2v-4l-2 3-2-3v4H8v-7h2l2 3 2-3h2v7z\"/>")
      .name("MuseumFilled")
  }
}

export default MuseumFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
