import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StarOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z\"/>")
      .name("StarOutlined")
  }
}

export default StarOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
