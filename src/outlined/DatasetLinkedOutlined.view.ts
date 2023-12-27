import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DatasetLinkedOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 17h1.09c.28-1.67 1.24-3.1 2.6-4H7v4z\"/><path d=\"M5 19V5h14v7h1c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81c-.35-.61-.6-1.28-.72-2H5z\"/><path d=\"M7 7h4v4H7zm6 0h4v4h-4zm3 13h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2zm4-6h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"/><path d=\"M20 19v-2h-6v2h5z\"/>")
      .name("DatasetLinkedOutlined")
  }
}

export default DatasetLinkedOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
