import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LastPageTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z\"/>")
      .name("LastPageTwoTone")
  }
}

export default LastPageTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
