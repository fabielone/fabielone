import { Accordion, Button, Checkbox, Label, TextInput } from "flowbite-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useActionData, useLoaderData } from "@remix-run/react";

import { createNote, getNoteListItems } from "~/models/note.server";
import { createProspect ,getProspectListItems} from "~/models/prospect.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { useRef, useEffect } from "react";
import { get } from "http";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const noteListItems = await getProspectListItems();
  return json({ noteListItems });
};

export const action = async ({ request }: ActionArgs) => {
    const userId = await requireUserId(request);
  
    const formData = await request.formData();
    const title = formData.get("title");
    const body = formData.get("body");
    const telefono = formData.get("telefono");
  
    if (typeof title !== "string" || title.length === 0) {
      return json(
        { errors: { body: null, title: "Title is required" } },
        { status: 400 }
      );
    }
  
    if (typeof body !== "string" || body.length === 0) {
      return json(
        { errors: { body: "Body is required", title: null } },
        { status: 400 }
      );
    }

    if (typeof telefono !== "string" || body.length === 0) {
        return json(
          { errors: { body: "Body is required", title: null } },
          { status: 400 }
        );
      }
    
    const prospect = await createProspect({ firstName:title,lastName:body,phoneNumber:telefono , userId:userId});
  
    return redirect(`/home/prospects/`);
  };

export default function HomeProspects() {
    const data = useLoaderData<typeof loader>();
    const user = useUser();

    const actionData = useActionData<typeof action>();
    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    }
  }, [actionData]);


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
                        <Form
                            method="post"
                            style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            width: "100%",
                            }}
                        >
                             <div className="flex ">
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Nombre"
          />
           <TextInput
            id="nombre"
            placeholder=""
            type="text"
            ref={titleRef}
            name="title"
            aria-invalid={actionData?.errors?.title ? true : undefined}
            aria-errormessage={
            actionData?.errors?.title ? "title-error" : undefined
           }
            />
            {actionData?.errors?.title ? (
                                 <div className="pt-1 text-red-700" id="title-error">
                                {actionData.errors.title}
                                 </div>
                                 ) : null}
        </div>
       
        <div className="mb-2 block mx-4">
          <Label
            htmlFor="email1"
            value="Apellido"
          />
           <TextInput
            id="apellido"
            placeholder=""
            type="text"
            ref={bodyRef}
            name="body"
            aria-invalid={actionData?.errors?.body ? true : undefined}
            aria-errormessage={
              actionData?.errors?.body ? "body-error" : undefined
            }
         />
         {actionData?.errors?.body ? (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.body}
          </div>
        ) : null}
        </div>
       
      </div>
                           

      
      <div className="flex ">
       
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Numero"
          />
           <TextInput
          id="telefono"
          required
          type="text"
            name="telefono"
        />
       
        </div>
        
      </div>

      <div className="text-right">
      <Button type="submit">
       Agregar
      </Button>
      </div>
    </Form>
                        
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
                    Contactar
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
            <p className="p-4">No hay prospectos</p>
          ) : (
            <>
              {data.noteListItems.map((note,index) => (
                <tr className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b dark:bg-gray-900 dark:border-gray-700`}>
                <th key={note.id}
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <NavLink
                    
                    to={note.id}
                  >
                    {note.firstName} {note.lastName} 
                    <br></br>
                  </NavLink>
                </th>
                <td className="px-6 py-4">{note.phoneNumber }</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                </tr>
              ))}
              </>
            
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