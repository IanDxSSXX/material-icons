import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NightlightRoundFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12.01 12c0-3.57 2.2-6.62 5.31-7.87.89-.36.75-1.69-.19-1.9-1.1-.24-2.27-.3-3.48-.14-4.51.6-8.12 4.31-8.59 8.83C4.44 16.93 9.13 22 15.01 22c.73 0 1.43-.08 2.12-.23.95-.21 1.1-1.53.2-1.9A8.46 8.46 0 0 1 12.01 12z\"/>")
      .name("NightlightRoundFilled")
  }
}

export default NightlightRoundFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
