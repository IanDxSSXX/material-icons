import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AccountTreeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z\"/>")
      .name("AccountTreeFilled")
  }
}

export default AccountTreeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
