import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HdrOffSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.5 15v-2h1.1l.9 2H21l-.9-2.1h.9V9h-5v4.86L17.14 15h.36zm0-4.5h2v1h-2v-1zm-4.5 0v.36l1.5 1.5V10.5c0-.8-.7-1.5-1.5-1.5h-1.86l1.5 1.5H13zM2.51 2.49 1.45 3.55 6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.06-1.06z\"/>")
      .name("HdrOffSharp")
  }
}

export default HdrOffSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
