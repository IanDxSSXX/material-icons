import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LocalPharmacyOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-3.9 8.63L18.89 19H5.11l1.79-5.37.21-.63-.21-.63L5.11 7h13.78l-1.79 5.37-.21.63.21.63zM13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z\"/>")
      .name("LocalPharmacyOutlined")
  }
}

export default LocalPharmacyOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
