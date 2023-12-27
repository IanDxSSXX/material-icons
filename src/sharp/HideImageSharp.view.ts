import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HideImageSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H5.83L21 18.17zM2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.41L2.81 2.81zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1H6z\"/>")
      .name("HideImageSharp")
  }
}

export default HideImageSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
