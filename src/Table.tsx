import React from "react";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}
interface TableProps {
  user: User[];
}

const Table = ({ user }: TableProps) => {
  return (
    <main>
     <section className="md:block hidden">
     <table className="w-full text-white mt-5 table-auto">
        <thead className="border-b-2">
          <tr>
            <th className="p-4 text-left" >ID</th>
            <th className="p-4 text-left" >First Name</th>
            <th className="p-4 text-left" >Last Name</th>
            <th className="p-4 text-left" >Email</th>
            <th className="p-4 text-left" >Gender</th>
            <th className="p-4 text-left" >IP Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item: User, index: number) => {
            return (
              <tr key={index}>
                <td className="p-4" >{item.id}</td>
                <td className="p-4" >{item.first_name}</td>
                <td className="p-4" >{item.last_name}</td>
                <td className="p-4" >{item.email}</td>
                <td className="p-4" >{item.gender}</td>
                <td className="p-2" >{item.ip_address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     </section>
     <section className="md:hidden block">
      {
        user.map((item: User, index: number) => {
          return (
            <div key={index} className=" m-10 border-2 border-gray-400 rounded-lg  p-4 mb-4 ">
              <p className="text-lg">ID: {item.id}</p>
              <p className="text-lg">First Name: {item.first_name}</p>
              <p className="text-lg">Last Name: {item.last_name}</p>
              <p className="text-lg">Email: {item.email}</p>
              <p className="text-lg">IP Address: {item.ip_address}</p>
            </div>
          )})
      }
     </section>
    </main>
  );
};

export default Table;
