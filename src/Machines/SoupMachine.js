import { createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "soup control",
  initial: "inicio",

  states: {
    inicio: {
      on: {
        START: "levelOne",
      },
    },
    levelOne: {
      on: {
        CONTINUE: "levelTwo",
        CANCEL: "inicio",
      },
    },
    levelTwo: {
      on: {
        CONTINUE: "levelThree",
        CANCEL: "inicio",
      },
    },
    levelThree: {
      on: {
        CONTINUE: "levelFour",
        CANCEL: "inicio",
      },
    },
    levelFour: {
      on: {
        FINISH: "inicio",
      },
    },
  },
});

export default bookingMachine;
