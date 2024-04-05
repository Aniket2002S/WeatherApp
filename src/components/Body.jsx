import React, { useState , useEffect } from 'react';

const Body = () => {
    const [city, setCity] = useState('');
    const [Search, setSearch] = useState('')
    
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=f5914470111892211d7288538182fb75`;

            const response = await fetch(url);
            console.log(response)
            const resJson = await response.json();
            setCity(resJson);
        }
        fetchApi();
      
    }, [Search])
    

    return (
        <div className="container">
            <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: "url('https://img.freepik.com/free-vector/cloud-background-pastel-paper-cut-design-vector_53876-135919.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712102400&semt=ais')"}}>
                <div className="absolute top-5 left-0 right-0 flex justify-center">
                    <div className="relative">
                        <input 
                            className='pl-4 pr-12 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500' 
                            type="text" 
                            placeholder='Enter City Name' 
                            onChange={(e)=>setSearch(e.target.value)}
                            
                        />
                        <div className="align-middle text-center">
                            <br />
                            <h2 className=" font-sans font-bold text-gray-700 bold text-5xl p-5">
                                {city.name}
                            </h2>
                            <br />
                           
                                <div>
                                    <h1 className="text-gray-700 text-xl">
                                        {city.main.temp}
                                    </h1>
                                    <h3 className='tempMax'>min: {city.main.temp_min} | max: {city.main.temp_max}</h3>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
