import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlaylistAddRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm5 8v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z\"/>")
      .name("PlaylistAddRound")
  }
}

export default PlaylistAddRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
