import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WhereToVoteRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zm-1.77 10.66-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71 2.83-2.83a.996.996 0 1 1 1.41 1.41l-3.54 3.54c-.38.38-1.02.38-1.41-.01z\"/>")
      .name("WhereToVoteRound")
  }
}

export default WhereToVoteRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
