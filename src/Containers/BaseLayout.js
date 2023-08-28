import { useState } from "react";
import Nav from "@/components/Nav";
import StepsLayout from "./StepsLayout";
import useMachine from "@xstate/react";
import bookingMachine from "@/Machines/SoupMachine";

export default function BaseLaout() {
  const [state, send] = useMachine(bookingMachine);
  return (
    <>
      <Nav /> <StepsLayout state={state} send={send} />
    </>
  );
}
