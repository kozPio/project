import ReactDOM  from "react-dom";
import GuestList from "./state/GuestList";
import UserSerch from "./refs/UserSerch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return <div>
    <EventComponent />
    <GuestList />
    <UserSerch />
  </div>
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);