"use client"
import React from "react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

const SignInButton = ({ href }) => {
  const route = useRouter();
  return (
    <Button onClick={() => route.push(href)} variant="signIn">
      Sign in
    </Button>
  );
};

export default SignInButton;
