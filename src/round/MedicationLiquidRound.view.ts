import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MedicationLiquidRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 5h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm10 1H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.5 9h-1v1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1h-1c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12h1v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM20 6c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V20c0 .55.45 1 1 1s1-.45 1-1v-6.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4z\"/>")
      .name("MedicationLiquidRound")
  }
}

export default MedicationLiquidRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>