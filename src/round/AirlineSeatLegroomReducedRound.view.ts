import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirlineSeatLegroomReducedRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.97 19.2c.18.96-.55 1.8-1.47 1.8h-2.69a2 2 0 0 1-1.94-2.49L15 14H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 2.76 2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1H8c-1.66 0-3-1.34-3-3z\"/>")
      .name("AirlineSeatLegroomReducedRound")
  }
}

export default AirlineSeatLegroomReducedRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
