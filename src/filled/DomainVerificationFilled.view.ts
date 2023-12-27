import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DomainVerificationFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z\"/><path d=\"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H5V8h14v10z\"/>")
      .name("DomainVerificationFilled")
  }
}

export default DomainVerificationFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
