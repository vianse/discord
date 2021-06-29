import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-row justify-center">
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
                                        <Typed strings={['THANK YOU']} typeSpeed={90} className="text-center text-4xl font-bold text-gray-100 mt-10 mb-10"></Typed>
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