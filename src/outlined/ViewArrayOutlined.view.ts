import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewArrayOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 7v10H9V7h6zm6-2h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z\"/>")
      .name("ViewArrayOutlined")
  }
}

export default ViewArrayOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
