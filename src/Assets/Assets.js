import { mockAssets } from "./mockAssets";
import styled from "styled-components";
import PieChart from "./PieChart";


export default function Assets() {
    const assets = mockAssets
    let patrimony = 0
    assets.forEach((asset) => {
        patrimony += (asset.quantity * asset.price)
    })

    return (
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