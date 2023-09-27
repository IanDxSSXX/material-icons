import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AudiotrackTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<circle cx=\"10\" cy=\"17\" r=\"2\" opacity=\".3\"/><path d=\"M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z\"/>")
      .name("AudiotrackTwoTone")
  }
}

export default AudiotrackTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
