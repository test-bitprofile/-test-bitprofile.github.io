"use strict";


// const firebaseConfig = {

// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

 // Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// let contract_address = ""
// let contract_address = "0xf8F6CDC811E0C32eFd43C9E9c61f7901EA67c124" // rinkeby
let contract_address = "0xD3e59F7235dDfCb020dc67fD8562a7F7611BBFC2" // polygon
let contract_abi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "NFTNetworkAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_link", "type": "string" }, { "internalType": "string", "name": "_linkName", "type": "string" } ], "name": "addContentLink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string[]", "name": "_links", "type": "string[]" }, { "internalType": "string[]", "name": "_linkNames", "type": "string[]" } ], "name": "addContentLinks", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "avatarNFTAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "avatarNFTId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "name": "avatarNFTOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "bio", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_externalNftContractAddress", "type": "address" }, { "internalType": "uint256", "name": "_externalTokenId", "type": "uint256" } ], "name": "connectAvatarNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addressToFollow", "type": "address" } ], "name": "follow", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "followTimestamp", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "followers", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "followersCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "followersMappingIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "following", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "followingCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "followingMappingIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "getContentLinks", "outputs": [ { "internalType": "string[]", "name": "", "type": "string[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "getFollowers", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "getFollowing", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addressToFollow", "type": "address" } ], "name": "getNFTFromAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" } ], "name": "linkNames", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" } ], "name": "linkTimestamp", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "links", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "linksCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" } ], "name": "linksMappingIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addressToFollow", "type": "address" } ], "name": "mintAndFollow", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "mintNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_externalNftContractAddress", "type": "address" }, { "internalType": "uint256", "name": "_externalTokenId", "type": "uint256" } ], "name": "removeConnectedAvatarNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_link", "type": "string" } ], "name": "removeContentLink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string[]", "name": "_links", "type": "string[]" } ], "name": "removeContentLinks", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_bio", "type": "string" } ], "name": "setBio", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "new_message", "type": "string" } ], "name": "setNFTMessage", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addressToTip", "type": "address" } ], "name": "tip", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "x", "type": "address" } ], "name": "toAsciiString", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "tokenExists", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addressToUnFollow", "type": "address" } ], "name": "unfollow", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]

let avatar_contract_address = "0xf1616d1AbeACEA2b330Fbfa4C91C1cC1dd316f25" // mainnet
let avatar_contract_abi = [ { "inputs": [ { "internalType": "address", "name": "_externalNftContractAddress", "type": "address" }, { "internalType": "uint256", "name": "_externalTokenId", "type": "uint256" } ], "name": "connectAvatarNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_externalNftContractAddress", "type": "address" }, { "internalType": "uint256", "name": "_externalTokenId", "type": "uint256" } ], "name": "removeConnectedAvatarNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "avatarNFTAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "avatarNFTId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "name": "avatarNFTOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ];

let web3Modal; // Web3modal instance
let provider; // Chosen wallet provider given by the dialog window
var ethaddress = ""; // Address of the selected account
var page_address = "";
var web3_user;
var chainId = 4; // Chain ID of Rinkeby Test Net is 4, replace it to 1 for Main Net

async function init() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "a1d2d05b386a403296580b00c8032130",
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // key: "pk_test_C99A517CE7B79A76"
        key: "pk_live_A4C2D41D64B917E8"
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    // theme: "dark"
  });

  // if (web3Modal.cachedProvider) {
  //   onConnect();
  // }
  // if (localStorage.getItem("walletProvider") !== null) {
  //   provider = JSON.parse(localStorage.getItem("walletProvider"));
  // }

  // document.getElementById("connect").style.display = "inline";
  console.log("Web3Modal instance is", web3Modal);
}

var DispatchGroup = (function() {
    var nextId = 0

    function DispatchGroup() {
        var id = ++nextId
        var tokens = new Set()
        var onCompleted = null

        function checkCompleted() {
            if(!tokens.size) {
                if(onCompleted) {
                    onCompleted()
                }
            }
        }

        // the only requirement for this is that it's unique during the group's cycle
        function nextToken() {
            return Date.now() + Math.random()
        }

        this.enter = function () {
            let token = nextToken()
            tokens.add(token)
            return token
        }

        this.leave = function (token) {
            if(!token) throw new Error("'token' must be the value earlier returned by '.enter()'")
            tokens.delete(token)
            checkCompleted()
        }

        this.notify = function (whenCompleted) {
            if(!whenCompleted) throw new Error("'whenCompleted' must be defined")
            onCompleted = whenCompleted
            checkCompleted()
        }
    }

    return DispatchGroup;
})()

function processERC721Transactions(transactionsJSON) {
  transactionsJSON.result.forEach((transaction) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);

    const contractAddress = transaction.contractAddress;
    const tokenID = transaction.tokenID;
    const hash = transaction.hash;
    const timeStamp = transaction.timeStamp;
    const tokenName = transaction.tokenName;
    const from = transaction.from;
    const to = transaction.to;

    const timeAgo = currentTimestamp - timeStamp;

    if (from == "0x0000000000000000000000000000000000000000") {
      console.log(to + " minted a " + tokenName + " NFT " + timeAgo + " seconds ago: ")
    }

    // get eth transaction to get value
    // https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x516e1f9fa606759a0f726aa7253232ad38587b268a1a5ff86fb4a6186a27b87c&apikey=YourApiKeyToken
  });
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function getFromCache(key) {
  var object = JSON.parse(localStorage.getItem(key));
  return object.value;
}

function cache(key, value) {
  var timestamp = Math.floor(Date.now() / 1000);
  var object = {value: value, timestamp: timestamp}
  localStorage.setItem(key, JSON.stringify(object));
}

function shouldUseCache(key, days) {
  var object = JSON.parse(localStorage.getItem(key));
  if (object == null || object == undefined) {
    return false
  }
  var timestamp = object.timestamp;
  var now = Math.floor(Date.now() / 1000);
  return (now - timestamp) < 60 * 60 * 24 * days;
}

