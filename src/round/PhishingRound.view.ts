import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhishingRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 9c0-1.3-.84-2.4-2-2.82V3c0-.55-.45-1-1-1s-1 .45-1 1v3.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82v3.01c0 2.09-1.52 3.96-3.6 4.16C9.02 19.21 7 17.34 7 15v-1h1.79c.45 0 .67-.54.35-.85l-3.29-3.3a.5.5 0 0 0-.85.36v4.58c0 3.05 2.19 5.77 5.21 6.16C13.87 21.42 17 18.57 17 15v-3.18c1.16-.42 2-1.52 2-2.82zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"/>")
      .name("PhishingRound")
  }
}

export default PhishingRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
