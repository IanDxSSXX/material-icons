import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CommentBankTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m4 18 2-2h14V4H4v14zm9-12h5v8l-2.5-1.5L13 14V6z\" opacity=\".3\"/><path d=\"M18 14V6h-5v8l2.5-1.5z\"/><path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z\"/>")
      .name("CommentBankTwoTone")
  }
}

export default CommentBankTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
