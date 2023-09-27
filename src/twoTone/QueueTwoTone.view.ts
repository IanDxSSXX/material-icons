import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class QueueTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8 16h12V4H8v12zm1-7h4V5h2v4h4v2h-4v4h-2v-4H9V9z\" opacity=\".3\"/><path d=\"M2 20c0 1.1.9 2 2 2h14v-2H4V6H2v14zM20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z\"/>")
      .name("QueueTwoTone")
  }
}

export default QueueTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
