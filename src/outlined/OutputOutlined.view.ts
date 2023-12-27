import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OutputOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z\"/><path d=\"M19 19H5V5h14v2h2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2h-2v2z\"/>")
      .name("OutputOutlined")
  }
}

export default OutputOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
