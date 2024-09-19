import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
  });

  useEffect(()=>{
    console.log(input);
  },[])

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  }

  return (
    <>
      <form className='w-5/6 max-w-md mx-auto'>
        <fieldset className='flex flex-col border p-5'>
         
          <input
            className='border rounded text-lg leading-tight py-2 px-2 mt-2 focus:outline-indigo-200'
            type="text"
            name="firstname"
            placeholder="Your first name"
            onChange={handleInput}
          />

          <input
            className='border rounded text-lg leading-tight py-2 px-2 mt-2 focus:outline-indigo-200'
            type="text"
            name="lastname"
            placeholder="Your last name"
            onChange={handleInput}
          />

        </fieldset>
      </form>
    </>
  );
}

export default App;
