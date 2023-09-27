import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CallMissedTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m5 10.41 7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z\"/>")
      .name("CallMissedTwoTone")
  }
}

export default CallMissedTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
