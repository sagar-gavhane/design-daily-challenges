import React, { useState } from 'react'

export default function Calculator(props) {
  const [expression, setExpression] = useState('')
  const [calculation, setCalculation] = useState('')

  const handleOnClick = (e) => {
    const key = e.target.dataset.key
    switch (key) {
      case '1':
      case '0':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        setExpression(`${expression}${key}`)
        break;
      case 'equal':
        try {
          setCalculation(eval(expression))
        } catch (err) {
          console.log('[err]', err)
        }
        break;

      case 'clear':
        setExpression('')
        setCalculation('')
        break;

      default:
        break;
    }
  }

  return (
    <div className="grid bg-gradient-to-br from-purple-500 to-yellow-600 h-screen justify-center items-center">
      <div className="w-80 bg-white rounded-xl relative">
          <div className="absolute bg-gray-300 rounded-full w-3 h-3 top-3 left-4 hover:bg-red-500" />
          <div className="absolute bg-gray-300 rounded-full w-3 h-3 top-3 left-8 hover:bg-yellow-500" />
          <div className="absolute bg-gray-300 rounded-full w-3 h-3 top-3 left-12 hover:bg-green-500"/>
        <div className='grid' onClick={handleOnClick}>
          <div className='grid justify-end p-4'>
            <div className="text-gray-500 text-lg text-right h-8">{calculation}</div>
            <div className='text-black text-2xl text-right font-semibold h-8'>{expression}</div>
          </div>
          <div className="grid grid-cols-4">
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-200 border hover:bg-purple-300 cursor-pointer' data-key='clear'>C</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-200 border hover:bg-purple-300 cursor-pointer' data-key='+/-'>+/-</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-200 border hover:bg-purple-300 cursor-pointer' data-key='%'>%</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-yellow-500 text-white border hover:bg-yellow-600 cursor-pointer' data-key='/'>÷</span>
          </div>
          <div className='grid grid-cols-4'>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='7'>7</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='8'>8</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='9'>9</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-yellow-500 text-white border hover:bg-yellow-600 cursor-pointer' data-key='*'>x</span>
          </div>
          <div className='grid grid-cols-4'>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='4'>4</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='5'>5</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='6'>6</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-yellow-500 text-white border hover:bg-yellow-600 cursor-pointer' data-key='-'>-</span>
          </div>
          <div className='grid grid-cols-4'>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='1'>1</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='2'>2</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='3'>3</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-yellow-500 text-white border hover:bg-yellow-600 cursor-pointer' data-key='+'>+</span>
          </div>
          <div className='grid grid-cols-4'>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 col-span-2 border rounded-bl-xl hover:bg-purple-200 cursor-pointer' data-key='0'>0</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-purple-100 border hover:bg-purple-200 cursor-pointer' data-key='.'>.</span>
            <span className='grid justify-center py-4 text-2xl font-medium bg-yellow-500 text-white border rounded-br-xl hover:bg-yellow-600 cursor-pointer' data-key='equal'>=</span>
          </div>
        </div>
      </div>
    </div>
  )
}
