import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AirlineSeatIndividualSuiteTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<circle cx=\"7\" cy=\"11\" r=\"1\" opacity=\".3\"/><path d=\"M19 9h-6v6h8v-4c0-1.1-.9-2-2-2z\" opacity=\".3\"/><path d=\"M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z\"/>")
      .name("AirlineSeatIndividualSuiteTwoTone")
  }
}

export default AirlineSeatIndividualSuiteTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
