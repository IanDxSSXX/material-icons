import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LoginSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h10V3H12v2h8v14z\"/>")
      .name("LoginSharp")
  }
}

export default LoginSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
