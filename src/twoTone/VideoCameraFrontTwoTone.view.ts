import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoCameraFrontTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zM16 18H4V6h12v12zm-6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 6 15.43V16h8v-.57z\"/><path d=\"M4 18h12V6H4v12zm6-10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 7.43c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 14 15.43V16H6v-.57z\" opacity=\".3\"/>")
      .name("VideoCameraFrontTwoTone")
  }
}

export default VideoCameraFrontTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
