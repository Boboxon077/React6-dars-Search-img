import React from 'react'

function Galery({data: {results}}) {
  return (
    <div className='galery'>
        <ul>
            {results.map((image) => {
                return(
                <li key={image.id}>
                    <img src={image.urls.regular} alt="" width={300} height={300}/>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Galery