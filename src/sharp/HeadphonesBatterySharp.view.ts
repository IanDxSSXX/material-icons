import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HeadphonesBatterySharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 7V6h-2v1h-2v11h6V7zM8 6c-3.31 0-6 2.69-6 6v6h4v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h4v-6c0-3.31-2.69-6-6-6z\"/>")
      .name("HeadphonesBatterySharp")
  }
}

export default HeadphonesBatterySharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
