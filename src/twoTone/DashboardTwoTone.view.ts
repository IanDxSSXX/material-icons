import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DashboardTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z\" opacity=\".3\"/><path d=\"M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z\"/>")
      .name("DashboardTwoTone")
  }
}

export default DashboardTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
