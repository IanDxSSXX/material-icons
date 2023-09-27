import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FilterBAndWTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 5h-7v6l7 8zm-7 14v-8l-7 8z\" opacity=\".3\"/><path d=\"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9 0H5l7-8V5h7v14l-7-8v8z\"/>")
      .name("FilterBAndWTwoTone")
  }
}

export default FilterBAndWTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
