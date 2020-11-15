import { Instance } from "mobx-state-tree"
import { BookDtoModelBase } from "./BookDtoModel.base"

/* The TypeScript type of an instance of BookDtoModel */
export interface BookDtoModelType extends Instance<typeof BookDtoModel.Type> {}

/* A graphql query fragment builders for BookDtoModel */
export { selectFromBookDto, bookDtoModelPrimitives, BookDtoModelSelector } from "./BookDtoModel.base"

/**
 * BookDtoModel
 */
export const BookDtoModel = BookDtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
