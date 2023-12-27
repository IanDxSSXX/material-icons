import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PublishedWithChangesRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m16.95 10.23-5.66 5.66a.996.996 0 0 1-1.41 0l-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12 4.95-4.95a.996.996 0 0 1 1.41 0c.4.39.4 1.02.01 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88l1.53 1.53A.5.5 0 0 0 9 7.29V3c0-.28-.22-.5-.5-.5H4.21c-.45 0-.67.54-.35.85L5.2 4.7C3.24 6.52 2 9.11 2 12c0 4.75 3.32 8.73 7.76 9.75.63.14 1.24-.33 1.24-.98 0-.47-.33-.87-.79-.98C6.66 18.98 4 15.8 4 12zm18 0c0-4.75-3.32-8.73-7.76-9.75-.63-.14-1.24.33-1.24.98 0 .47.33.87.79.98C17.34 5.02 20 8.2 20 12c0 2.33-1.02 4.42-2.62 5.88l-1.53-1.53a.5.5 0 0 0-.85.36V21c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L18.8 19.3c1.96-1.82 3.2-4.41 3.2-7.3z\"/>")
      .name("PublishedWithChangesRound")
  }
}

export default PublishedWithChangesRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>