import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InstallDesktopSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z\"/><path d=\"m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z\"/>")
      .name("InstallDesktopSharp")
  }
}

export default InstallDesktopSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