async function isContractMainnet(address) {
  var cache_name = "isContractMainnet" + address
  if (shouldUseCache(cache_name, 1000)) {
    return getFromCache(cache_name)
  }
  else {
    var web3_infura_mainnet = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
    const byteCode = await web3_infura_mainnet.eth.getCode(address)
    cache(cache_name, byteCode != "0x")
    return byteCode != "0x"
  }
}

async function getReverseENS(address) {
  var cache_name = "getReverseENS" + address
  if (shouldUseCache(cache_name, 5)) {
    return getFromCache(cache_name)
  }
  else {
    var web3_infura_mainnet = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
    const ensContractAddress = "0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C"
    var contract = new web3_infura_mainnet.eth.Contract([{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"getNames","outputs":[{"internalType":"string[]","name":"r","type":"string[]"}],"stateMutability":"view","type":"function"}],
      ensContractAddress)
    var result = await contract.methods.getNames([address]).call()
    cache(cache_name, result[0])
    return result[0];
  } 
}

async function getENSOwner(ens_name) {
  // var cache_name = "getENSOwner" + ens_name
  // if (shouldUseCache(cache_name, 5)) {
  //   return getFromCache(cache_name)
  // }
  // else {
  //   var web3_infura_mainnet = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
  //   web3_infura_mainnet.eth.ens.getOwner(ens_name).then(function (retrieved_address) {
  //     var address = retrieved_address.toLowerCase();
  //     cache(cache_name, address)
  //     return address;
  //   })
  // } 
  console.log("get ens owner")
  var web3_infura_mainnet = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
  web3_infura_mainnet.eth.ens.getOwner(ens_name).then(function (retrieved_address) {
    console.log(retrieved_address)
    var address = retrieved_address.toLowerCase();
    // cache(cache_name, address)
    return address;
  })
}

var suggested_friends = new Set()
var suggested_from_interacation = {}
var load_recs_sync = new DispatchGroup();
load_recs_sync.notify(function() {
  addRecommendedFollowers()
})
async function processTransacationsEtherscan(transactionsJSON, web3) {
  var token_0 = load_recs_sync.enter();
  transactionsJSON.result.forEach((transaction) => {
    const hash = transaction.hash;
    const timeStamp = transaction.timeStamp;
    const from = transaction.from;
    const to = transaction.to;
    
    var token1 = load_recs_sync.enter()
    if (web3.utils.isAddress(to)) {
      isContractMainnet(to).then((is_contract) => {
        // console.log(is_contract)
        if ((!is_contract) && to.toLowerCase() !== ethaddress.toLowerCase()) {
          getReverseENS(to).then((ens_name) => {
            if (ens_name == null || ens_name == undefined || ens_name == "") {
              suggested_friends.add(to.toLowerCase())
              suggested_from_interacation[to.toLowerCase()] = hash;
            }
            else if (ens_name.length > 0) {
              suggested_friends.add(ens_name)
              suggested_from_interacation[ens_name] = hash;
            }
            load_recs_sync.leave(token1);
          })
        }
        else {
          load_recs_sync.leave(token1);
        }
      })
    }
    else {
      load_recs_sync.leave(token1);
    }

    var token2 = load_recs_sync.enter()
    if (web3.utils.isAddress(from)) {
      isContractMainnet(from).then((is_contract) => {
        // console.log(is_contract)
        if ((!is_contract) && from.toLowerCase() !== ethaddress.toLowerCase()) {
          getReverseENS(from).then((ens_name) => {
            if (ens_name == null || ens_name == undefined || ens_name == "") {
              suggested_friends.add(from.toLowerCase())
              suggested_from_interacation[from.toLowerCase()] = hash;
            }
            else {
              suggested_friends.add(ens_name)
              suggested_from_interacation[ens_name] = hash;
            }
            load_recs_sync.leave(token2)
          })
        }
        else {
          load_recs_sync.leave(token2)
        }
      })
    }
    else {
      load_recs_sync.leave(token2)
    }
  });
  load_recs_sync.leave(token_0);

  // add recommended followers
  // window.setTimeout(() => {
  //   addRecommendedFollowers()
  // }, 10000);
}

async function processTransacationsOpenSea(original_user_address, transactionsJSON, web3) {
  var token_0 = load_recs_sync.enter();
  // event_type: successful
  // seller: self
  // winner_account: buyer

  // event_type: successful
  // seller: seller
  // winner_account: self
  transactionsJSON.asset_events.forEach((transaction) => {
    var token = load_recs_sync.enter()
    if (transaction.event_type == "successful") {
      const seller_addr = transaction.seller.address;
      const buyer_addr = transaction.winner_account.address;
      const hash = transaction.transaction.transaction_hash;

      var add_addr = seller_addr
      if (seller_addr == original_user_address) {
        add_addr = buyer_addr;
      }

      isContractMainnet(add_addr).then((is_contract) => {
        // console.log(is_contract)
        if (!is_contract && add_addr != ethaddress) {
          getReverseENS(add_addr).then((ens_name) => {
            if (ens_name == null || ens_name == undefined || ens_name == "") {
              suggested_friends.add(add_addr.toLowerCase())
              suggested_from_interacation[add_addr.toLowerCase()] = hash;
            }
            else if (ens_name.length > 0) {
              suggested_friends.add(ens_name)
              suggested_from_interacation[ens_name] = hash;
            }
            load_recs_sync.leave(token);
          })
        }
        else {
          load_recs_sync.leave(token);
        }
      })  
    }
    else {
      load_recs_sync.leave(token);
    }
  })
  load_recs_sync.leave(token_0);
}

async function getOpenseaTransacations(address, web3) {
  const options = {method: 'GET', headers: {Accept: 'application/json'}};
  const url = 'https://api.opensea.io/api/v1/events?account_address=' + address + '&only_opensea=true&offset=0&limit=300'
  console.log(url)
  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      processTransacationsOpenSea(address, response, web3)
    })
    .catch(err => console.error(err));
}

