import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PermScanWifiFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"/>")
      .name("PermScanWifiFilled")
  }
}

export default PermScanWifiFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
