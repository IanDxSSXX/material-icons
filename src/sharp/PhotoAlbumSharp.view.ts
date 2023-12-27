import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhotoAlbumSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H4v20h16V2zm-9 2h5v7l-2.5-1.5L11 11V4zM7 18l2.38-3.17L11 17l2.62-3.5L17 18H7z\"/>")
      .name("PhotoAlbumSharp")
  }
}

export default PhotoAlbumSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
