import React, {useState} from 'react'

function Headcounter2(){
const [name, setName] = useState({firstName:'', lastname:''})
  return (
    <form>
        <input type='text' value={name.firstName}
        onChange={e => setName({...name, firstName:e.target.value})} />

        <input type='text' value={name.lastname}
        onChange={e => setName({...name, lastname:e.target.value})} />

        <h2>Your first name is {name.firstName}</h2>
        <h2>Your last name is {name.lastname}</h2>
        <h2>{JSON.stringify(name)}</h2>

    </form>
  )
}

export default Headcounter2
