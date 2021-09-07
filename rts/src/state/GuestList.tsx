import { useState } from "react";

const GuestList: React.FC = () => {

  const [name, setName] = useState('');
  const [guests, setGuests] =useState<string[]>([]);


  const onClick =() => {
    setName('');
    setGuests([...guests, name])
  }

  return <div><h3>Guest List</h3>
  <ul>
    {guests.length >=1 && guests.map((guest, index) => (
       <li key={index}>{guest}</li>
    ))}
  </ul>
  
  <input value={name} onChange={(e)=>setName(e.target.value)} type="text" /> 
  <button onClick={onClick}>Add Guest</button>
  </div>
};

export default GuestList;


//check how does onchange work under the hood