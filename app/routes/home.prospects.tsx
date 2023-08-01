import { Accordion, Button, Checkbox, Label, TextInput } from "flowbite-react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { getNoteListItems } from "~/models/note.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
};
export default function HomeProspects() {
    const data = useLoaderData<typeof loader>();
    const user = useUser();
    return (
        <>
         <div className="p-4 sm:ml-64">
                <div className="p-4 justify-center border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Agregar Prospecto
                        </Accordion.Title>
                        <Accordion.Content>
                        <form className="flex justify-center max-w-md flex-col gap-4">
      <div className="flex ">
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Nombre"
          />
           <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
        </div>
       
        <div className="mb-2 block mx-4">
          <Label
            htmlFor="email1"
            value="Apellido"
          />
           <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
         />
        </div>
       
      </div>
      <div className="flex ">
       
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Numero"
          />
           <TextInput
          id="password1"
          required
          type="password"
        />
       
        </div>
        
      </div>
      <Button type="submit">
       Agregar
      </Button>
      <div>
        
       
      </div>
   
      
                </form>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
             
                </div>
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                   
                    <div className="flex items-center justify-center  mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {data.noteListItems.length === 0 ? (
            <p className="p-4">No notes yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Fabiel Ramirez 
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
               
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
             
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
               
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                    </div>
                </div>
               

                
         </div>
        


        </>
    );
}