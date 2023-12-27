import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StoreMallDirectoryFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"/>")
      .name("StoreMallDirectoryFilled")
  }
}

export default StoreMallDirectoryFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
