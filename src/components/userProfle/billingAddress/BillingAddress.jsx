import React from 'react'

function BillingAddress() {

  return (
    <>
                    <h3 className='uppercase font-DM font-bold text-lg text-[#db4444]'>My Addressbook</h3>
                    <div className='my-2'>
                        <div className="w-[30rem] flex gap-5 flex-wrap my-2 items-end">
                        {userAddress.map((value, index) => (
                             <div key={index} className="flex items-center gap-4">
                               <input
                                 type="radio"
                                 name="selectedAddress"
                                 id={`address-${index}`}
                                 value={value._id}
                                 checked={selectedAddress === value}
                                 onChange={() => setSelectedAddress(value)} 
                                 className="form-checkbox h-4 w-4 rounded"
                               />
                               <label htmlFor={`address-${index}`} className="w-[20rem] flex items-center flex-wrap gap-2 text-[14px] p-3 bg-slate-200 capitalize">
                                 <span className="font-semibold">Name:</span> {value.fullName}, 
                                 <span className="font-semibold">Street:</span> {value.streetName}, 
                                 <span className="font-semibold">Apartment/Floor:</span> {value.aprtmentOrFloor}, 
                                 <span className="font-semibold">Town/City:</span> {value.townOrCity}, 
                                 <span className="font-semibold">Mobile No.:</span> {value.PhoneNumber}
                               </label>
                               <div>
                                   <li className='list-none flex gap-10 flex-col text-[11px] text-[#db4444] underline cursor-pointer' >
                                            <FaRegEdit className="text-blue-400 text-xl" onClick={() => setAddId(value._id)} />
                                            <MdDeleteForever
                                                className='text-[#db4444] text-[1.5rem] cursor-pointer'
                                                onClick={() => deleteAdd(value._id)}
                                            />
                                   </li>
                               </div>
                             </div>
                           ))}
                        </div>
                        <p className="font-bold text-blue-500">
                            <Link to={"/useraccount/createaddress"}>New Address</Link>
                        </p>
                    </div>
                </>
  )
}

export default BillingAddress




