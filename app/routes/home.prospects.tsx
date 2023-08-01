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
                    #llamadas
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
                <td className="px-6 py-4">
                <div className="flex space-x-4">
                    <a href={ `tel:+52${note.phoneNumber}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg></div>
                    
                    </td>

                <td className="px-6 py-4 text-sm">
                 ultima : {note.lastCallDate} <br></br>
                 # llamadas : {note.callAttempts}
                </td>
                
                </tr>
              ))}
              </>
            
          )}
        </tbody>
    </table>
</div>
                    </div>
                </div>
               

                
         </div>
        


        </>
    );
}