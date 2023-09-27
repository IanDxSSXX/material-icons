import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class IsoSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 3H3v18h18V3zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z\"/>")
      .name("IsoSharp")
  }
}

export default IsoSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
