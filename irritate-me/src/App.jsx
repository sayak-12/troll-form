import "./App.css";
import MobileComponent from "./components/MobileComponent";
import NameComponent from "./components/NameComponent";
import PasswordComponent from "./components/PasswordComponent";

function App() {
  return (
    <>
      <h2>Fill up this form, xD</h2>
      <form action="">
        <div className="ins">Enter your name: </div>
        <NameComponent />
        <div className="ins">Enter Password: </div>
        <PasswordComponent/>
        <div className="ins">Enter Mobile Number: </div>
        <MobileComponent/>
        <button type="submit">Submit Data</button>
      </form>
    </>
  );
}

export default App;
