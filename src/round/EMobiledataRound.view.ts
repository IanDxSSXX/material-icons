import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EMobiledataRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V9h5c.55 0 1-.45 1-1z\"/>")
      .name("EMobiledataRound")
  }
}

export default EMobiledataRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
