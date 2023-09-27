import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FormatListBulletedTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7 5h14v2H7z\"/><circle cx=\"4\" cy=\"6\" r=\"1.5\"/><path d=\"M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z\"/><circle cx=\"4\" cy=\"12\" r=\"1.5\"/>")
      .name("FormatListBulletedTwoTone")
  }
}

export default FormatListBulletedTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
