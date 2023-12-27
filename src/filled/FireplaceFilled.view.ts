import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FireplaceFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 2v20h20V2H2zm9.86 14.96c.76-.24 1.4-1.04 1.53-1.63.13-.56-.1-1.05-.2-1.6-.08-.46-.07-.85.08-1.28.54 1.21 2.15 1.64 1.98 3.18-.19 1.7-2.11 2.38-3.39 1.33zM20 20h-2v-2h-2.02A4.98 4.98 0 0 0 17 15c0-1.89-1.09-2.85-1.85-3.37C12.2 9.61 13 7 13 7c-6.73 3.57-6.02 7.47-6 8 .03.96.49 2.07 1.23 3H6v2H4V4h16v16z\"/>")
      .name("FireplaceFilled")
  }
}

export default FireplaceFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
