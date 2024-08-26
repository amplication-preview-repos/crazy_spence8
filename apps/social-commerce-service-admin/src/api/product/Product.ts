import { JsonValue } from "type-fest";

export type Product = {
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  id: string;
  name: string | null;
  price: number | null;
  seller: string | null;
  updatedAt: Date;
};
