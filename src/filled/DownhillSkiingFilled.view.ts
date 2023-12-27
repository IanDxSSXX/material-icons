import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DownhillSkiingFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27a5.933 5.933 0 0 0 4.34-.17L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.017 5.017 0 0 0 2.83 3.14l.52-1.6 1.43.46-1.12 3.45A7.029 7.029 0 0 1 13 8.59l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.55z\"/>")
      .name("DownhillSkiingFilled")
  }
}

export default DownhillSkiingFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>