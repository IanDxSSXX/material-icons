import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TrySharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 2H2v20l4-4h16V2zm-8.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z\"/>")
      .name("TrySharp")
  }
}

export default TrySharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
