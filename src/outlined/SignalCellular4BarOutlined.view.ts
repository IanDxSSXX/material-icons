import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SignalCellular4BarOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2 22h20V2L2 22z\"/>")
      .name("SignalCellular4BarOutlined")
  }
}

export default SignalCellular4BarOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>