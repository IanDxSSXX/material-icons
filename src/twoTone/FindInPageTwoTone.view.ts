import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FindInPageTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 4v16h11.6l-2.85-2.85c-.83.55-1.79.83-2.75.83a5 5 0 0 1-3.53-1.46 4.98 4.98 0 0 1 0-7.05C9.45 8.49 10.72 8 12 8a4.992 4.992 0 0 1 4.17 7.74L18 17.58V9l-5-5H6z\" opacity=\".3\"/><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 15.58-1.84-1.84a4.992 4.992 0 0 0-.64-6.28A4.96 4.96 0 0 0 12 8a5 5 0 0 0-3.53 1.46 4.98 4.98 0 0 0 0 7.05 4.982 4.982 0 0 0 6.28.63L17.6 20H6V4h7l5 5v8.58zm-3.01-4.59c0 .8-.31 1.55-.88 2.11-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11S11.2 10 12 10s1.55.31 2.11.88c.57.56.88 1.31.88 2.11z\"/>")
      .name("FindInPageTwoTone")
  }
}

export default FindInPageTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
