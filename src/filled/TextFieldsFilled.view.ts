import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TextFieldsFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z\"/>")
      .name("TextFieldsFilled")
  }
}

export default TextFieldsFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
