import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class RestaurantSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z\"/>")
      .name("RestaurantSharp")
  }
}

export default RestaurantSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>