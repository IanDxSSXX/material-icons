import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon30fpsOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9A2.1 2.1 0 0 0 8.9 12 2.1 2.1 0 0 0 11 9.9V8c0-1.66-1.34-3-3-3H2zm17 3v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z\"/>")
      .name("Icon30fpsOutlined")
  }
}

export default Icon30fpsOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>