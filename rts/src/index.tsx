import ReactDOM  from "react-dom";
import GuestList from "./state/GuestList";
import UserSerch from "./refs/UserSerch";
import EventComponent from "./events/EventComponent";
import { Provider } from "react-redux";
import  {store} from './state';
import RepositoriesList from './state/RepositoriesList';

const App = () => {
  return <div>
    <EventComponent />
    <GuestList />
    <UserSerch />
    <div>
      <h1> Search for a Package</h1>
      <RepositoriesList />
    </div>
  </div>
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.querySelector('#root')
);