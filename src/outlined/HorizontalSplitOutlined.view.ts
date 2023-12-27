import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HorizontalSplitOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z\"/>")
      .name("HorizontalSplitOutlined")
  }
}

export default HorizontalSplitOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
