import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon8mpRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 14h1.5v1.5H15z\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3.5c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1v-4zm2.5 11.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v4.25zM18 16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1V16z\"/><path d=\"M11.5 9H13v1.5h-1.5zm0-2.5H13V8h-1.5z\"/>")
      .name("Icon8mpRound")
  }
}

export default Icon8mpRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
