import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SolarPowerFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3.33 16H11v-3H4zM13 16h7.67L20 13h-7zm8.11 2H13v4h9zM2 22h9v-4H2.89zm9-14h2v3h-2zm4.764-.795 1.415-1.414L19.3 7.912l-1.414 1.414zm-11.059.708L6.826 5.79 8.24 7.206 6.12 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z\"/>")
      .name("SolarPowerFilled")
  }
}

export default SolarPowerFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
