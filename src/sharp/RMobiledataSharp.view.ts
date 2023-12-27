import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RMobiledataSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.8 7.2 9 10H7L5.87 7.33H4V10H2V2h7v5.2H7.8zM7 4H4v1.33h3V4z\"/>")
      .name("RMobiledataSharp")
  }
}

export default RMobiledataSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
