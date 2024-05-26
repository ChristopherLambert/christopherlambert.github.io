// Substitua 'SUA_CHAVE_API' pela sua chave de API do Infura
const infuraKey = '2ce64e18898e437b90f1e16843638e07';

// URL do nó Ethereum remoto do Infura (usando a testnet Ropsten como exemplo)
// const infuraURL = 'https://ropsten.infura.io/v3/' + infuraKey;
// const infuraURL = 'https://goerli.infura.io/v3/' + infuraKey;
// const infuraURL = 'https://sepolia.infura.io/v3/' + infuraKey;
const infuraURL = 'https://mainnet.infura.io/v3/' + infuraKey;

// Configurando o provedor Web3 para conectar ao nó Ethereum remoto do Infura
const web3 = new Web3(new Web3.providers.HttpProvider(infuraURL));

// CHAINLINK
// Endereço do contrato do Chainlink Oracle para ETH/USD na testnet Ropsten
// const contractAddress = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';

const contractAddressETHUSD = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
const contractAddressBTCUSD = '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c';
const contractAddressLINKUSD = '0x396c5E36DD0a0F5a5D33dae44368D4193f69a1F0';

// Definindo a ABI do contrato
const contractABI = [
    {"inputs":[{"internalType":"address","name":"_aggregator","type":"address"},{"internalType":"address","name":"_accessController","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"int256","name":"current","type":"int256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"AnswerUpdated","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"startedBy","type":"address"},{"indexed":false,"internalType":"uint256","name":"startedAt","type":"uint256"}],"name":"NewRound","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},
    {"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"accessController","outputs":[{"internalType":"contract AccessControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"aggregator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"confirmAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"latestRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"latestTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"phaseAggregators","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"phaseId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"proposeAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"proposedAggregator","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"proposedGetRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"proposedLatestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"address","name":"_accessController","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
];

// Criando a instância do contrato Chainlink Oracle
const contractETH = new web3.eth.Contract(contractABI, contractAddressETHUSD);
const contractBTC = new web3.eth.Contract(contractABI, contractAddressBTCUSD);
const contractLINK = new web3.eth.Contract(contractABI, contractAddressLINKUSD);

// Função para obter o preço atual do ETH/USD
async function getPriceETH() {
    try {
        const price = await contractETH.methods.latestAnswer().call();
        console.log('Preço atual do ETH/USD:', web3.utils.fromWei(price, 'ether'));
        return price;
    } catch (error) {
        console.error('Erro ao obter o preço do ETH/USD:', error);
        return 0;
    }
}
async function getPriceBTC() {
    try {
        const price = await contractBTC.methods.latestAnswer().call();
        console.log('Preço atual do BTC/USD:', web3.utils.fromWei(price, 'ether'));
        return price;
    } catch (error) {
        console.error('Erro ao obter o preço do BTC/USD:', error);
        return 0;
    }
}
async function getPriceLINK() {
    try {
        const price = await contractLINK.methods.latestAnswer().call();
        console.log('Preço atual do LINK/USD:', web3.utils.fromWei(price, 'ether'));
        return price;
    } catch (error) {
        console.error('Erro ao obter o preço do LINK/USD:', error);
        return 0;
    }
}

async function updatePrice() {
    try {
        const priceETH = Math.trunc((await getPriceETH() / 1e8) * 100) / 100
        $('#priceETHUSD').text("ETH/USD = " + priceETH + "$ ");

        const priceBTC = Math.trunc((await getPriceBTC() / 1e8) * 100) / 100
        $('#priceBTCUSD').text("BTC/USD = " + priceBTC + "$ ");

        // const priceLINK = Math.trunc((await getPriceLINK() / 1e8) * 100) / 100
        // $('#priceLINKUSD').text("LINK/USD = " + priceLINK + "$ ");
    } catch (error) {
        console.error('Erro ao atualizar o preço:', error);
        // $('#priceETH').text('Erro ao atualizar o preço');
    }
}

updatePrice()
    .catch(error => console.error('Erro ao atualizar o preço:', error))

// setInterval(
//     // Chamando a função para atualizar o preço
//     updatePrice()
//         .catch(error => console.error('Erro ao atualizar o preço:', error))
// , 10000); // 10 segundos


