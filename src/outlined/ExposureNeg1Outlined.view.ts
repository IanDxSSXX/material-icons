import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ExposureNeg1Outlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z\"/>")
      .name("ExposureNeg1Outlined")
  }
}

export default ExposureNeg1Outlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
