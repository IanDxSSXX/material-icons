import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PartyModeSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 4h-5.17L15 2H9L7.17 4H2v16h20V4zM12 7c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1A5.002 5.002 0 0 1 12 7zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08a5.002 5.002 0 0 1-4.9 6z\"/>")
      .name("PartyModeSharp")
  }
}

export default PartyModeSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
