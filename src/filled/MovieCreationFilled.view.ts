import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MovieCreationFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z\"/>")
      .name("MovieCreationFilled")
  }
}

export default MovieCreationFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
