import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LocalPharmacyFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z\"/>")
      .name("LocalPharmacyFilled")
  }
}

export default LocalPharmacyFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
