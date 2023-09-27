import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ChargingStationTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17 3v1H7V3h10m0 17H7v1h10v-1\" opacity=\".3\"/><path d=\"m14.5 11-3 6v-4h-2l3-6v4h2zM17 3H7v1h10V3m0 17H7v1h10v-1m0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10zM7 18h10V6H7v12z\"/>")
      .name("ChargingStationTwoTone")
  }
}

export default ChargingStationTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
