import "./App.css";
import Content from "./Component/Content/Content";
import AppProvider from "./Component/ContextAPi/ContextAPI";
import Header from "./Component/Header/Header";
import SideBar from "./Component/Sidebar/SideBar";
import Video from "./Component/Video/Video";

function App() {
  return (
    // <AppProvider>
    //   <div className="main-app">
    //     <header className="header">
    //       <Header />
    //     </header>

    //     <div className="container">
    //       <div className="sidebar">
    //         <SideBar />
    //       </div>

    //       <div className="content">
    //         <Content />
    //       </div>
    //     </div>
    //   </div>
    // </AppProvider>

    <>
      <Video/>
    </>
  );
}

export default App;
