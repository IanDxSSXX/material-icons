import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoStableSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 4v16h20V4H2zm2 14V6h2.95l-2.33 8.73L16.82 18H4zm16 0h-2.95l2.34-8.73L7.18 6H20v12z\"/>")
      .name("VideoStableSharp")
  }
}

export default VideoStableSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
