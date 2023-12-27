import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewQuiltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 5v6.5H9.33V5H21zm-6.33 14v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zM8.33 19V5H3v14h5.33z\"/>")
      .name("ViewQuiltSharp")
  }
}

export default ViewQuiltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
