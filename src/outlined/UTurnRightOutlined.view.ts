import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UTurnRightOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 9v12h2V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-1.59-1.59L13 13l4 4 4-4-1.41-1.41L18 13.17V9c0-3.31-2.69-6-6-6S6 5.69 6 9z\"/>")
      .name("UTurnRightOutlined")
  }
}

export default UTurnRightOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
