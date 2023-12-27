import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HMobiledataTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z\"/>")
      .name("HMobiledataTwoTone")
  }
}

export default HMobiledataTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
