import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MenuOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/>")
      .name("MenuOutlined")
  }
}

export default MenuOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>