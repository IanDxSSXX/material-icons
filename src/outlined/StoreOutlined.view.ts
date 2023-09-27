import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class StoreOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m18.36 9 .6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z\"/>")
      .name("StoreOutlined")
  }
}

export default StoreOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
