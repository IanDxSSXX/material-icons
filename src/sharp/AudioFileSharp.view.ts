import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AudioFileSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14 2H4v20h16V8l-6-6zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4v2zm-3-4V3.5L18.5 9H13z\"/>")
      .name("AudioFileSharp")
  }
}

export default AudioFileSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
