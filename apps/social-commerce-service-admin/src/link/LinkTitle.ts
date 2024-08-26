import { Link as TLink } from "../api/link/Link";

export const LINK_TITLE_FIELD = "title";

export const LinkTitle = (record: TLink): string => {
  return record.title?.toString() || String(record.id);
};
