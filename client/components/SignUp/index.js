import React from 'react';
import {
  SignUpContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormText,
  FormButton,
} from './SignUpElements';

const SignUp = () => {
  return (
    <>
      <SignUpContainer>
        <FormWrap>
          <Icon to="/">Florita</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign Up to a New Account</FormH1>
              <FormLabel htmlFor="for">Username (Email)</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign Up</FormButton>
              <FormText>
                You will get a confirmation email to confirm enrollment
              </FormText>
            </Form>
          </FormContent>
        </FormWrap>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
