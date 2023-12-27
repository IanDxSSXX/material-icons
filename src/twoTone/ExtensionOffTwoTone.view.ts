import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExtensionOffTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 13v2.17L8.83 6H11V4c0-.28.22-.5.5-.5s.5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2zm-10-.5c0 1.5-.83 3.57-3 4.37V19h2.13c.8-2.17 2.87-3 4.37-3 .69 0 1.5.18 2.25.58l-6.33-6.33c.4.75.58 1.56.58 2.25z\" opacity=\".3\"/><path d=\"m1.39 4.22 1.62 1.62c0 .05-.01.1-.01.16v3.8c2.7 0 3 2.16 3 2.7s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.71 2.16-3 2.7-3s2.7.29 2.7 3H18c.06 0 .11 0 .16-.01l1.61 1.61 1.41-1.41L2.81 2.81 1.39 4.22zM11.5 16c-1.5 0-3.57.83-4.37 3H5v-2.13c2.17-.8 3-2.87 3-4.37 0-.69-.18-1.5-.58-2.25l6.33 6.33A4.89 4.89 0 0 0 11.5 16zM8.83 6l-2-2H9a2.5 2.5 0 0 1 5 0h4c1.1 0 2 .9 2 2v4a2.5 2.5 0 0 1 0 5v2.17l-2-2V13h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2V6h-6V4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H8.83z\"/>")
      .name("ExtensionOffTwoTone")
  }
}

export default ExtensionOffTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
