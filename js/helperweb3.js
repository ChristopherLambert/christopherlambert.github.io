// Importando a biblioteca Web3.js
<script src="https://cdn.jsdelivr.net/npm/web3@1.3.5/dist/web3.min.js"></script>

// Substitua 'SUA_CHAVE_API' pela sua chave de API do Infura
const infuraKey = '2ce64e18898e437b90f1e16843638e07';

// URL do nó Ethereum remoto do Infura (usando a testnet Ropsten como exemplo)
const infuraURL = 'https://ropsten.infura.io/v3/' + infuraKey;

// Configurando o provedor Web3 para conectar ao nó Ethereum remoto do Infura
const web3 = new Web3(new Web3.providers.HttpProvider(infuraURL));

// CHAINLINK
// Endereço do contrato do Chainlink Oracle para ETH/USD na testnet Ropsten
const contractAddress = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Função para obter o preço atual do ETH/USD
async function getPrice() {
    try {
        const price = await contract.methods.latestAnswer().call();
        console.log('Preço atual do ETH/USD:', web3.utils.fromWei(price, 'ether'));
        return price;
    } catch (error) {
        console.error('Erro ao obter o preço do ETH/USD:', error);
        return 0;
    }
}

// Chamando a função para obter o preço atual
getPrice();