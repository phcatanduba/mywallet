import axios from "axios";
import BasicDropzone from "../Components/BasicDropzone/BasicDropzone";
import Header from "../Components/Header/Header";
import { useState } from "react";
import DownloadButton from "../Components/DownloadButton/DownloadButton";
import './Home.css'

export default function Home() {
    const [buttonText, setButtonText] = useState("Enviar")
    const [isLoading, setIsLoading] = useState(false)
    const [url, setUrl] = useState("")
    let files = []

    const handleClick = () => {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append('xmls', file);
        });

        if (!isLoading) {
          const evtSource = new EventSource(process.env.REACT_APP_URL + '/progress');
          evtSource.onmessage = function(event) {
            console.log(event.data)
            const result = event.data
            const number = parseFloat(result)
            const percentage = number.toFixed(2)
            setButtonText(Math.round(percentage) + "%")
          };

          axios.post(process.env.REACT_APP_URL +'/xmls', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            console.log(response)
            const link = response.data
            console.log('Arquivo enviado com sucesso:', link);
            setUrl(link)
            evtSource.close()
            setIsLoading(false)
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
                <BasicDropzone files={files} />
                 {  url === "" ?
                 <button onClick={handleClick}>{buttonText}</button> : 
                 <DownloadButton url={url} filename="data.csv">Baixar Arquivo</DownloadButton> 
                 }
                <DownloadButton url={"https://auditpro-s3.s3.sa-east-1.amazonaws.com/macro+-+v.3.xlsm"} filename="macro.xlsm">Baixar macro</DownloadButton>
            </div>;
}


