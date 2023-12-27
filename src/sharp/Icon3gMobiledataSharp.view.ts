import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon3gMobiledataSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 7v2h5v2H4v2h4v2H3v2h7V7H3zm18 4v6h-9V7h9v2h-7v6h5v-2h-2.5v-2H21z\"/>")
      .name("Icon3gMobiledataSharp")
  }
}

export default Icon3gMobiledataSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