async function getEtherscanTransacations(address, web3) {
  const url = "https://api.etherscan.io/api?module=account&action=txlist&address=" + address + "&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=M77ASJPUKRMDQ9Y9ZJ9QZM587IET3WAZPH"
  var xmlHttpUpdate = new XMLHttpRequest();
  xmlHttpUpdate.onreadystatechange = function() {
    if (xmlHttpUpdate.readyState == 4 && xmlHttpUpdate.status == 200){
      const json = JSON.parse(xmlHttpUpdate.responseText);
      processTransacationsEtherscan(json, web3)
    }
  }
  xmlHttpUpdate.open("GET", url, true);
  xmlHttpUpdate.send(null);
}

// no cache obviously
async function getNumFollowers(address) {
  var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
  var contract = new web3_rinkeby.eth.Contract(contract_abi, contract_address)
  var followersCount = await contract.methods.followersCount(page_address).call()
  return followersCount
}

// no cache obviously
async function getNumFollowing(address) {
  var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
  var contract = new web3_rinkeby.eth.Contract(contract_abi, contract_address)
  var followingCount = await contract.methods.followingCount(page_address).call()
  return followingCount
}

// this doesn't need cache cuz its only called when following someone
async function NFTForAddressExists(address) {
  var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
  var contract = new web3_rinkeby.eth.Contract(contract_abi, contract_address)
  var tokenID = await contract.methods.getNFTFromAddress(address).call()
  var tokenExists = await contract.methods.tokenExists(tokenID).call()
  return tokenExists
}

function addRecommendedFollowers() {
  var didSync = false
  var sync = new DispatchGroup();
  sync.notify(function() {
    if (didSync) {
      if (suggested_friends.size > 0) {
        document.getElementById("recommended-followers").style.display = "block";
      }
      else {
        console.log(suggested_friends)
      }
    }
  })
  var token_0 = sync.enter()
  

  suggested_friends.forEach((suggested_friend) => {
    var token = sync.enter()
    if (!(userFollowing.includes(suggested_friend))) { // only show people not following
      if (suggested_friend.includes(".eth")) {
        var web3_infura_mainnet = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
        web3_infura_mainnet.eth.ens.getOwner(suggested_friend).then(function (retrieved_address) {
          if (retrieved_address != null) {
            var address = retrieved_address.toLowerCase()
            // var div = '<div class="recommended-interaction"><div class="col-12"><a target="_blank" href="http://192.168.1.228:8080/test_profile/?address=' + suggested_friend + '"style="color: black;">' + suggested_friend + '</a></div><div class="col-12"><a class="rec-interaction-link" target="_blank" href="https://etherscan.io/tx/' + suggested_from_interacation[suggested_friend] + '">View</a><button class="rec-follow-button">Follow</button></div></div>'
            var div = '<div class="recommended-interaction row mx-auto mb-2" id="recommended_interaction_' + address + '"><a href="' + suggested_friend + '" class="followersModalAddress col-12 mx-auto my-auto text-center">' + suggested_friend + '</a><div class="mx-auto my-auto text-center"><button class="rec-interaction-link" style="float: right;" target="_blank" onclick="window.open(\'https://etherscan.io/tx/' + suggested_from_interacation[suggested_friend] + '\', \'_blank\')">Etherscan</button><button class="rec-follow-button" id="rec_follow_button_' + address + '" style="float: left">Follow</button></div></div>'
            document.getElementById("recommended-followers").innerHTML += div
            document.getElementById("rec_follow_button_" + address).setAttribute("onclick", 'followUnfollowRec("' + address + '",' + false + ')');
            sync.leave(token)
            didSync = true
          }
        })
      }
      else {
        // var div = '<div class="recommended-interaction"><div class="col-12"><a target="_blank" href="http://192.168.1.228:8080/test_profile/?address=' + suggested_friend + '"style="color: black;">' + getShortAddress(suggested_friend) + '</a></div><div class="col-12"><a class="rec-interaction-link" target="_blank" href="https://etherscan.io/tx/' + suggested_from_interacation[suggested_friend] + '">View Interaction</a><button class="rec-follow-button">Follow</button></div></div>'
        var div = '<div class="recommended-interaction row mx-auto mb-2" id="recommended_interaction_' + suggested_friend + '"><a href="' + suggested_friend + '" class="followersModalAddress col-12 mx-auto my-auto text-center">' + getShortAddress(suggested_friend) + '</a><div class="mx-auto my-auto text-center"><button class="rec-interaction-link" style="float: right;" target="_blank" onclick="window.open(\'https://etherscan.io/tx/' + suggested_from_interacation[suggested_friend] + '\', \'_blank\')">Etherscan</button><button class="rec-follow-button" id="rec_follow_button_' + suggested_friend + '" style="float: left">Follow</button></div></div>'
        document.getElementById("recommended-followers").innerHTML += div
        document.getElementById("rec_follow_button_" + suggested_friend).setAttribute("onclick", 'followUnfollowRec("' + suggested_friend + '",' + false + ')');
        sync.leave(token)
        didSync = true
      }
    }
    else {
      sync.leave(token)
    }
  })
  sync.leave(token_0);
}

var userFollowing = [] // the following of the user
var followers = []  // the followers of the page
var following = []  // the following of the page
var followersCount = 0 
var followingCount = 0
var userFollowingCount = 0
var isFollowing = false
async function loadFollowersAndFollowingRinkeby() {
  followers = []
  following = []
  isFollowing = false

  var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
  var contract = new web3_rinkeby.eth.Contract(contract_abi, contract_address)
  followers = await contract.methods.getFollowers(page_address).call()
  following = await contract.methods.getFollowing(page_address).call()
  followersCount = await contract.methods.followersCount(page_address).call()
  followingCount = await contract.methods.followingCount(page_address).call()
  userFollowing = await contract.methods.getFollowing(ethaddress).call()
  userFollowingCount = await contract.methods.followingCount(ethaddress).call()
  document.getElementById("following_num").innerHTML = followingCount;
  document.getElementById("followers_num").innerHTML = followersCount;

  followers = [...followers]
  for (var i=0; i< followersCount; i++) {
    followers[i] = followers[i].toLowerCase()
  }

  following = [...following]
  for (var i=0; i< followingCount; i++) {
    following[i] = following[i].toLowerCase()
  }

  userFollowing = [...userFollowing]
  for (var i=0; i < userFollowingCount; i++) {
    userFollowing[i] = userFollowing[i].toLowerCase()
  } 

  if (page_address != ethaddress) {
    document.getElementById("follow-button").style.display = "inline";

    if (userFollowing.includes(page_address)) {
      isFollowing = true
    }

    if (isFollowing) {
      document.getElementById("follow-button").innerHTML = "Unfollow"
    }
    else {
      document.getElementById("follow-button").innerHTML = "Follow"
    }
  }

  document.getElementById("follow_div").style.display = "block";
}

