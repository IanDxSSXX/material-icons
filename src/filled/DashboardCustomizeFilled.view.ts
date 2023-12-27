import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DashboardCustomizeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z\"/>")
      .name("DashboardCustomizeFilled")
  }
}

export default DashboardCustomizeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
