import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GavelFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m5.25 8.069 2.83-2.827 14.134 14.15-2.83 2.827zm4.236-4.242L12.314.998l5.657 5.656-2.828 2.83zM.999 12.315l2.828-2.829 5.657 5.657-2.828 2.828zM1 21h12v2H1z\"/>")
      .name("GavelFilled")
  }
}

export default GavelFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
