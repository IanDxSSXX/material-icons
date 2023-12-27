import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AppsOutageRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm.07-10H12c-1.1 0-2 .9-2 2s.9 2 2 2c.22 0 .43-.04.63-.1A6.9 6.9 0 0 1 12 5c0-.34.02-.67.07-1zM19 12a6.9 6.9 0 0 1-2.9-.63c-.06.2-.1.41-.1.63 0 1.1.9 2 2 2s2-.9 2-2v-.07c-.33.05-.66.07-1 .07zm-1 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1-20c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 7.5c0 .28-.22.5-.5.5-.27 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5zM19 6c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5z\"/>")
      .name("AppsOutageRound")
  }
}

export default AppsOutageRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
