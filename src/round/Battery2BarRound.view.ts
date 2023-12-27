import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Battery2BarRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1zm-2 1H9v10h6V6z\"/>")
      .name("Battery2BarRound")
  }
}

export default Battery2BarRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
