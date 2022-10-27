import hre from 'hardhat'

const COFFIN_ADDRESS = new Map()
const STARGATE_ROUTER_ADDRESS = new Map()
const XCOFFIN_BRIDGE = new Map()
const USDC_STARGATE = new Map()
const TEST_TOKEN = new Map()
const PAIR_CONTRACT = new Map()
const FACTORY_CONTRACT = new Map()
const PAIR_CODE_HASH = new Map()

// rinkeby
COFFIN_ADDRESS.set(4, '0xBC321C2e7A7FA48DcF0C09E088950C8172c2Ecc9')
STARGATE_ROUTER_ADDRESS.set(4, '0x82A0F5F531F9ce0df1DF5619f74a0d3fA31FF561')
XCOFFIN_BRIDGE.set(4, '0xb0AaeFFfFC9583D8b6d479daBf80B45519F08dD0')
USDC_STARGATE.set(4, '0x1717A0D5C8705EE89A8aD6E808268D6A826C97A4')
TEST_TOKEN.set(4, '0x53761f3b699372cb9f81b41e544db575eb6def9b')
PAIR_CONTRACT.set(4, '0xb4423b2a11afda5565856ffd6476c7f1ceb1a7f2')
FACTORY_CONTRACT.set(4, '0xc35dadb65012ec5796536bd9864ed8773abc74c4')
PAIR_CODE_HASH.set(4, '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303')

// fuji
COFFIN_ADDRESS.set(43113, '0xB5891167796722331b7ea7824F036b3Bdcb4531C')
STARGATE_ROUTER_ADDRESS.set(43113, '0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1')
USDC_STARGATE.set(43113, '0x4A0D1092E9df255cf95D72834Ea9255132782318')
XCOFFIN_BRIDGE.set(43113, '0x18F342C403c9bE3C74aae516cCbE2a690785e90d')

const DST_CHAINID = 80001
const STG_DST_CHAINID = 10009
const USER = '0xC1056bDFE993340326D2efADaCFDFd6Fab5Eb13c'

async function main() {
  const chainId = Number(await hre.getChainId())
  const XBridge = await hre.ethers.getContractFactory('soulxswap')

  const ERC20 = await hre.ethers.getContractFactory('MockERC20')
  const usdc = await ERC20.attach(USDC_STARGATE.get(chainId))
  const testToken = await ERC20.attach(TEST_TOKEN.get(chainId))

  // const bbs = XBridge.attach(XCOFFIN_BRIDGE.get(chainId));

  // Deploy
  const bbs = await XBridge.deploy(COFFIN_ADDRESS.get(chainId), STARGATE_ROUTER_ADDRESS.get(chainId))
  await bbs.deployed()
  console.log(bbs.address)

  // Approve to Stargate
  console.log(await bbs.approveToStargateRouter(usdc.address))

  // Approve USDC
  console.log(await usdc.approve(XCOFFIN_BRIDGE.get(chainId), hre.ethers.utils.parseEther('1000000000000000')))
  console.log(await usdc.approve(COFFIN_ADDRESS.get(chainId), hre.ethers.utils.parseEther('1000000000000000')))
  console.log(await testToken.approve(COFFIN_ADDRESS.get(chainId), hre.ethers.utils.parseEther('10000000000000000')))

  // Master Contract Approval
  //   console.log(
  //     await bbs.setCoffinBoxApproval(
  //       USER,
  //       true,
  //       27,
  //       "0x40a0b36776135bb9b7e286cdb4b23d09c3c868b67da54209525bfdfdec741ba2",
  //       "0x0a744a6c4c4ade91300caa95fc7fc2277338008f03b98ee590e39a9a09ad6ec4"
  //     )
  //   );

  //   const depositToCoffinBoxData = ethers.utils.defaultAbiCoder.encode(
  //     ["address", "address", "uint256", "uint256"],
  //     [TEST_TOKEN.get(chainId), USER, ethers.utils.parseEther("1000"), 0]
  //   );

  //   const transferCoffinData = ethers.utils.defaultAbiCoder.encode(
  //     ["address", "address", "uint256", "uint256", "bool"],
  //     [
  //       TEST_TOKEN.get(chainId),
  //       PAIR_CONTRACT.get(chainId), // uniswap pair
  //       ethers.utils.parseEther("1000"),
  //       0,
  //       true,
  //     ]
  //   );

  //   const legactSwapDataSrc = ethers.utils.defaultAbiCoder.encode(
  //     ["address", "bytes32", "uint256", "uint256", "address[]", "address"],
  //     [
  //       FACTORY_CONTRACT.get(chainId),
  //       PAIR_CODE_HASH.get(chainId),
  //       utils.parseEther("1000"),
  //       utils.parseUnits("10", 6),
  //       [TEST_TOKEN.get(chainId), USDC_STARGATE.get(chainId)],
  //       bbs.address,
  //     ]
  //   );

  //   const dstWithdrawData = ethers.utils.defaultAbiCoder.encode(
  //     ["address", "address", "uint256"],
  //     [
  //       USDC_STARGATE.get(DST_CHAINID),
  //       PAIR_CONTRACT.get(DST_CHAINID),
  //       utils.parseUnits("8", 6),
  //     ]
  //   );

  //   const legactSwapDataDst = ethers.utils.defaultAbiCoder.encode(
  //     ["address", "bytes32", "uint256", "uint256", "address[]", "address"],
  //     [
  //       FACTORY_CONTRACT.get(DST_CHAINID),
  //       PAIR_CODE_HASH.get(DST_CHAINID),
  //       utils.parseUnits("8", 6),
  //       utils.parseEther("7"),
  //       [USDC_STARGATE.get(DST_CHAINID), TEST_TOKEN.get(DST_CHAINID)],
  //       USER,
  //     ]
  //   );

  // const teleportData = ethers.utils.defaultAbiCoder.encode(
  //   [
  //     "uint16",
  //     "address",
  //     "uint256",
  //     "uint256",
  //     "uint256",
  //     "uint256",
  //     "uint256",
  //     "address",
  //     "address",
  //     "uint256",
  //     "uint8[]",
  //     "uint256[]",
  //     "bytes[]",
  //   ],
  //   [
  //     STG_DST_CHAINID,
  //     USDC_STARGATE.get(chainId),
  //     1,
  //     1,
  //     ethers.utils.parseUnits("10", 6),
  //     ethers.utils.parseUnits("9", 6),
  //     0,
  //     XCOFFIN_BRIDGE.get(DST_CHAINID),
  //     USER,
  //     500000,
  //     [3, 5],
  //     [0, 0],
  //     [dstWithdrawData, legactSwapDataDst],
  //   ]
  // );

  //   console.log(
  //     await bbs.cook(
  //       [0, 1, 5, 4],
  //       [0, 0, 0, 0],
  //       [
  //         depositToCoffinBoxData,
  //         transferCoffinData,
  //         legactSwapDataSrc,
  //         teleportData,
  //       ],
  //       { value: ethers.utils.parseEther("0.01") }
  //     )
  //   );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

// rinkeby bridge coffin - 0xBf28dD7C3B863eae035eBf535B1B214070E8ddBf
// mumbai bridge coffin- 0x800c34B69885eBe1Ffa116aaCc0e59Ec0C373912
