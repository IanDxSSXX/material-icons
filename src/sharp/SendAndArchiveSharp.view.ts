import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SendAndArchiveSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7z\"/><path d=\"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3h2.5v-3h1v3H20l-3 3z\"/>")
      .name("SendAndArchiveSharp")
  }
}

export default SendAndArchiveSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
