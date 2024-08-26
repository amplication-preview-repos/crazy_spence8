import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  author?: string | null;
  content?: string | null;
  media?: InputJsonValue;
};
