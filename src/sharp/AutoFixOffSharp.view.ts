import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AutoFixOffSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42 1.41 1.41-1.46 1.46 1.42 1.42 2.87-2.88-4.24-4.24-2.88 2.87 1.42 1.42zM1.39 4.22l7.07 7.07-6.87 6.88 4.24 4.24 6.88-6.87 7.07 7.07 1.41-1.42L2.81 2.81z\"/>")
      .name("AutoFixOffSharp")
  }
}

export default AutoFixOffSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
