import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CheckTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\"/>")
      .name("CheckTwoTone")
  }
}

export default CheckTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
