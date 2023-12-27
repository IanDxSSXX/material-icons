import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SouthTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z\"/>")
      .name("SouthTwoTone")
  }
}

export default SouthTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
