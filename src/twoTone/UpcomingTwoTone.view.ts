import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UpcomingTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 17c-2.04 0-3.81-1.24-4.58-3H4v5h16v-5h-3.42c-.77 1.76-2.54 3-4.58 3z\" opacity=\".3\"/><path d=\"m21.16 7.26-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM11 3h2v5h-2zm9 9h-5c0 1.66-1.34 3-3 3s-3-1.34-3-3H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H4v-5h3.42c.77 1.76 2.54 3 4.58 3s3.81-1.24 4.58-3H20v5zM6.4 10.81 7.81 9.4 4.26 5.84 2.84 7.26c.11.03 3.56 3.55 3.56 3.55z\"/>")
      .name("UpcomingTwoTone")
  }
}

export default UpcomingTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
