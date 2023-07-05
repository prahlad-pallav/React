import './Features.css'
import { useState } from 'react';

function Features() {

    const [Value, setValue] = useState(0);

    function increment(){
        setValue(Value + 1);
    }

    function decrement(){
        setValue(Value - 1);
    }

    function reset(){
        setValue(0);
    }

    return (
        <div className="design"> 
            <div>
                <div>Increment and Decrement</div>
            </div>
            <div className='inside-design'>
                <div>
                    <button className='dec' onClick={decrement}><i class="fa-solid fa-minus"></i></button>
                </div>
                <div className='number'>
                <div> {Value} </div>
                </div>
                <div>
                    <button className='inc' onClick={increment}><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div className='repeat'>
                    <div><i class="fa-solid fa-repeat" onClick={reset}></i></div>
                </div>
        </div>
    )
}

export default Features;