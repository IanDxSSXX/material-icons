import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ViewComfyFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2 4v7h20V4H2zm8 16h12v-7H10v7zm-8 0h6v-7H2v7z\"/>")
      .name("ViewComfyFilled")
  }
}

export default ViewComfyFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
