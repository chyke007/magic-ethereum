const path  = require('path');
const fs = require('fs');
const  solc = require('solc')

const helloWorldPath = path.resolve(__dirname, '' , 'helloworld.sol');
const file = fs.readFileSync(helloWorldPath).toString();

// Input structure for solidity compiler
var input = {
    language: "Solidity",
    sources: {
      "helloworld.sol": {
        content: file,
      },
    },
    
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  if(output.errors) {
      output.errors.forEach(err => {
          console.log(err.formattedMessage);
      });
  } else {
      const bytecode = output.contracts['helloworld.sol'].helloworld.evm.bytecode.object;
      const abi = output.contracts['helloworld.sol'].helloworld.abi;
      console.log(`bytecode: ${bytecode}`);
      console.log(`abi: ${JSON.stringify(abi, null, 2)}`);
  }
