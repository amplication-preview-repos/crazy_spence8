import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  author?: string | null;
  content?: string | null;
  media?: InputJsonValue;
};
