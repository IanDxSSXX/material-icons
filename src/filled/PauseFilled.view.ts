import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PauseFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/>")
      .name("PauseFilled")
  }
}

export default PauseFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
