import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from ".";


const RepositoriesList: React.FC = () => {

  const [term, setTerm]= useState('');
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };

  return (
  <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} type="text" />
      <button>Search</button>
    </form>
  </div>
  );
}

export default RepositoriesList;