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
    <div className='w-full py-4 px-2 flex '>
       <div className='w-[50%] h-[600px]'>
        <textarea name="" id="" className='resize-none w-[95%] h-[99%] border rounded-lg py-2 px-1 outline-none' placeholder='Paste Your test here.....'></textarea>
       </div>
       <div className='w-[50%]'>
        {/* output box */}
        <div>
            
        </div>
       </div>
    </div>
    </>
  )
}

export default Home
