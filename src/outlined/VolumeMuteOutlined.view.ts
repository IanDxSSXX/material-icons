import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VolumeMuteOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z\"/>")
      .name("VolumeMuteOutlined")
  }
}

export default VolumeMuteOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
