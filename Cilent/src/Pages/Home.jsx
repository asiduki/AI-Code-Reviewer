import React , {useEffect, useState} from 'react'
import axios from 'axios';

const Home = () => {
    const apicall = import.meta.env.VITE_API_URL;
    const [Text , setText] = useState("");
    const [Result , setResult] = useState('');
    const [Message , setMessage] = useState(" ");

    const handlechange = (e) =>{
        setText(e.target.value) ;
        setMessage(" ");
    }

    const ApiCall = async()=>{
            if(Text == " "){
                setMessage("Write Some Prompt");
            }
            else{
                try{
                    const response = await axios.post(`${apicall}/ai` , {
                        prompt:Text
                    }
                )
                setResult(response.data) 
                }
                catch(error){
                    setMessage("Please Try Again ")
                }
            }
        }
      

  return (
    <>
    <div>
        <button onClick={ApiCall}>Review</button>
        <textarea value={Text} onChange={handlechange} className='p-2 w-[50%]' placeholder='Write here'>
        </textarea>
    </div>
    <div>
        {Result}
    </div>
    </>
  )
}

export default Home
