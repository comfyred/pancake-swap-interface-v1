import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
// import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const comfyPriceUsd = priceData ? parseFloat(priceData.data['0xf09b7B6bA6dAb7CccC3AE477a174b164c39f4C66'].price) : 0
  // console.log(comfyPriceUsd)
  const comfyPriceUsdString =
    Number.isNaN(comfyPriceUsd) || comfyPriceUsd === 0
      ? ''
      : ` - $${comfyPriceUsd
          .toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          })
          .replace(/^0+/, '')}`

  useEffect(() => {
    document.title = `ComfySwap${comfyPriceUsdString}`
  }, [comfyPriceUsdString])
}
export default useGetDocumentTitlePrice
