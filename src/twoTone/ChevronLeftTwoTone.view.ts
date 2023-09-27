import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ChevronLeftTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z\"/>")
      .name("ChevronLeftTwoTone")
  }
}

export default ChevronLeftTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
