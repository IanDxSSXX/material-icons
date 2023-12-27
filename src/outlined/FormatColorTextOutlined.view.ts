import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatColorTextOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 20h20v4H2v-4zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5L5.49 17zm4.42-5.61 2.03-5.79h.12l2.03 5.79H9.91z\"/>")
      .name("FormatColorTextOutlined")
  }
}

export default FormatColorTextOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
