import React from 'react'
import { SiTicktick } from 'react-icons/si'

export const Feature = ({feature}) => {
    return (
        <div className='mb-2'>
            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
            </SiTicktick>
                <span>{feature}</span>
            </div>
        </div>
    )
}
