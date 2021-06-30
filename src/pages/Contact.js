import React, {useState} from 'react';
import styled from 'styled-components'
const Contact = () => {
    const [description, setDescription] = useState()
    const [phone, setPhone] = useState()
    const [name, setName] = useState()
    const [color, setColor] = useState("bg-yellow-400 items-center hover:bg-yellow-400  text-center flex justify-center font-bold")
    const [formulario, setFormulario] = useState("grid grid-flow-col grid-cols-1 grid-rows-1 gap-4")
    const [thanks, setThanks] = useState("hidden")
    const [boton, setBoton] = useState("flex w-full justify-center  mt-10")
    const [label, setLabel] = useState("SEND")

    const send = () =>{
        if (description && phone && name) {
            const contenido = {
                "content": "Hola, me interesa realizar un proyecto con ustedes!",
                "embeds": [{
                    "title": phone,
                    "description": description,
                    "footer": {
                        "text": "Gracias, atte:" + " " + name
                    }
                }
                ]
            }

            fetch('https://discordapp.com/api/webhooks/859145497657475082/isvUHnFPxe0-_I1sArQyn3MmB0s2wLQ_TxYM4Li_w0ZAbSubQlOgD3xsr2ok6s6nF2R1', {
                method: 'POST',
                body: JSON.stringify(contenido),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    setDescription("")
                    setName("")
                    setPhone("")
                    setFormulario("hidden grid grid-flow-col grid-cols-3 grid-rows-1 gap-4")
                    setThanks("grid grid-flow-col grid-cols-3 grid-rows-1 gap-4")
                    setBoton("hidden")
                })

        }
        else {
            setColor("text-white items-center bg-red-500 text-center flex justify-center font-bold hover:bg-red-400")
            setLabel("Error try again")
        }

    }
    return (
        <div className="h-screen bg-black flex flex-col justify-center p-60">
                                <div className="text-center h-auto">
                                    <div className="mb-5 text-yellow-400 text-xl font-semibold ">TELL US ABOUT YOUR IDEAS</div>
                                    <div className={formulario}>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col">
                                                <label className="text-white text-base font-normal p-1">Describe your idea.</label>
                                                <textarea value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Describe your idea." className="p-4 rounded" rows="3"/>
                                                <label className="text-white text-base font-normal p-1">Contact phone.</label>
                                                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="55-XX-XX-XX-XX" className="p-4 rounded" rows="3"/>
                                                <label className="text-white text-base font-normal p-1">Contact name.</label>
                                                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Exa. Yan Santiago" className="p-4 rounded" rows="3"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={thanks}>
                                        <div></div>
                                        <div className="text-center text-4xl font-bold text-gray-100 mt-10 mb-10">THANK YOU</div>
                                        <div></div>
                                    </div>
                </div>
                <div className={boton}>
                    <Boton onClick={send} className={color}>{label}</Boton>
                </div>       
        </div>
    );
};

export default Contact;


const Boton = styled.button`
    padding:5px;
    height:60px;
    width: 150px;
    border-radius: 50px;
`