import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DeleteOutlineOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z\"/>")
      .name("DeleteOutlineOutlined")
  }
}

export default DeleteOutlineOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
