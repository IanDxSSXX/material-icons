import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EditNotificationsFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17.58 6.25 1.77 1.77L14.37 13H12.6v-1.77l4.98-4.98zm3.27-.44-1.06-1.06c-.2-.2-.51-.2-.71 0l-.85.85L20 7.37l.85-.85c.2-.2.2-.52 0-.71zM18 12.2V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.82.21 1.57.59 2.21 1.09L10.6 10.4V15h4.6l2.8-2.8zM10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2z\"/>")
      .name("EditNotificationsFilled")
  }
}

export default EditNotificationsFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
