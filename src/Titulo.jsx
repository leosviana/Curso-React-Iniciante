import {useState} from "react";

function Titulo({amigo, cor}){ /* Recuperando o PROPs "nome" */
    const [texto, setTexto] = useState("Um título do estado inicial");
    const [inputText, setInputText] =  useState("");

    let nome = "Leonardo Viana";
    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png";

    function clicou(){
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>   {/* Texto simples */}
            <p>Me chamo {nome}</p>           {/* Texto com interpolação de variável string */}
            <p>Meu amigo se chama {amigo ? amigo : "Beltrano"}</p>
            <p>Soma: 10 + 10 = {soma}</p>    {/* Texto com interpolação de variável numérica */}
            <img width={100} src={urlImg} /> {/* Imagem com interpolação de variável de imagem */}
            <br />
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
            <br />
            <button onClick={()=>{setTexto("Mudei título via botão")}}>Mudar título simples</button>
            <button onClick={clicou}>Mudar título caixa de texto</button>
        </div>
    )
}

export default Titulo