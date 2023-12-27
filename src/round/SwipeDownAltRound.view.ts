import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeDownAltRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 13.9a5 5 0 1 0-2 0v4.27l-.88-.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59a.996.996 0 1 0-1.41-1.41l-.89.88V13.9z\"/>")
      .name("SwipeDownAltRound")
  }
}

export default SwipeDownAltRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
