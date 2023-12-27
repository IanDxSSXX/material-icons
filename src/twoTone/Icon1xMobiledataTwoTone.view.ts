import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon1xMobiledataTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 7h4v10H6V9H4V7zm11.83 4.72L18.66 7h-2.33l-1.66 2.77L13 7h-2.33l2.83 4.72L10.33 17h2.33l2-3.34 2 3.34H19l-3.17-5.28z\"/>")
      .name("Icon1xMobiledataTwoTone")
  }
}

export default Icon1xMobiledataTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
