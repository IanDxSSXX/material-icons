import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon20mpRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.5 9c0-.55.45-1 1-1h2V7H7.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H10c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H8v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-.55 0-1-.45-1-1V9zm6 8.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v4.25zm.5-7.25v-4c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H14c-.55 0-1-.45-1-1zm5 5.5c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1V16z\"/><path d=\"M15 14h1.5v1.5H15zm-.5-7H16v3h-1.5z\"/>")
      .name("Icon20mpRound")
  }
}

export default Icon20mpRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
