import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class OpenWithTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"/>")
      .name("OpenWithTwoTone")
  }
}

export default OpenWithTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
