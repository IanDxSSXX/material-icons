import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SpaceBarFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 9v4H6V9H4v6h16V9z\"/>")
      .name("SpaceBarFilled")
  }
}

export default SpaceBarFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
