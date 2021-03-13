import { category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategotyResponseModel extends ResponseModel{
    data:category[]
}