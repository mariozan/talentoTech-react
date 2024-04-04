import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { useGetMessagesQuery } from '../../features/api/apiMessageSlice'
import { useSelector } from "react-redux";

export default  function Chat(){

    const {data, isLoading, isError, error } = useGetMessagesQuery()
    const user = useSelector((state) => state.auth.user);
    const [messages, setMessage] = useState([])
    const endReference = useRef(null)

    const scrollToBottom = () => {
        console.log(endReference.current)
        endReference.current?.scrollIntoView({ behavior: 'smooth'})            
    }

    const socket = io('http://localhost:3000', {
        transports: ['websocket']
    })

    socket.on('connect', function(){
        console.log("connected")
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            "body": e.target.message.value,
            "from": user._id,
            "to": user._id // !NOTE: Id del destinatario, se deberia obtener previamente, para el ejemplo dejamos el mismo del FROM
        }
        const data = JSON.stringify(payload)
        socket.emit("message", data)
        e.target.message.value = ""
    }

    socket.on("message-receipt", function(data){
        const newMessage = {
            "_id": data._id,
            "body": data.body,
            "from": {_id: data.from},
            "to": {_id: data.to},
            "createdAt": data.createdAt
        }
        setMessage([...messages, newMessage])
    })

    useEffect(() => {       
        if(data){
            setMessage(data)
        }
        scrollToBottom()
    }, [data])

    if (isLoading) return <div role="status" className='flex justify-center'>
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>;
    else if(isError) return (<div>Error: {error.message} </div>)    

    return (
        <div className="max-w-4xl w-full mx-auto px-5 py-5">
            <div className="bg-green-300 text-gray-800 p-4">
                <h1 className="text-lg font-semibold">Chat</h1>                
            </div>
            {/* Seccion de Mensajes */}
            <div className="flex flex-col space-y-2 bg-slate-50">
                {messages.map(message => (
                    <div key={message._id} 
                        className={
                            `${(message.from && user._id == message.from._id) ? 
                                'bg-pink-300 self-end' : 
                                'bg-blue-300 self-start'} 
                                 text-gray-700 py-2 px-4 rounded-lg max-w-xs`}>
                        <p>{message.body}</p>
                        <span className="text-xs text-gray-100 self-end">{message.createdAt}</span>
                    </div>
                ))}            
            </div>
            <div ref={endReference}/>
            <hr />
            <form onSubmit={handleSubmit} className="flex bg-gray-300 text-blue-400 p-4">
                <input type="text" 
                    name="message"
                    className="w-full bg-gray-100 rounded-lg py-2 px-4" 
                    placeholder="Escribir mensaje... " />
                <button className='bg-red-800 mx-2 rounded-lg p-2 text-yellow-400'>Send</button>
            </form>
        </div>
    )
}