async function loadAvatarMainnet() {
    var web3_mainnet = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
    var contract = new web3_mainnet.eth.Contract(avatar_contract_abi, avatar_contract_address);
    var nft_contract_addr = await contract.methods.avatarNFTAddress(page_address).call()
    var nft_tokenid = await contract.methods.avatarNFTId(page_address).call()
    const options = {method: 'GET'};
    fetch('https://api.opensea.io/api/v1/asset/' + nft_contract_addr + '/' + nft_tokenid + '/', options)
      .then(response => response.json())
      .then(response => {
        var img_url = response.image_thumbnail_url
        document.getElementById("profile_nft").src = img_url
      })
      .catch(err => console.error(err));

    if (ethaddress != page_address) {
      document.getElementById('profile_nft').addEventListener('click', function (e) {
        var opensea_url = "https://opensea.io/assets/" + nft_contract_addr + "/" + nft_tokenid
        window.open(opensea_url, '_blank');
      });
    }
}

var content_links = [];
var link_names = {}
var link_delete_mode_on = false;
async function loadLinksRinkeby() {
  content_links = []
  link_names = {}
  link_delete_mode_on = false;

  var didSync = false

  var sync = new DispatchGroup();
  sync.notify(function() {
    if (didSync) {
      document.getElementById("link-holder").style.display = "block";
    }
  })
  var token_0 = sync.enter()
  didSync = true

  document.getElementById("link-holder").innerHTML = ""
  var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
  var contract = new web3_rinkeby.eth.Contract(contract_abi, contract_address)
  content_links = await contract.methods.getContentLinks(page_address).call()
  var num_content_links = await contract.methods.linksCount(page_address).call()

  if (page_address == ethaddress) {
    var html = '<button id="add_new_link"><div class="row mx-auto mb-0 mt-0"><div class="link_controls text-center col-12 my-auto mx-auto">Add Link</div></div></button>'
    document.getElementById("link-holder").innerHTML += html;

    if (num_content_links > 0) {
      var html = '<button id="edit_link_button"><div class="row mx-auto mb-0 mt-0"><div class="link_controls text-center col-12 my-auto mx-auto" id="edit_link_button_text">Edit</div></div></button>'
      document.getElementById("link-holder").innerHTML += html;
    }
  }

  // add all the content links
  for (var i=0; i<num_content_links; i++) {
    var token = sync.enter()

    var name = await contract.methods.linkNames(page_address, content_links[i]).call();
    link_names[content_links[i]] = name;
    var html = '<a style="color: black;" target="_blank" href="' + content_links[i] + '"><div class="row mx-auto mb-2 mt-2"><div class="social_link text-center col-12 my-auto mx-auto">' + name + '</div></div></a>'
    document.getElementById("link-holder").innerHTML += html;

    // add delete for link
    var delete_html = '<button onclick="removeLink(\'' + content_links[i] + '\')" style="display: none;" class="delete_link mx-auto my-auto text-center"><div class="row mx-auto"><div class="delete_link_text text-center col-12 my-auto mx-auto">Delete Link</div></div></button>'
    document.getElementById("link-holder").innerHTML += delete_html;

    sync.leave(token);
  }
  // Empty profile thats not user's
  if (num_content_links == 0 && page_address != ethaddress) {
    var html = '<div class="row mx-auto mb-2 mt-2"><div class="empty_links text-center col-12 my-auto mx-auto">BitProfile empty.<br/>No links have been added.</div></div>'
    document.getElementById("link-holder").innerHTML += html;
  }

  // Actions for buttons 
  // Give edit button action
  if (page_address == ethaddress) {
    if (num_content_links > 0) {
      document.getElementById("edit_link_button").onclick = function() {
        if (!link_delete_mode_on) {
          link_delete_mode_on = true;
          var elements = document.getElementsByClassName('delete_link');
          for (var i=0; i<elements.length; i++) {
            elements[i].style.display = "block";
          }
          document.getElementById("edit_link_button_text").innerHTML = "Done"
        }
        else {
          link_delete_mode_on = false;
          var elements = document.getElementsByClassName('delete_link');
          for (var i=0; i<elements.length; i++) {
            elements[i].style.display = "none";
          }
          document.getElementById("edit_link_button_text").innerHTML = "Edit"
        }
      }
    }

    // Give new link button action
    var newLinkModal = document.getElementById("newLinkModal");
    document.getElementById("add_new_link").onclick = function() {
      newLinkModal.style.display = "block";
    }

    var newAvatarModal = document.getElementById("newAvatarModal");
    document.getElementById("add_new_link").onclick = function() {
      newLinkModal.style.display = "block";
    }

    document.getElementById('profile_nft').addEventListener('click', function (e) {
      newAvatarModal.style.display = "block";
    });
  }
  sync.leave(token_0)
}

// We noticed that the current website tried to use the removed window.web3 API. If the site appears to be broken, please click here for more information.

