import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MapsHomeWorkOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z\"/><path d=\"M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z\"/>")
      .name("MapsHomeWorkOutlined")
  }
}

export default MapsHomeWorkOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>