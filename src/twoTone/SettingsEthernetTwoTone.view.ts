import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SettingsEthernetTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z\"/>")
      .name("SettingsEthernetTwoTone")
  }
}

export default SettingsEthernetTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
