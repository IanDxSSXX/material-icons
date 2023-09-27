import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ChargingStationFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m14.5 11-3 6v-4h-2l3-6v4h2zM7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 5v12h10V6H7z\"/>")
      .name("ChargingStationFilled")
  }
}

export default ChargingStationFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
