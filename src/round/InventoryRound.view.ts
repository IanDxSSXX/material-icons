import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InventoryRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z\"/><path d=\"M21.75 12.25c-.41-.41-1.09-.41-1.5 0L15.51 17l-2.26-2.25c-.41-.41-1.08-.41-1.5 0-.41.41-.41 1.09 0 1.5l3.05 3.04c.39.39 1.02.39 1.41 0l5.53-5.54c.42-.41.42-1.09.01-1.5z\"/>")
      .name("InventoryRound")
  }
}

export default InventoryRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
