import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FastRewindOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 9.86v4.28L14.97 12 18 9.86m-9 0v4.28L5.97 12 9 9.86M20 6l-8.5 6 8.5 6V6zm-9 0-8.5 6 8.5 6V6z\"/>")
      .name("FastRewindOutlined")
  }
}

export default FastRewindOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
