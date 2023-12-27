import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LogoutOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z\"/>")
      .name("LogoutOutlined")
  }
}

export default LogoutOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
