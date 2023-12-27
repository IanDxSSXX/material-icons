import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SkipNextOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m6 18 8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z\"/>")
      .name("SkipNextOutlined")
  }
}

export default SkipNextOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
