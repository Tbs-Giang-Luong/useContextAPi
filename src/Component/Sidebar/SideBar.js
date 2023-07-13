import { useContext } from "react";
import { Provider } from "../ContextAPi/ContextAPI";

function SideBar() {
  const { value } = useContext(Provider);

  const { isOpen } = value;

  if (isOpen) {
    return <div> This is SideBar.</div>;
  } else {
    return null;
  }
}

export default SideBar;
