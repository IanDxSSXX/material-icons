import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WorkOffRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4.11 2.54A.996.996 0 1 0 2.7 3.95L4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l1.29 1.29a.996.996 0 1 0 1.41-1.41L4.11 2.54zM10 4h4v2h-3.6L22 17.6V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4z\"/>")
      .name("WorkOffRound")
  }
}

export default WorkOffRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
