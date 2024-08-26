import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="owner" source="owner" />
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
