import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwapHorizontalCircleFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5 3.5 3.5-3.5 3.5V11h-4V9h4V6.5zm-6 11L5.5 14 9 10.5V13h4v2H9v2.5z\"/>")
      .name("SwapHorizontalCircleFilled")
  }
}

export default SwapHorizontalCircleFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
