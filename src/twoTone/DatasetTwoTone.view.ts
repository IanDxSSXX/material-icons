import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DatasetTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 19h14V5H5v14zm8-12h4v4h-4V7zm0 6h4v4h-4v-4zM7 7h4v4H7V7zm0 6h4v4H7v-4z\" opacity=\".3\"/><path d=\"M7 13h4v4H7zm6 0h4v4h-4z\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z\"/><path d=\"M7 7h4v4H7zm6 0h4v4h-4z\"/>")
      .name("DatasetTwoTone")
  }
}

export default DatasetTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
