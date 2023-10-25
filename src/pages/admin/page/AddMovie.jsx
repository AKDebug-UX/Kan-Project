import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'

function AddMovie() {
  const context = useContext(myContext);
  const { products, setProducts, addMovie } = context;
  return (
    <div>
      <div className='flex justify-center items-center my-9 h-auto'>
        <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
          <div className="">
            <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Movie</h1>
          </div>
          <div>
            <input type="text"
              value={products.title}
              onChange={(e) => setProducts({ ...products, title: e.target.value })}
              name='title'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Movie title'
            />
          </div>
          <div>
            <input type="text"
              value={products.price}
              onChange={(e) => setProducts({ ...products, price: e.target.value })}
              name='price'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Movie price'
            />
          </div>
          <div>
            <input type="text"
              value={products.imageUrl}
              onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
              name='imageurl'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Movie imageUrl'
            />
          </div>
          <div>
            <input type="text"
              value={products.category}
              onChange={(e) => setProducts({ ...products, category: e.target.value })}
              name='category'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Movie category'
            />
          </div>
          <div className='flex gap-4'>
            <input type="text"
              value={products.date}
              onChange={(e) => setProducts({ ...products, date: e.target.value })}
              name='date'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[9em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Movie Date'
            />
            <input type="text"
              value={products.time}
              onChange={(e) => setProducts({ ...products, time: e.target.value })}
              name='time'
              className='uppercase bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[10em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Movie Showtime'
            />
          </div>
          <div>
            <textarea cols="30" rows="10" name='title'
              value={products.description}
              onChange={(e) => setProducts({ ...products, description: e.target.value })}
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Movie desc'>

            </textarea>
          </div>
          <div className=' flex justify-center mb-3'>
            <button
              onClick={addMovie}
              className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
              Add Movie
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddMovie