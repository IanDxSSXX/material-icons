import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FilterAltOffSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21.05 4H6.83l7.97 7.97zM2.81 2.81 1.39 4.22 10 13v7h4v-3.17l5.78 5.78 1.41-1.42z\"/>")
      .name("FilterAltOffSharp")
  }
}

export default FilterAltOffSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
