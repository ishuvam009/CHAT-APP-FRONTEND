import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex mt-2'>
     <div className='form-control'>
      <label className={`label gap-2 cursor-pointer`}>
        <span className='label-text text-gray-100'>Male</span>
        <input type='checkbox' className='checkbox border-gray-100' />
      </label>
     </div>

     <div className='form-control'>
      <label className={`label gap-2 cursor-pointer`}>
        <span className='label-text text-gray-100'>Feale</span>
        <input type='checkbox' className='checkbox border-gray-100' />
      </label>
     </div>
      
    </div>
  )
}

export default GenderCheckBox



// STARTER CODE
// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex mt-2'>
//      <div className='form-control'>
//       <label className={`label gap-2 cursor-pointer`}>
//         <span className='label-text text-gray-100'>Male</span>
//         <input type='checkbox' className='checkbox border-gray-100' />
//       </label>
//      </div>

//      <div className='form-control'>
//       <label className={`label gap-2 cursor-pointer`}>
//         <span className='label-text text-gray-100'>Feale</span>
//         <input type='checkbox' className='checkbox border-gray-100' />
//       </label>
//      </div>
      
//     </div>
//   )
// }

// export default GenderCheckBox