import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="owner" source="owner" />
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
