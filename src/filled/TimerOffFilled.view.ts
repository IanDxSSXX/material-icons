import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TimerOffFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 1h6v2H9zm4 7v2.17l6.98 6.98a8.963 8.963 0 0 0-.95-9.76l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42a8.962 8.962 0 0 0-9.77-.96L10.83 8H13zM2.81 2.81 1.39 4.22l3.4 3.4a8.994 8.994 0 0 0 12.59 12.59l2.4 2.4 1.41-1.41L2.81 2.81z\"/>")
      .name("TimerOffFilled")
  }
}

export default TimerOffFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
