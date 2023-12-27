import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DesktopWindowsTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 4h18v12H3z\" opacity=\".3\"/><path d=\"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z\"/>")
      .name("DesktopWindowsTwoTone")
  }
}

export default DesktopWindowsTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
