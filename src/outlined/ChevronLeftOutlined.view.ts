import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChevronLeftOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z\"/>")
      .name("ChevronLeftOutlined")
  }
}

export default ChevronLeftOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
