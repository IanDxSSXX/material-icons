import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon7mpRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 14h1.5v1.5H15z\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.5 14.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v4.25zm-.12-6.25c-.56 0-.97-.54-.8-1.08L12.62 7h-1.87c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.67 0 1.15.65.96 1.29l-1.28 4.12c-.11.35-.43.59-.8.59zM18 16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1V16z\"/>")
      .name("Icon7mpRound")
  }
}

export default Icon7mpRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
