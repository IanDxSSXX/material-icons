import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LoginRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10.3 7.7a.984.984 0 0 0 0 1.4l1.9 1.9H3c-.55 0-1 .45-1 1s.45 1 1 1h9.2l-1.9 1.9a.984.984 0 0 0 0 1.4c.39.39 1.01.39 1.4 0l3.59-3.59a.996.996 0 0 0 0-1.41L11.7 7.7a.984.984 0 0 0-1.4 0zM20 19h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v14z\"/>")
      .name("LoginRound")
  }
}

export default LoginRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
