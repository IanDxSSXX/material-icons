import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NotesFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z\"/>")
      .name("NotesFilled")
  }
}

export default NotesFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
