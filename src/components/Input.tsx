import React, { useState } from "react";
import axios from "axios";

function Input(){

    const [input, setInput] = useState<any>(null);
    const [output, setOutput] = useState('');
    const [isloading, setIsLoading] = useState(false);

    const post_get_summary = async () => {
        setIsLoading(true);
        const response = await axios.post('http://localhost:5000/summarize',{'text' : input})
        console.log(response);
        setOutput(response.data.summary)
        setIsLoading(false)

    }        
    
    return(
            <div className="input-box">
            <div className="left" >
                <textarea onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)} name="rawtext" className="my-text-area"></textarea>
            </div>
            <button onClick={post_get_summary} disabled={isloading || !input} className="button2">Submit</button>
            <div className="right">
                <textarea value={output} className="my-text-area" ></textarea>
            </div>
        </div>
    );

  
}

export default Input;
