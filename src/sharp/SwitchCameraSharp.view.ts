import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwitchCameraSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4h-5.17L15 2H9L7.17 4H2v16h20V4zm-7 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z\"/>")
      .name("SwitchCameraSharp")
  }
}

export default SwitchCameraSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
