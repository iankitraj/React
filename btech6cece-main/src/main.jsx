import { createRoot } from "react-dom/client";
import TableDisp from "./lec0601/exercise1";
import EmailValidator from "./lec0601/email";
import TextVisibilityToggler from "./lec0601/toggel";
import CharacterCounter from "./lec0601/character";

createRoot(document.getElementById("root")).render(
  <div>
    <TableDisp />
    <EmailValidator />
    <TextVisibilityToggler />
    <CharacterCounter />
  </div>
);
