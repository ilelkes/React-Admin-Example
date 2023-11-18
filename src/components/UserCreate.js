import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <div>
      <Create title="Create a User" {...props}>
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="email" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export default UserCreate;
