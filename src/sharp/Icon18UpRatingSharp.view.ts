import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon18UpRatingSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z\"/><path d=\"M21 3H3v18h18V3zM10 15H8.5v-4.5H7V9h3v6zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4z\"/>")
      .name("Icon18UpRatingSharp")
  }
}

export default Icon18UpRatingSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
