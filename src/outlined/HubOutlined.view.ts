import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HubOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 6.5a2.996 2.996 0 0 0-2.99 3.21l-2.03.68a4.468 4.468 0 0 0-3.22-2.32V5.91A3.018 3.018 0 0 0 15 3c0-1.66-1.34-3-3-3S9 1.34 9 3c0 1.4.96 2.57 2.25 2.91v2.16c-1.4.23-2.58 1.11-3.22 2.32l-2.04-.68C6 9.64 6 9.57 6 9.5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c1.06 0 1.98-.55 2.52-1.37l2.03.68c-.2 1.29.17 2.66 1.09 3.69l-1.41 1.77C6.85 17.09 6.44 17 6 17c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.68-.22-1.3-.6-1.8l1.41-1.77c1.36.76 3.02.75 4.37 0l1.41 1.77c-.37.5-.59 1.12-.59 1.8 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3c-.44 0-.85.09-1.23.26l-1.41-1.77a4.49 4.49 0 0 0 1.09-3.69l2.03-.68c.53.82 1.46 1.37 2.52 1.37 1.66 0 3-1.34 3-3S22.66 6.5 21 6.5zm-18 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM6 21c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-18c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm1 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm6 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3-8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"/>")
      .name("HubOutlined")
  }
}

export default HubOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>