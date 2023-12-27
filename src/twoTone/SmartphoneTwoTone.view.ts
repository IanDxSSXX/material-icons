import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SmartphoneTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 5h10v14H7z\" opacity=\".3\"/><path d=\"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"/>")
      .name("SmartphoneTwoTone")
  }
}

export default SmartphoneTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
