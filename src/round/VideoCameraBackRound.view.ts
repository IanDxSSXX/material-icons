import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoCameraBackRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l3.15 3.13c.31.32.85.09.85-.35V7.7c0-.44-.54-.67-.85-.35L18 10.48zM5.6 15.2l1.38-1.83c.2-.27.6-.27.8 0L9 15l2.23-2.97c.2-.27.6-.27.8 0l2.38 3.17a.5.5 0 0 1-.4.8H6a.5.5 0 0 1-.4-.8z\"/>")
      .name("VideoCameraBackRound")
  }
}

export default VideoCameraBackRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
