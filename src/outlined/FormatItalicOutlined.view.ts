import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FormatItalicOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z\"/>")
      .name("FormatItalicOutlined")
  }
}

export default FormatItalicOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
