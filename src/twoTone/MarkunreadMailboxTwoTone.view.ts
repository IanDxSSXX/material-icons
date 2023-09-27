import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MarkunreadMailboxTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 12H6V8H4v12h16V8H10z\" opacity=\".3\"/><path d=\"M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"/>")
      .name("MarkunreadMailboxTwoTone")
  }
}

export default MarkunreadMailboxTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
