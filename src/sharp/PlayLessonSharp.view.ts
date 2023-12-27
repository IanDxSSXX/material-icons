import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlayLessonSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 11c.34 0 .67.03 1 .08V2H3v20h9.26A6.995 6.995 0 0 1 18 11zM7 11V4h5v7L9.5 9.5 7 11z\"/><path d=\"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z\"/>")
      .name("PlayLessonSharp")
  }
}

export default PlayLessonSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
