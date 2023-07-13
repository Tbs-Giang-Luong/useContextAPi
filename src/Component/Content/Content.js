import { useContext } from "react";
import { Provider } from "../ContextAPi/ContextAPI";
import "./Content.css";
function Content() {
  const { value } = useContext(Provider);
  const{ user} = value;
  return (
    <div className="main-content">
      {user &&
        user.length > 0 &&
        user.map((item, index) => {
          const todo = item.title;
          return (
            <li key={index} className="user">
              {item.id} -{todo.toUpperCase()}
            </li>
          );
        })}
    </div>
  );
}

export default Content;
