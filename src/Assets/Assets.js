import { mockAssets } from "./mockAssets";
import styled from "styled-components";
import PieChart from "./PieChart";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";


export default function Assets() {
    const assets = mockAssets
    let patrimony = 0
    assets.forEach((asset) => {
        patrimony += (asset.quantity * asset.price)
    })

    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file.type === "application/pdf") {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          const arrayBuffer = fileReader.result;
          pdfjsLib.getDocument(arrayBuffer).promise.then((pdf) => {
            const pdfPromise = pdf.getPage(1);
            pdfPromise.then((data) => {
              const textPromise = data.getTextContent()
              textPromise.then(pdfText => {
                console.log(pdfText)
              })
            })
            //console.log("PDF carregado:", pdf);
          });
        };
        fileReader.readAsArrayBuffer(file);
      } else {
        alert("Por favor, selecione um arquivo PDF.");
      }
    }

    return (
      <>
       <Container>
        <AssetsList>
          <DescriptionAssets>
            <span>Nome</span>
            <span>Ticker</span>
            <span>Preço</span>
            <span>Qtd</span>
            <span>Valor</span>
            <span>Porcentagem</span>
          </DescriptionAssets>
          <ul>
            {assets.map((asset) => {
              return (
                <LiAsset sell={asset.sell} key={asset.ticker}>
                  <span>{asset.name}</span>
                  <span>{asset.ticker}</span>
                  <span>R$ {asset.price}</span>
                  <span>{asset.quantity}</span>
                  <span>R$ {(asset.quantity * asset.price).toFixed(2)}</span>
                  <span>{(((asset.quantity * asset.price) / patrimony) * 100).toFixed(2)}%</span>
                </LiAsset>
              );
            })}
          </ul>
          <Patrimony>
            Patrimônio Total: R${" "}
            {patrimony.toFixed(2)}
          </Patrimony>
        </AssetsList>
        <PieChart />
        </Container>
        <input type="file" accept=".pdf" onChange={handleFileUpload} />
      </>
       
    );
}

const Container = styled.div`
    display: flex;
`;

const LiAsset = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.sell ? "red" : "green"};

    span {
        width: 15%;
        margin: 5px 0px;
        font-size: 16px;
    }
`;

const DescriptionAssets = styled.p`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    span {
        width: 15%;
        font-weight: bold;
        font-size: 18px;
    }
`;

const Patrimony = styled.p`
    margin-top: 15px;
`;

const AssetsList = styled.div`
    width: 38%;
    margin: 10px;
`;