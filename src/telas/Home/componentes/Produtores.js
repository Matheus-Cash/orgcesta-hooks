import React, { useEffect }  from "react";
import { Text } from "react-native-web";
import { carregaProdutores } from "../../../servicos/carregaDados";

export default function produtores(){
    useEffect(() => {
    const retorno = carregaProdutores();
    console.log(retorno);    
    },[]);

    return <Text>Produtores</Text>
}
