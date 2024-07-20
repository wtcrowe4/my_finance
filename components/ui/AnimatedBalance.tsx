'use client';

import CountUp from 'react-countup'


const AnimatedBalance = ({ amount }: { amount:number }) => {
  return (
    <div className="w-full">
        <CountUp 
            prefix='$'
            decimal='.'
            decimals={2}
            end={amount} 
            duration={2.5} />
    </div>
  )
}

export default AnimatedBalance