import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FilterNoneSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z\"/>")
      .name("FilterNoneSharp")
  }
}

export default FilterNoneSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
