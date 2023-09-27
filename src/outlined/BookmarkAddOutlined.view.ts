import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class BookmarkAddOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2v2z\"/>")
      .name("BookmarkAddOutlined")
  }
}

export default BookmarkAddOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
