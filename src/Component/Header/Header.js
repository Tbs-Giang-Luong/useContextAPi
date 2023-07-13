import { useContext } from "react";
import { Provider } from "../ContextAPi/ContextAPI";
import './Header.css'

function Header() {
  const { value } = useContext(Provider);
  let { isOpen, setIsOpen } = value;

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header" onClick={() => handleChange()}>
      {" "}
      This is Header

      <input type="checkbox"/>
    </div>
  );
}

export default Header;
