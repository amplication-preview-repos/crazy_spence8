import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  seller?: SortOrder;
  updatedAt?: SortOrder;
};
