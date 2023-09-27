import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LabelImportantSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z\"/>")
      .name("LabelImportantSharp")
  }
}

export default LabelImportantSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
