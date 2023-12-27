import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CleaningServicesSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 11V1H9v10H3v12h18V11h-6zm4 10h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14v8z\"/>")
      .name("CleaningServicesSharp")
  }
}

export default CleaningServicesSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
