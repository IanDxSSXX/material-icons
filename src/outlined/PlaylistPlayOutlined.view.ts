import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PlaylistPlayOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z\"/>")
      .name("PlaylistPlayOutlined")
  }
}

export default PlaylistPlayOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
