import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WidthWideTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8 6h8v12H8z\" opacity=\".3\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 18H4V6h2v12zm10 0H8V6h8v12zm4 0h-2V6h2v12z\"/>")
      .name("WidthWideTwoTone")
  }
}

export default WidthWideTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