// This is only for the profile
async function followUnfollowPage() {
  await switchToPolygon();

  if (isFollowing) {
    var contract = new web3_user.eth.Contract(contract_abi, contract_address)
    var unfollow = contract.methods.unfollow(page_address).encodeABI();

    var est = web3_user.eth.estimateGas({"to": contract_address, "from": ethaddress, "data": unfollow})
    est.then(function(gasAmount){
      console.log(gasAmount)
      web3_user.eth.sendTransaction({to:contract_address, from: ethaddress, data: unfollow, "chainId": chainId})
      .on('transactionHash', function(hash){
        console.log("hash")
        console.log(hash);
        document.getElementById("follow-button").innerHTML = "Loading"
      })
      .on('receipt', function(receipt){ // transacation was successful
        console.log("transacation fully completed")
        loadFollowersAndFollowingRinkeby()
      })
      .on('error', function(error, receipt) {
        // User rejected transaction
        console.log("error");
      });
    })
    .catch(function(error){
      alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
      console.log(error)
    }); 
  }
  else {
    var contract = new web3_user.eth.Contract(contract_abi, contract_address)

    // Create an NFT when following if it doesn't already exist  
    var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
    var tokenID = await contract.methods.getNFTFromAddress(page_address).call()
    var tokenExists = await contract.methods.tokenExists(tokenID).call()
    var follow = contract.methods.follow(page_address).encodeABI();
    if (!tokenExists) {
      follow = contract.methods.mintAndFollow(page_address).encodeABI();
    }

    var est = web3_user.eth.estimateGas({"to": contract_address, "from": ethaddress, "data": follow})
    est.then(function(gasAmount){
      console.log(gasAmount)
      web3_user.eth.sendTransaction({to: contract_address, from: ethaddress, data: follow, "chainId": chainId})
      .on('transactionHash', function(hash){
        console.log("hash")
        console.log(hash);
        document.getElementById("follow-button").innerHTML = "Loading"
      })
      .on('receipt', function(receipt){ // transacation was successful
        console.log("transacation fully completed")
        loadFollowersAndFollowingRinkeby()
        updateNFT(page_address, tokenID)
      })
      .on('error', function(error, receipt) {
        // User rejected transaction
        console.log("error");
      });
    })
    .catch(function(error){
      alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
      console.log(error)
    }); 
  }
}

// This is used by the follow modal for multiple accounts
async function followUnfollow(address, isFollowing) {
  await switchToPolygon();

  if (isFollowing) { // unfollow
    var contract = new web3_user.eth.Contract(contract_abi, contract_address)
    var unfollow = contract.methods.unfollow(address).encodeABI();

    var est = web3_user.eth.estimateGas({"to": contract_address, "from":ethaddress, "data": unfollow})
    est.then(function(gasAmount){
      console.log(gasAmount)
      web3_user.eth.sendTransaction({to:contract_address, from:ethaddress, data: unfollow, "chainId": chainId})
      .on('transactionHash', function(hash){
        console.log("hash")
        console.log(hash);
        document.getElementById("follow_button_" + address).innerHTML = "Loading"
      })
      .on('receipt', function(receipt){ // transacation was successful
        console.log("transacation fully completed")
        loadFollowersAndFollowingRinkeby()
        document.getElementById("follow_button_" + address).innerHTML = "Follow"
        document.getElementById("follow_button_" + address).setAttribute("onclick", 'followUnfollow("' + address + '",' + false + ')');
      })
      .on('error', function(error, receipt) {
        // User rejected transaction
        console.log("error");
      });
    })
    .catch(function(error){
      alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
      console.log(error)
    }); 
  }
  else { // follow
    var contract = new web3_user.eth.Contract(contract_abi, contract_address)

    // Create an NFT when following if it doesn't already exist  
    var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
    var tokenID = await contract.methods.getNFTFromAddress(address).call()
    var tokenExists = await contract.methods.tokenExists(tokenID).call()
    var follow = contract.methods.follow(address).encodeABI();
    if (!tokenExists) {
      follow = contract.methods.mintAndFollow(address).encodeABI();
    }

    var est = web3_user.eth.estimateGas({"to": contract_address, "from":ethaddress, "data": follow})
    est.then(function(gasAmount){
      console.log(gasAmount)
      web3_user.eth.sendTransaction({to:contract_address, from:ethaddress, data: follow, "chainId": chainId})
      .on('transactionHash', function(hash){
        console.log("hash")
        console.log(hash);
        document.getElementById("follow_button_" + address).innerHTML = "Loading"
      })
      .on('receipt', function(receipt){ // transacation was successful
        console.log("transacation fully completed")
        document.getElementById("follow_button_" + address).innerHTML = "Unfollow"
        document.getElementById("follow_button_" + address).setAttribute("onclick", 'followUnfollow("' + address + '",' + true + ')');
        loadFollowersAndFollowingRinkeby()
        updateNFT(address, tokenID)
      })
      .on('error', function(error, receipt) {
        // User rejected transaction
        console.log("error");
      });
    })
    .catch(function(error){
      alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
      console.log(error)
    }); 
  }
}

// function bytes32ToNumString(bytes32str) {
//     bytes32str = bytes32str.replace(/^0x/, '');
//     var bn = new BN(bytes32str, 16).fromTwos(256);
//     return bn.toString();
// }

// function getNFTFromAddress(address) {
//   bytes32 tokenHash = keccak256(abi.encodePacked(_addressToFollow));
//         uint256 tokenId = uint256(tokenHash);
//   var tokenHash = web3.utils.soliditySHA3({ type: 'uint256', value: nearestEpoch });
// }

