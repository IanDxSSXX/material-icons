import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LabelImportantFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m3.5 18.99 11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z\"/>")
      .name("LabelImportantFilled")
  }
}

export default LabelImportantFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
