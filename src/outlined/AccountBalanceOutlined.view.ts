import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AccountBalanceOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z\"/>")
      .name("AccountBalanceOutlined")
  }
}

export default AccountBalanceOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
