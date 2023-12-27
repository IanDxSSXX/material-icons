import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AutoFixOffTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4.417 18.174 5.466-5.466 1.414 1.414-5.466 5.466z\" opacity=\".3\"/><path d=\"m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.984.984 0 0 0-.7-.29c-.26 0-.51.1-.71.29l-2.17 2.17 1.41 1.41 1.47-1.45zM2.81 2.81 1.39 4.22l7.07 7.07-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l6.17-6.17 7.07 7.07 1.41-1.41L2.81 2.81zm3.02 16.78-1.41-1.41 5.46-5.46 1.41 1.41-5.46 5.46z\"/>")
      .name("AutoFixOffTwoTone")
  }
}

export default AutoFixOffTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>