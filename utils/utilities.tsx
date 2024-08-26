export const languages = [
    {
        name: "Javascript",
        icon: "icons/javascript.svg"
    },
    {
        name: "Python",
        icon: "icons/python.svg"
    },
    {
        name: "TypeScript",
        icon: "icons/typescript.svg"
    },
    {
        name: "HTML",
        icon: "icons/html.svg"
    },
    {
        name: "CSS",
        icon: "icons/css.svg"
    },
    {
        name: "JSON",
        icon: "icons/json.svg"
    },
    {
        name: "Java",
        icon: "icons/java.svg"
    },
];

export const getExtension = (language: string) => {
    switch (language) {
      case "JavaScript":
        return ".js";
      case "HTML":
        return ".html";
      case "CSS":
        return ".css";
      case "Python":
        return ".py";
      case "Java":
        return ".java";
      case "TypeScript":
        return ".ts";
      default:
        return ".js";
    }
  };
  
  export const themes = ["monokai", "twilight", "terminal", "chrome", "ambiance", "github"];
  
  export const backgrounds = [
    "linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%)",
    "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
    "linear-gradient(to right, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 100%)",
    "linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)",
    "linear-gradient(to right, rgb(238, 156, 167), rgb(255, 221, 225))",
    "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
    "linear-gradient(337deg,#654ea3,#da98b4)",
    "#000",
    "linear-gradient(115.7deg, rgb(3, 79, 135) 6.2%, rgb(0, 184, 214) 112.9%)",
    "linear-gradient(109.6deg, rgb(245, 239, 249) 30.1%, rgb(207, 211, 236) 100.2%)",
    "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
    "radial-gradient(circle at 50.4% 50.5%, rgb(251, 32, 86) 0%, rgb(135, 2, 35) 90%)",
  ];
  
  export const initialCode = `function guessMyNumber() {
    const userGuess = prompt("Guess a number between 1 and 10:");
    const secretNumber = Math.ceil(Math.random() * 10);
  
    if (parseInt(userGuess) === secretNumber) {
      return "Wow, you must be a psychic!";
    } else {
      return \`Nope, the number was \${secretNumber}. Better luck next time!\`;
    }
  }
  
  console.log(guessMyNumber());`;