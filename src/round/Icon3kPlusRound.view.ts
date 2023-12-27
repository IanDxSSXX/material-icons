import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon3kPlusRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 11c0 .55-.45 1-1 1H6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8.5v-1H7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1.5v-1H6.25c-.41 0-.75-.34-.75-.75S5.84 9 6.25 9H9c.55 0 1 .45 1 1v4zm4.59 1c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75l-.03-4.49c-.01-.42.33-.76.75-.76.41 0 .75.33.75.74l.03 1.51 1.54-1.98a.698.698 0 0 1 1.11.85L13.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12zm3.91-2.5h-1v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1v-1c0-.28.22-.5.5-.5s.5.22.5.5v1h1c.28 0 .5.22.5.5s-.22.5-.5.5z\"/>")
      .name("Icon3kPlusRound")
  }
}

export default Icon3kPlusRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
