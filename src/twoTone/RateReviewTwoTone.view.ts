import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RateReviewTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4 17.17.59-.59.58-.58H20V4H4v13.17zM18 14h-7.5l2-2H18v2zM6 11.53l5.88-5.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6v-2.47z\" opacity=\".3\"/><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l5.89-5.87z\"/>")
      .name("RateReviewTwoTone")
  }
}

export default RateReviewTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>