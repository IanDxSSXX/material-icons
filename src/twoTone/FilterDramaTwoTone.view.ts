import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterDramaTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 12h-1.5v-.5C17.5 8.47 15.03 6 12 6c-1.8 0-3.39.88-4.4 2.22 2.54.7 4.4 3.02 4.4 5.78h-2c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4h13c1.65 0 3-1.35 3-3s-1.35-3-3-3z\" opacity=\".3\"/><path d=\"M19.35 10.04A7.49 7.49 0 0 0 12 4a7.48 7.48 0 0 0-6.64 4.04A5.996 5.996 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z\"/>")
      .name("FilterDramaTwoTone")
  }
}

export default FilterDramaTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
