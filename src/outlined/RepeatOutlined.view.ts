import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RepeatOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z\"/>")
      .name("RepeatOutlined")
  }
}

export default RepeatOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
