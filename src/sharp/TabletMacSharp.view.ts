import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TabletMacSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 0H2v24h19V0zm-9.5 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z\"/>")
      .name("TabletMacSharp")
  }
}

export default TabletMacSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
