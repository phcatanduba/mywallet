import axios from "axios";
import BasicDropzone from "../Components/BasicDropzone/BasicDropzone";
import Header from "../Components/Header/Header";
import { useState } from "react";
import './Home.css'

export default function Home() {
    const [buttonText, setButtonText] = useState("Enviar")
    const [isLoading, setIsLoading] = useState(false)
    let files = []
    const handleClick = () => {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append('xmls', file);
        });

        if (!isLoading) {
          const evtSource = new EventSource('http://localhost:8000/progress');
          evtSource.onmessage = function(event) {
            console.log(event.data)
            const result = event.data
            const number = parseFloat(result)
            const percentage = number.toFixed(2)
            setButtonText(Math.round(percentage) + "%")
          };

          axios.post('http://localhost:8000/xmls', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            console.log(response)
            const link = response.data
            console.log('Arquivo enviado com sucesso:', link);
            evtSource.close()
            setIsLoading(false)
            alert(link)
            setButtonText("Enviar")
          })
          .catch(error => {
            console.error('Erro ao enviar o arquivo:', error);
            evtSource.close()
            setIsLoading(false)
            setButtonText("Enviar")
          });
          setIsLoading(true)
        }
    };    

    return <div className="home">
                <Header />
                <BasicDropzone files={files} setButtonText={setButtonText} />
                <button onClick={handleClick} >{buttonText}</button>
            </div>;
}


