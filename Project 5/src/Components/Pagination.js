import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

    const {page, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className='w-full  flex justify-center border shadow-lg py-2 bg-white fixed bottom-0'>
        <div className='w-11/12  max-w-[550px] flex flex-row items-center justify-between'>
        <div>
            {
                page > 1 &&
                <button onClick={() => handlePageChange(page-1)} className='rounded-md px-3 py-2 border text-sm mr-2'>Previous</button>
            }

            {
                page < totalPages &&
                <button onClick={() => handlePageChange(page+1)} className='rounded-md px-3 py-2 border text-sm'>Next</button>
            }
        </div>
        <div>
            <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
        </div>
        </div>
    </div>
  )
}

export default Pagination