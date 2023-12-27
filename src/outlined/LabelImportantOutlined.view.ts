import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LabelImportantOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z\"/>")
      .name("LabelImportantOutlined")
  }
}

export default LabelImportantOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
