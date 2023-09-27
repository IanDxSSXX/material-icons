import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FlagFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z\"/>")
      .name("FlagFilled")
  }
}

export default FlagFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
