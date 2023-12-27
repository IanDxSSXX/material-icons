import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LunchDiningTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path fill-opacity=\".3\" d=\"M4 18h16v1H4zm8-13c-3.39 0-6.99.81-7.82 3h15.66c-.13-.37-.35-.7-.66-1.01C17.93 5.73 15.31 5 12 5z\"/><path d=\"M2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3H2v3zm2-1h16v1H4v-1zm14.66-6.5c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.32 1l-.01-1.98c-1.61-.33-1.62-1.02-3.33-1.02zM22 9c.02-4-4.28-6-10-6C6.29 3 2 5 2 9v1h20V9zM4.18 8C5.01 5.81 8.61 5 12 5c3.31 0 5.93.73 7.19 1.99.3.31.52.64.65 1.01H4.18z\"/>")
      .name("LunchDiningTwoTone")
  }
}

export default LunchDiningTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
