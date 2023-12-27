import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AddLocationFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z\"/>")
      .name("AddLocationFilled")
  }
}

export default AddLocationFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
