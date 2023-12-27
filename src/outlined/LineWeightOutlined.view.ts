import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LineWeightOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z\"/>")
      .name("LineWeightOutlined")
  }
}

export default LineWeightOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
