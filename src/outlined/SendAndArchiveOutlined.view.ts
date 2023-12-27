import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SendAndArchiveOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z\"/><path d=\"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3 .71-.71 1.79 1.79V14h1v4.09l1.79-1.79.71.7-3 3z\"/>")
      .name("SendAndArchiveOutlined")
  }
}

export default SendAndArchiveOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
