import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ImagesearchRollerFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2\"/>")
      .name("ImagesearchRollerFilled")
  }
}

export default ImagesearchRollerFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
