import { AbiItem } from "web3-utils";

interface CustomAbiItem extends AbiItem {
  signature: string;
}

export const TODO_APP_ADDRESS = "0x8643Ce0d3B1e55A6A6708CC4FbBEB1834abA8C4D";

export const TODO_APP_ABI: CustomAbiItem[] = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "completed",
        type: "bool",
      },
      {
        name: "content",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8d977672",
  },
  {
    constant: true,
    inputs: [],
    name: "taskCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xb6cb58a5",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "completed",
        type: "bool",
      },
      {
        indexed: false,
        name: "content",
        type: "string",
      },
    ],
    name: "TaskCreated",
    type: "event",
    signature:
      "0xbb549ce81846f37bb5220af2a58c4da92e9e588356eb1f679b24db77968b130e",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "completed",
        type: "bool",
      },
    ],
    name: "TaskCompleted",
    type: "event",
    signature:
      "0xe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_content",
        type: "string",
      },
    ],
    name: "createTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x111002aa",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "toggleCompleted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x455f5024",
  },
];
