import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AllOutTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"12\" cy=\"12\" r=\"5\" opacity=\".3\"/><path d=\"M4 4v4l4-4zm12 0 4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/>")
      .name("AllOutTwoTone")
  }
}

export default AllOutTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
