import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BookmarkBorderTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z\"/>")
      .name("BookmarkBorderTwoTone")
  }
}

export default BookmarkBorderTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
