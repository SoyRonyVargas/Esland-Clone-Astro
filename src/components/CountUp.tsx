import { useEffect, type FC } from 'preact/compat'
import { useProgressiveNumber } from '../hooks/useProgressiveNumber'

type CountProps = {
  initial: number
  final: number
  duration?: number
  decimals?: number
}

export const CountUp : FC<CountProps> = ({ duration , final , initial , decimals = 0 }) => {

  const [ count , setCount ] = useProgressiveNumber( initial , duration, decimals )

  useEffect( () => {

    return setCount(() => final)

  }, []) 

  return (
    <span> {count} </span>
  )

}