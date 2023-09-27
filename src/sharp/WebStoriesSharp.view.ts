import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WebStoriesSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17 4h2v16h-2V4zM2 2v20h13V2H2zm19 16h1.5V6H21v12z\"/>")
      .name("WebStoriesSharp")
  }
}

export default WebStoriesSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
