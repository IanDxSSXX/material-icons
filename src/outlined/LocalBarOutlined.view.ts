import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LocalBarOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14.77 9 12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7 5.66 5h12.69l-1.78 2H7.43z\"/>")
      .name("LocalBarOutlined")
  }
}

export default LocalBarOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
