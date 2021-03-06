/**
 * api store，包含参数，结果模型
 */
import {
  getRoot,
  types
} from "mobx-state-tree";
// import { MSTGQLStore } from "mst-gql";
// import { MSTGQLStore } from '../../../../../../mst-gql-vap';
import { MSTGQLStore } from "@/stores/models/MSTGQLStore";

import { AddBookInputModel, BookWrittenModel } from "../models/test";

const BooksParamModel = types.model()
  .named('BooksParam')
  .props({
    // 由选择的执行属性(带有所属type信息BookMutation，field信息addBook，field-args信息book AddBookInput)构建
    BookMutation_addBook_book: types.union(types.undefined, types.late((): any => AddBookInputModel))
  })
const BooksResultModel = types.model()
  .named('BooksResult')
  .props({
    // 由选择的执行属性(带有所属field信息BookWritten)构建
    value: types.union(types.undefined, types.late((): any => BookWrittenModel))
  })

// api名称books构造BooksStore
export const BooksStore = MSTGQLStore
  .named('BooksStore')
  .props({
    endpoint: types.optional(types.late((): any => types.string),'test'),
    param: types.optional(types.late((): any => BooksParamModel), {}),
    result: types.optional(types.late((): any => BooksResultModel), {})
  })