async function updateNFT(address, tokenID) {
  const options = {method: 'GET'};
  fetch('https://api.opensea.io/api/v1/asset/' + contract_address + '/' + tokenID.toString() + '/?force_update=true', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}

async function followUnfollowRec(address, isFollowing) {
  await switchToPolygon();

  if (isFollowing) { // unfollow
    var contract = new web3_user.eth.Contract(contract_abi, contract_address)
    var unfollow = contract.methods.unfollow(address).encodeABI();

    var est = web3_user.eth.estimateGas({"to": contract_address, "from":ethaddress, "data": unfollow})
    est.then(function(gasAmount){
      console.log(gasAmount)
      web3_user.eth.sendTransaction({to:contract_address, from:ethaddress, data: unfollow, "chainId": chainId})
      .on('transactionHash', function(hash){
        console.log("hash")
        console.log(hash);
        document.getElementById("rec_follow_button_" + address).innerHTML = "Loading"
      })
      .on('receipt', function(receipt){ // transacation was successful
        console.log("transacation fully completed")
        loadFollowersAndFollowingRinkeby()
        document.getElementById("rec_follow_button_" + address).innerHTML = "Follow"
        document.getElementById("rec_follow_button_" + address).setAttribute("onclick", 'followUnfollow("' + address + '",' + false + ')');
      })
      .on('error', function(error, receipt) {
        // User rejected transaction
        console.log("error");
      });
    })
    .catch(function(error){
      alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
      console.log(error)
    }); 
  }
  else { // follow
    var contract = new web3_user.eth.Contract(contract_abi, contract_address)

    // Create an NFT when following if it doesn't already exist  
    var web3_rinkeby = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));
    var tokenID = await contract.methods.getNFTFromAddress(address).call()
    var tokenExists = await contract.methods.tokenExists(tokenID).call()
    var follow = contract.methods.follow(address).encodeABI();
    if (!tokenExists) {
      follow = contract.methods.mintAndFollow(address).encodeABI();
    }

    var est = web3_user.eth.estimateGas({"to": contract_address, "from":ethaddress, "data": follow})
    est.then(function(gasAmount){
      console.log(gasAmount)
      web3_user.eth.sendTransaction({to:contract_address, from:ethaddress, data: follow, "chainId": chainId})
      .on('transactionHash', function(hash){
        console.log("hash")
        console.log(hash);
        document.getElementById("rec_follow_button_" + address).innerHTML = "Loading"
      })
      .on('receipt', function(receipt){ // transacation was successful
        console.log("transacation fully completed")
        document.getElementById("rec_follow_button_" + address).innerHTML = "Unfollow"
        document.getElementById("rec_follow_button_" + address).setAttribute("onclick", 'followUnfollow("' + address + '",' + true + ')');
        document.getElementById("recommended_interaction_" + address).style.display = "none";
        
        loadFollowersAndFollowingRinkeby()

        updateNFT(address, tokenID);
      })
      .on('error', function(error, receipt) {
        // User rejected transaction
        console.log("error");
      });
    })
    .catch(function(error){
      alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
      console.log(error)
    }); 
  }
}

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

async function addNewAvatar() {
  var url_raw = document.getElementById("new_avatar_url").value;
  if (url_raw == "") {
    return
  }
  var url = new URL(url_raw)
  var path = getLocation(url).pathname.split("/");
  var nft_addr = path[2]
  var nft_id = path[3]

  var contract = new web3_user.eth.Contract(avatar_contract_abi, avatar_contract_address)
  var connectNFT = contract.methods.connectAvatarNFT(nft_addr, nft_id).encodeABI();

  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    });
  } 
  catch (switchError) {
    alert("Network switch failed. Try switching to mainnet chain manually.")
  }

  var est = web3_user.eth.estimateGas({"to": avatar_contract_address, "from":ethaddress, "data": connectNFT})
  est.then(function(gasAmount){
    console.log(gasAmount)
    web3_user.eth.sendTransaction({to:avatar_contract_address, from:ethaddress, data: connectNFT, "chainId": 1})
    .on('transactionHash', function(hash){
      console.log("hash")
      console.log(hash);
      newAvatarModal.style.display = "none";
    })
    .on('receipt', function(receipt){ // transacation was successful
      console.log("transacation fully completed")
      loadAvatarMainnet()
    })
    .on('error', function(error, receipt) {
      // User rejected transaction
      console.log("error");
    });
  })
  .catch(function(error){
    alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page. Make sure the NFT is owned by the address you're using.")
    console.log(error)
  }); 
}

async function addNewLink() {
  await switchToPolygon();

  var url = document.getElementById("new_link_url").value;
  var name = document.getElementById("new_link_name").value;

  var contract = new web3_user.eth.Contract(contract_abi, contract_address)
  var addLink = contract.methods.addContentLink(url, name).encodeABI();
  // Chain ID of Rinkeby Test Net is 4, replace it to 1 for Main Net

  var est = web3_user.eth.estimateGas({"to": contract_address, "from":ethaddress, "data": addLink})
  est.then(function(gasAmount){
    console.log(gasAmount)
    web3_user.eth.sendTransaction({to:contract_address, from:ethaddress, data: addLink, "chainId": chainId})
    .on('transactionHash', function(hash){
      console.log("hash")
      console.log(hash);
      newLinkModal.style.display = "none";
    })
    .on('receipt', function(receipt){ // transacation was successful
      console.log("transacation fully completed")
      loadLinksRinkeby()
    })
    .on('error', function(error, receipt) {
      // User rejected transaction
      console.log("error");
    });
  })
  .catch(function(error){
    alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
    console.log(error)
  }); 
}

async function removeLink(link) {
  await switchToPolygon();

  var contract = new web3_user.eth.Contract(contract_abi, contract_address)
  var removeContentLink = contract.methods.removeContentLink(link).encodeABI();
  // Chain ID of Rinkeby Test Net is 4, replace it to 1 for Main Net

  var est = web3_user.eth.estimateGas({"to": contract_address, "from":ethaddress, "data": removeContentLink})
  est.then(function(gasAmount){
    console.log(gasAmount)
    web3_user.eth.sendTransaction({to:contract_address, from:ethaddress, data: removeContentLink, "chainId": chainId})
    .on('transactionHash', function(hash){
      console.log("hash")
      console.log(hash);
      link_delete_mode_on = false;
      var elements = document.getElementsByClassName('delete_link');
      for (var i=0; i<elements.length; i++) {
        elements[i].style.display = "none";
      }
      document.getElementById("edit_link_button_text").innerHTML = "Edit"
    })
    .on('receipt', function(receipt){ // transacation was successful
      console.log("transacation fully completed")
      // do this again just in case they open it again
      link_delete_mode_on = false;
      var elements = document.getElementsByClassName('delete_link');
      for (var i=0; i<elements.length; i++) {
        elements[i].style.display = "none";
      }
      document.getElementById("edit_link_button_text").innerHTML = "Edit"
      loadLinksRinkeby()
    })
    .on('error', function(error, receipt) {
      // User rejected transaction
      console.log("error");
    });
  })
  .catch(function(error){
    alert("Transaction is likely to fail. Suggestions: Try again later when gas fees are lower or refresh page.")
    console.log(error)
  }); 
}

function getShortAddress(address) {
  return address.substring(0,6) + "..." + address.substr(-4)
}

