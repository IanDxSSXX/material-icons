import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhotoCameraBackSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16.83 5 15 3H9L7.17 5H2v16h20V5h-5.17zM6 17l3-4 2.25 3 3-4L18 17H6z\"/>")
      .name("PhotoCameraBackSharp")
  }
}

export default PhotoCameraBackSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
