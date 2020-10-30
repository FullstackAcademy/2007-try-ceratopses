import React from 'react';
import {
  SignInContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormText,
  FormLinkP,
  FormButton,
} from './SignInElements';

const SignIn = () => {
  return (
    <>
      <SignInContainer>
        <FormWrap>
          <Icon to="/">Florita</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Log In To Your Account</FormH1>
              <FormLabel htmlFor="for">Username (Email)</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Log In</FormButton>
              <FormText>Forgot Password?</FormText>
              <FormLinkP to="#">Get a new password here</FormLinkP>
              <FormText>No Account Yet?</FormText>
              <FormLinkP to="/signup">Sign up here</FormLinkP>
            </Form>
          </FormContent>
        </FormWrap>
      </SignInContainer>
    </>
  );
};

export default SignIn;
