import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MouseSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z\"/>")
      .name("MouseSharp")
  }
}

export default MouseSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
