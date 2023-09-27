import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TextFieldsFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z\"/>")
      .name("TextFieldsFilled")
  }
}

export default TextFieldsFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