function showFollowers() {
  if (followersCount == 0) {
    document.getElementById("followersModalTitle").innerHTML = "No followers"
  }
  else {
    document.getElementById("followersModalTitle").innerHTML = "Followers"
  }

  document.getElementById("followers_holder").innerHTML = ""

  var length = followersCount;
  if (length > 50) {
    length = 50;
  }

  var didSync = false;
  var sync = new DispatchGroup();
  sync.notify(function() {
    if (didSync) {
      followersModal.style.display = "block";
    }
  })

  var token_0 = sync.enter()
  didSync = true
  followers.forEach(function(item, i) {
    var token = sync.enter()
    if (i < length) {
      var isFollowing = false
      if (userFollowing.includes(followers[i])) {
        isFollowing = true
      }
      // need to set index since i will be modified and will be wrong in callback
      var index = i;

      getReverseENS(followers[index]).then((ens_name) => {
        if (ens_name != null && ens_name != undefined && (ens_name != "")) {
          var html = '<div class="row mx-auto col-12 mb-2 mt-0"><a href="' + followers[index] + '" class="followersModalAddress col-8">' + ens_name + '</a><button class="follow-button col-4" id="follow_button_' + followers[index] + '">' + ((isFollowing) ? 'Unfollow'  : 'Follow') + '</button></div>'
          document.getElementById("followers_holder").innerHTML += html
          if (followers[index] == ethaddress) {
            document.getElementById("follow_button_" + followers[index]).style.display = "none";
          }
          document.getElementById("follow_button_" + followers[index]).setAttribute("onclick", 'followUnfollow("' + followers[index] + '",' + isFollowing + ')');
        }
        else {
          var html = '<div class="row mx-auto col-12 mb-2 mt-0"><a href="' + followers[index] + '" class="followersModalAddress col-8">' + getShortAddress(followers[index]) + '</a><button class="follow-button col-4" id="follow_button_' + followers[index] + '">' + ((isFollowing) ? 'Unfollow'  : 'Follow') + '</button></div>'
          document.getElementById("followers_holder").innerHTML += html
          if (followers[index] == ethaddress) {
            document.getElementById("follow_button_" + followers[index]).style.display = "none";
          }
          document.getElementById("follow_button_" + followers[index]).setAttribute("onclick", 'followUnfollow("' + followers[index] + '",' + isFollowing + ')');
        }
        sync.leave(token)
      })
    }
    else {
      sync.leave(token)
    }
  })
  sync.leave(token_0)
}

function showFollowing() {
  if (followingCount == 0) {
    document.getElementById("followersModalTitle").innerHTML = "Not following anyone."
  }
  else {
    document.getElementById("followersModalTitle").innerHTML = "Following"
  }
  
  document.getElementById("followers_holder").innerHTML = ""

  var didSync = false
  var sync = new DispatchGroup();
  sync.notify(function() {
    if (didSync) {
      followersModal.style.display = "block";
    }
  })

  var token_0 = sync.enter()
  didSync = true
  following.forEach(function(item, i) {
    var token = sync.enter()
    if (i < followingCount) {
      var isFollowing = false
      if (userFollowing.includes(following[i])) {
        isFollowing = true
      }
      var index = i;
      getReverseENS(following[index]).then((ens_name) => {
        if (ens_name != null && ens_name != undefined && ens_name != "") {
          var html = '<div class="row mx-auto col-12 mb-2 mt-0"><a href="' + following[index] + '" class="followersModalAddress col-8">' + ens_name + '</a><button class="follow-button col-4" id="follow_button_' + following[index] + '">' + ((isFollowing) ? 'Unfollow'  : 'Follow') + '</button></div>'
          document.getElementById("followers_holder").innerHTML += html
          if (following[index] == ethaddress) {
            document.getElementById("follow_button_" + following[index]).style.display = "none";
          }
          document.getElementById("follow_button_" + following[index]).setAttribute("onclick", 'followUnfollow("' + following[index] + '",' + isFollowing + ')');
        }
        else {
          var html = '<div class="row mx-auto col-12 mb-2 mt-0"><a href="' + following[index] + '" class="followersModalAddress col-8">' + getShortAddress(following[index]) + '</a><button class="follow-button col-4" id="follow_button_' + following[index] + '">' + ((isFollowing) ? 'Unfollow'  : 'Follow') + '</button></div>'
          document.getElementById("followers_holder").innerHTML += html
          if (following[index] == ethaddress) {
            document.getElementById("follow_button_" + following[index]).style.display = "none";
          }
          document.getElementById("follow_button_" + following[index]).setAttribute("onclick", 'followUnfollow("' + following[index] + '",' + isFollowing + ')');
        }
        sync.leave(token)
      })
    }
    else {
      sync.leave(token)
    }
  })
  sync.leave(token_0)
}

