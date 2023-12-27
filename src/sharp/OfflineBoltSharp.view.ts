import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OfflineBoltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z\"/>")
      .name("OfflineBoltSharp")
  }
}

export default OfflineBoltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
