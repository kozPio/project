import React, { useState, useRef, useEffect } from "react";


const users = [
  {name: 'Sarah', age: 20},
  {name: 'John', age: 20},
  {name: 'Wiliam', age: 30},
]

const UserSerch: React.FC = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser]= useState<{name: string, age: number} | undefined>();

  useEffect(() => {
    if(!inputRef.current){
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user)=> {
      return user.name === name;
    });

    setUser(foundUser);
  }

  return <div>
    <h3>User Search</h3>

    <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
    <button onClick={onClick}>Find</button>
    {user && <div><h3>{user.name}</h3> <h3>{user.age}</h3></div> }

  </div>
}


export default UserSerch;