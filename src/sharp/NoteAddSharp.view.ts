import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NoteAddSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H4v20h16V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z\"/>")
      .name("NoteAddSharp")
  }
}

export default NoteAddSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
