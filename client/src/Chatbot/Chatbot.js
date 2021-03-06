import React from 'react';

function Chatbot() {


    const keyPressHandler = (e) => {
        if(e.key === "Enter") {

            if(!e.target.value) {
                return alert('you need to type something first')
            }

            //입력한 값을 text Query route에 request로 보냄
            //textQuery(e.target.value)

            e.target.value = "";

        }
    }

    return (
        <div style={{
            height: 700, width: 700,
            border: '3px solid black', borderRadius: '7px'
        }}>
            <div style={{ height: 644, width: '100%', overflow: 'auto'}}>

            </div>


            
            <input 
                style={{
                    margin: 0, width: '100%', height: 50,
                    borderRadius: '4px', padding: '5px', fontSize: '1rem'
                }}
                placeholder="Send a messages..."
                onKeyPress={keyPressHandler} //우리가 뭔가 input에 입력을 할 때 발생하는 이벤트
                type="text"
            />
            
        </div>
    )
}


export default Chatbot