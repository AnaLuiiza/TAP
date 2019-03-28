class BancoDeDados {
    static getProdutos = async () => {
        const response = await fetch('http://localhost:9000/produtos');
        const produtos = await response.json();

        if (response.status !== 200) {
            throw new Error(produtos.message);
        }

        // Aqui nós podemos realizar conversões do modelo que vem bo back-end
        // para as necessidades do front-end. 
        // Nesse caso, o campo "preco" vem como string, então convertemos para float
        return produtos.map((p) => {
            return {...p, preco: parseFloat(p.preco)}
        });
    }
}

export default BancoDeDados;