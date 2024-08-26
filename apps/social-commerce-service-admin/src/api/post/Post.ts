import { JsonValue } from "type-fest";

export type Post = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  media: JsonValue;
  updatedAt: Date;
};
