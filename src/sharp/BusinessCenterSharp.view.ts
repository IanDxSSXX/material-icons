import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class BusinessCenterSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 16v-1H3.01v6H21v-6h-7v1h-4zm12-9h-6V5l-2-2h-4L8 5v2H2v7h8v-2h4v2h8V7zm-8 0h-4V5h4v2z\"/>")
      .name("BusinessCenterSharp")
  }
}

export default BusinessCenterSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
