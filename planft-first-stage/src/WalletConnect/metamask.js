import {
    ethers
  } from 'ethers'
  import {
    Message
  } from 'element-ui'
  
  async function connectMetaMask () {
  
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      const { chainId } = await provider.getNetwork()
      const account = accounts[0];
      console.log(chainId,account);
      window.ethereum.on('networkChanged', () => {
        window.location.reload()
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload()
      })
      window.ethereum.on('message', message => {
        console.log('message', message)
      })
      window.ethereum.on('disconnect', () => {
        localStorage.removeItem('walletType')
        localStorage.removeItem('walletTypeVerify')
        window.location.reload()
      })
      return {
        account,
        provider,
        chainId,
      }
    } catch (error) {
      console.log(error)
      Message.error('Wallet connection rejected. Please try again!')
      return false
    }
  }
  
  export default connectMetaMask