import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AssistantPhotoFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z\"/>")
      .name("AssistantPhotoFilled")
  }
}

export default AssistantPhotoFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
