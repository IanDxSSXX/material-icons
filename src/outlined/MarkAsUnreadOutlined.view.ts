import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MarkAsUnreadOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2 2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4l5.73 3z\"/><path d=\"M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 11H7v-7l6.5 3.33L20 12v7zm-6.5-5.67L7 10h13l-6.5 3.33z\"/>")
      .name("MarkAsUnreadOutlined")
  }
}

export default MarkAsUnreadOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
