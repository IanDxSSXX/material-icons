import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m15.96 10.29-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z\"/>")
      .name("FilterSharp")
  }
}

export default FilterSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
