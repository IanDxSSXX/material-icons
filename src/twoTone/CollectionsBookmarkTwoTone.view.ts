import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CollectionsBookmarkTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 4h-1v9l-3-2.25L13 13V4H8v12h12z\" opacity=\".3\"/><path d=\"M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zm18-6V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM15 4h2v5l-1-.75L15 9V4zM8 4h5v9l3-2.25L19 13V4h1v12H8V4z\"/>")
      .name("CollectionsBookmarkTwoTone")
  }
}

export default CollectionsBookmarkTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
