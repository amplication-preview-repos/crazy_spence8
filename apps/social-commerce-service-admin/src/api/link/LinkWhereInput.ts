import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LinkWhereInput = {
  id?: StringFilter;
  owner?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
