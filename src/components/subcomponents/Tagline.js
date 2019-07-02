import React, {useState} from 'react'

const Message = () => {
    const [message, setMessage] = useState("")
    return(
        <div>
            
            <input
                type="text"
                value={message}
                placeholder="Enter a Message"
                onChange={e => setMessage(e.target.value)}
            />
            <p>
                <strong>{message}</strong>
            </p>
        </div>
    )
}

export default Message;