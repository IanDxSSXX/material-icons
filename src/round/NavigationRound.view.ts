import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NavigationRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12.93 4.26 6.15 14.99c.34.83-.51 1.66-1.33 1.29l-5.34-2.36c-.26-.11-.55-.11-.81 0l-5.34 2.36c-.82.36-1.67-.46-1.33-1.29l6.15-14.99c.33-.83 1.51-.83 1.85 0z\"/>")
      .name("NavigationRound")
  }
}

export default NavigationRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
