import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BookmarkAddedFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m19 21-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21zM17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z\"/>")
      .name("BookmarkAddedFilled")
  }
}

export default BookmarkAddedFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
