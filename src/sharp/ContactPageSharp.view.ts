import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ContactPageSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H4v20h16V8l-6-6zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 17.43V18z\"/>")
      .name("ContactPageSharp")
  }
}

export default ContactPageSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
