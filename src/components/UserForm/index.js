import React from "react";
import { Form, Input, Button, Title, Error } from "./styles";
import { inputValues } from "../../hooks/inputValue";

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = inputValues("");
  const password = inputValues("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
