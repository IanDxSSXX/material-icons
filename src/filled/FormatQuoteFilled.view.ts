import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FormatQuoteFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z\"/>")
      .name("FormatQuoteFilled")
  }
}

export default FormatQuoteFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
