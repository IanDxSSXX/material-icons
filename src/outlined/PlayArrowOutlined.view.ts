import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlayArrowOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z\"/>")
      .name("PlayArrowOutlined")
  }
}

export default PlayArrowOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
