import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  description?: string | null;
  file?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  seller?: string | null;
};
