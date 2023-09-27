import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class BedtimeFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z\"/>")
      .name("BedtimeFilled")
  }
}

export default BedtimeFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>