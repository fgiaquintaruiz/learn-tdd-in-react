import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {

    const [inputText, setInputText] = useState('')

    const handleTextChange = event => {
        setInputText(event.target.value)
    }

    const handleSend = () => {
        //Have to comment this line to get to the result on the Component test
        // expect(sendHandler).toHaveBeenCalledWith(...expected)
        //
        // Expected: "New message"
        //
        // Number of calls: 0

        //onSend(inputText)
        setInputText('')
    }

    return (
        <div>
            <input
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={handleTextChange}
            />
            <button
                data-testid="sendButton"
                onClick={handleSend}
                >
                Send
            </button>
        </div>
    )
}

export default NewMessageForm;
