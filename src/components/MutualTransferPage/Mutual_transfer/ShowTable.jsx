import React from 'react'
import {useState} from 'react'
const tableData = [
    {
      id: "1",
      name: "Jone Doe",
      date: "06/06/23",
      mobile_number: "+1234567890",
      aideoaId: "#123456",
      from:"bccl",
      to:"ccl",
      action: {
        active: "#1234",
      },
    },
  ];
const ShowTable = () => {
    const [search, setSearch] = useState("");
  return (
    <div className='m-5 mx-12'>
        <div className='overflow-y-scroll'>
          <table className=" w-full  ">
            <thead>
            <tr className="  ">
              <th className=" items-center min-w-1 rounded-tl-2xl rounded-bl-2xl bg-purple-400 p-5 ">
                <p className=" size-6 " />
              </th>
              <th className="  p-1 text-white  bg-purple-400  ">
                <p>No.</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Date</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Name</p>
              </th>
              
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Mobile No.</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Aideoa ID</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>From</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>To</p>
              </th>
              
              <th className=" p-1 text-white rounded-tr-2xl w-16 rounded-br-2xl bg-purple-400  ">
                <p>Action</p>
              </th>
            </tr>
            </thead>
  
            {tableData.map((data, index) => (
              <tbody>
                <tr className="border p-1 text-center   border-gray-300">
                <td className="text-center">
                  <input
                    className=" size-6 "
                    type="radio"
                    name="user-info"
                    id="user-info"
                  />
                </td>
  
                <td className="border p-1 text-center   border-gray-300">
                  <p>{index + 1} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.date} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.name}</p>
                </td>
                
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.mobile_number}</p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.aideoaId}</p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.from}</p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.to}</p>
                </td>
               
                <td className=" p-5 text-center flex gap-x-5 ">
                  <button className="border bg-purple-500 text-white p-3 rounded-lg">Allow</button>
  
                </td>
              </tr>
              </tbody>
            ))}
          </table>
        </div>
    </div>
  )
}

export default ShowTable