async function loadProfile() {
  // const urlParams = new URLSearchParams(window.location.search);
  // page_address = urlParams.get('address');
  // if (page_address == null || page_address == "") {
  //   return;
  // }

  page_address = window.location.pathname.split("/")[1]
  page_address = page_address.toLowerCase()

  if (page_address == "") {
    document.getElementById("profile").style.display = "none";
    document.getElementById("landing").style.display = "block";
    return;
  }
  else {
    document.getElementById("profile").style.display = "block";
    document.getElementById("landing").style.display = "none";
  }

  var web3_infura_mainnet = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fee8c943351648ac819a52f3ee66bfbc"));

  // await web3Modal.clearCachedProvider()

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
    // if (web3Modal.cachedProvider) {
      // provider = await web3Modal.connect();
    // }    

    web3_user = new Web3(provider);
    const accounts = await web3_user.eth.getAccounts();
    if (accounts !== null) {
      console.log(accounts[0])
      ethaddress = accounts[0].toLowerCase();
    }

    setCookie('faucet','done', 5);
    var x = getCookie('faucet');
    if (x == null || x == undefined) {
      const url = "https://us-central1-bitprofile-f37a0.cloudfunctions.net/bitProfileFaucet?address=" + ethaddress
      var xmlHttpUpdate = new XMLHttpRequest();
      xmlHttpUpdate.onreadystatechange = function() {
        if (xmlHttpUpdate.readyState == 4 && xmlHttpUpdate.status == 200){
          const json = JSON.parse(xmlHttpUpdate.responseText);
          processTransacationsEtherscan(json, web3)
        }
      }
      xmlHttpUpdate.open("GET", url, true);
      xmlHttpUpdate.send(null);
    }

    document.getElementById("username").href = "https://etherscan.io/address/" + page_address

    if (page_address.includes("eth")) {
      document.getElementById("username").innerHTML = page_address
      web3_infura_mainnet.eth.ens.getOwner(page_address).then(function (owner) {
        page_address = owner.toLowerCase();

        loadLinksRinkeby()
        loadAvatarMainnet()

        // this needs to be here since it gets userFollowing, which is needed to see if following recs
        loadFollowersAndFollowingRinkeby().then(function() {
          if (page_address == ethaddress) {
            getEtherscanTransacations(page_address, web3_user)
            getOpenseaTransacations(page_address, web3_user)
          }
        })

      })
    }
    else {
      getReverseENS(page_address).then((ens_name) => {
        if (ens_name != null && ens_name != undefined && ens_name != "") {
          document.getElementById("username").innerHTML = ens_name;
        }
        else {
          document.getElementById("username").innerHTML = getShortAddress(page_address);
        }
      })
      
      loadLinksRinkeby()
      loadAvatarMainnet()

      loadFollowersAndFollowingRinkeby().then(function() {
        if (page_address == ethaddress) {        
          getEtherscanTransacations(page_address, web3_user)
          getOpenseaTransacations(page_address, web3_user)
        }
      })
    }
    // the first thing we have to do is load the transacations for the account
    // could move this to be in a different function too
    // then we filter for transacations that are transfer and filter for non-contract addresses

  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

}

async function switchToPolygon() {

  // polygon is 0x137
  // rinkeby is 0x4
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x137' }],
    });
  } 
  catch (switchError) { // don't need below here but in other places
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{ chainId: '0x137', rpcUrl: 'https://rpc-mainnet.matic.network', blockExplorerUrl: 'https://polygonscan.com'}],
        });
      } catch (addError) {
        // handle "add" error
        alert("Error, couldn't add network.")
      }
    }
  }
}

function setupModals() {
  // Get the chainModal
  var chainModal = document.getElementById("chainModal");
  document.getElementById("follow-button").onclick = function() {
    followUnfollowPage();
    // chainModal.style.display = "block";
  }

  document.getElementById("new_link_submit_button").onclick = function() {
    addNewLink();
  }

  document.getElementById("new_avatar_submit_button").onclick = function() {
    addNewAvatar();
  }

  document.getElementById("followers_button").onclick = function() {
    showFollowers();
  }

  document.getElementById("following_button").onclick = function() {
    showFollowing();
  }

  window.onclick = function(event) {
    if (event.target == chainModal) {
      chainModal.style.display = "none";
    }
    var newLinkModal = document.getElementById("newLinkModal");
    if (event.target == newLinkModal) {
      newLinkModal.style.display = "none";
    }
    var followersModal = document.getElementById("followersModal");
    if (event.target == followersModal) {
      followersModal.style.display = "none";
    }
    var newAvatarModal = document.getElementById("newAvatarModal");
    if (event.target == newAvatarModal) {
      newAvatarModal.style.display = "none";
    }
  }

  var closes = document.getElementsByClassName("close");
  Array.from(closes).forEach(function(close) {
    close.onclick = function() {
      chainModal.style.display = "none";
      newLinkModal.style.display = "none";
      followersModal.style.display = "none";
      newAvatarModal.style.display = "none";
    }
  })
    
}

function setupSearch() {
  document.getElementById("search_button").addEventListener("click", function() {
    var searchText = document.getElementById("searchbar").value;
    window.location.href = searchText;
  });

  document.getElementById("searchbar").addEventListener("keyup", ({key}) => {
      if (key === "Enter") {
        var searchText = document.getElementById("searchbar").value;
        window.location.href = searchText;
      }
  })
}

async function enter_app() {
  await web3Modal.clearCachedProvider()
  try {
    provider = await web3Modal.connect();
    web3_user = new Web3(provider);
    const accounts = await web3_user.eth.getAccounts();
    if (accounts !== null) {
      console.log(accounts[0])
      ethaddress = accounts[0].toLowerCase();
      window.location.href = ethaddress;

      setCookie('faucet','done', 5);
      var x = getCookie('faucet');
      if (x == null || x == undefined) {
        const url = "https://us-central1-bitprofile-f37a0.cloudfunctions.net/bitProfileFaucet?address=" + ethaddress
        var xmlHttpUpdate = new XMLHttpRequest();
        xmlHttpUpdate.onreadystatechange = function() {
          if (xmlHttpUpdate.readyState == 4 && xmlHttpUpdate.status == 200){
            const json = JSON.parse(xmlHttpUpdate.responseText);
            processTransacationsEtherscan(json, web3)
          }
        }
        xmlHttpUpdate.open("GET", url, true);
        xmlHttpUpdate.send(null);
      }
    }
    else {
      alert("Could not get a wallet connection");
      return;
    }
  }
  catch(e) {
    // alert("Could not get a wallet connection", e);
    return;
  }
}

function setupEnterApp() {
  document.getElementById("enter_app").addEventListener("click", function() {
      enter_app()
  });
}

// Things to add:
// bio
// Replace Rinkeby with Polygon
// DM people Tuesday. Send email.
// (Done) add caching for account stuff to save space
// (Done) profile image
// (Done) change url to not use query
// (Done) force update nft and lower how hard it is to draw
// (Done) Search for profile
// (Done) follow button for suggestions
// (Done) Username have ENS name even if address in url ... also for followers
// (Done) followers and following
// (Done) truncate address username: 0x409...92d79


window.addEventListener('load', async () => {
  init();
  loadProfile();
  setupModals();
  setupSearch();
  setupEnterApp();
});

// linkNames can be cached

// move loadLinksRinkeby() to not depend on wallet

// 0x0a22fEa31995ED13D43D37b617C9443ac22818Ad matic deployed contract


















