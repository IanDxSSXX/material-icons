import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CallMissedOutgoingSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z\"/>")
      .name("CallMissedOutgoingSharp")
  }
}

export default CallMissedOutgoingSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>