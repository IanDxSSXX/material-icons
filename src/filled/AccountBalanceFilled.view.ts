import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AccountBalanceFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z\"/>")
      .name("AccountBalanceFilled")
  }
}

export default AccountBalanceFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
