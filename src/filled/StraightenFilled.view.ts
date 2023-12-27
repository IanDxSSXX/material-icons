import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StraightenFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z\"/>")
      .name("StraightenFilled")
  }
}

export default StraightenFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
