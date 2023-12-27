import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Man4TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L10 22h4l1.73-12.74C15.89 8.07 14.96 7 13.75 7z\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>")
      .name("Man4TwoTone")
  }
}

export default Man4TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
