"use client"
import React from "react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

const CreateAccountButton = ({ href }) => {
  const route = useRouter();
  return (
    <Button onClick={() => route.push(href)} variant="createAccount">
      Create for free
    </Button>
  );
};

export default CreateAccountButton;
