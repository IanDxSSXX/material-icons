import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon30fpsSelectSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 4v2h5v2H5v2h4v2H4v2h7V4H4zm9 0h7v10h-7V4zm5 2h-3v6h3V6zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z\"/>")
      .name("Icon30fpsSelectSharp")
  }
}

export default Icon30fpsSelectSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
