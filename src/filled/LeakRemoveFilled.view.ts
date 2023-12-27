import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LeakRemoveFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97A8.99 8.99 0 0 1 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5A11.044 11.044 0 0 0 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43A6.922 6.922 0 0 0 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56 1.46 1.46A8.98 8.98 0 0 1 21 12v-2c-2.06 0-3.98.58-5.62 1.56z\"/>")
      .name("LeakRemoveFilled")
  }
}

export default LeakRemoveFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
