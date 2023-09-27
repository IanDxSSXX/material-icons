import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DirectionsCarFilledSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18.57 5H5.43L3 12v9h3v-2h12v2h3v-9l-2.43-7zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z\"/>")
      .name("DirectionsCarFilledSharp")
  }
}

export default DirectionsCarFilledSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
