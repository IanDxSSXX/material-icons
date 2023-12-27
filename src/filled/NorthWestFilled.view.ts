import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NorthWestFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z\"/>")
      .name("NorthWestFilled")
  }
}

export default NorthWestFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
