import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CheckBoxOutlineBlankTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/>")
      .name("CheckBoxOutlineBlankTwoTone")
  }
}

export default CheckBoxOutlineBlankTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
