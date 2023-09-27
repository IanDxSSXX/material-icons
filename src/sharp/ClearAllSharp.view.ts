import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ClearAllSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z\"/>")
      .name("ClearAllSharp")
  }
}

export default ClearAllSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
