import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Crop75Outlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z\"/>")
      .name("Crop75Outlined")
  }
}

export default Crop75Outlined as Pretty as Typed<DLightIconType, HTMLSpanElement>