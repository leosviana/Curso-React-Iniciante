function Titulo({amigo, cor}){ /* Recuperando o PROPs "nome" */
    let nome = "Leonardo Viana";
    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png";
    return (
        <div>
            <h1 style={{color: cor}}>Olá eu sou um título!</h1>   {/* Texto simples */}
            <p>Me chamo {nome}</p>           {/* Texto com interpolação de variável string */}
            <p>Meu amigo se chama {amigo ? amigo : "Beltrano"}</p>
            <p>Soma: 10 + 10 = {soma}</p>    {/* Texto com interpolação de variável numérica */}
            <img width={100} src={urlImg} /> {/* Imagem com interpolação de variável de imagem */}
        </div>
    )
}

export default Titulo