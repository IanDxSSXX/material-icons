import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DesktopMacSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 2H1v16h9l-2 3v1h8v-1l-2-3h9V2zm-2 12H3V4h18v10z\"/>")
      .name("DesktopMacSharp")
  }
}

export default DesktopMacSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
