import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StayCurrentPortraitSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 1.01 5.01 1v22H19V1.01zM17 19H7V5h10v14z\"/>")
      .name("StayCurrentPortraitSharp")
  }
}

export default StayCurrentPortraitSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
