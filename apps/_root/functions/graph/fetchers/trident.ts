import { gql } from 'graphql-request'

export const tridentFactoryQuery = gql`
  query tridentFactoryQuery($block: Block_height) {
    factories(first: 1, block: $block) {
      volumeUSD
      poolCount
    }
  }
`

export const coffinBoxQuery = gql`
  query coffinBoxQuery($block: Block_height, $where: CoffinBox_filter) {
    coffinBoxes(first: 1, block: $block, where: $where) {
      id
      protocolCount
      userCount
      tokenCount
      masterContractCount
      cloneCount
      flashloanCount
      transactionCount
    }
  }
`

export const coffinTokensQuery = gql`
  query coffinTokens($first: Int = 1000, $skip: Int = 0, $block: Block_height, $where: Token_filter) {
    tokens(first: $first, skip: $skip, block: $block, where: $where) {
      id
      rebase {
        elastic
      }
    }
  }
`
