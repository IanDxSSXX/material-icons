import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ArrowRightOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m10 17 5-5-5-5v10z\"/>")
      .name("ArrowRightOutlined")
  }
}

export default ArrowRightOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>