import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SentimentVerySatisfiedTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8.88 7.82 11 9.94 9.94 11 8.88 9.94 7.82 11 6.76 9.94l2.12-2.12zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm4.18-6.5-1.06-1.06L14.06 11 13 9.94l2.12-2.12 2.12 2.12L16.18 11z\" opacity=\".3\"/><path d=\"M8.88 9.94 9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zm4.12 0L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zM11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z\"/>")
      .name("SentimentVerySatisfiedTwoTone")
  }
}

export default SentimentVerySatisfiedTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
