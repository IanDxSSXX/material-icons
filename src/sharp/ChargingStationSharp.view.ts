import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChargingStationSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14.5 11-3 6v-4h-2l3-6v4h2zM5 1h14v22H5V1zm2 5v12h10V6H7z\"/>")
      .name("ChargingStationSharp")
  }
}

export default ChargingStationSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
