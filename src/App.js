import "./styles.css";
import moment from "moment";

export default function App() {
  return (
    <div className="App">
      Today Date:- {moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
