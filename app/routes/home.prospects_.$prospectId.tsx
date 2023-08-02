import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Label, TextInput, Button, Select, Textarea } from "flowbite-react";
import { useRef, useEffect } from "react";
import InnerOutline from "~/components/inneroutline";
import { useUser } from "~/utils";
import { loader } from "./healthcheck";
import { action } from "./home.prospects";





export default function HomeProspectsProspectId() {

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
            <InnerOutline>
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

         {/* Nombre y Apellido */}
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
                           

      {/* Numero */}
      <div className="flex space-x-4">
       
        <div className=" mb-2 block">
        <Label
            htmlFor="lada"
            value="Lada"
            
          />
           <TextInput
                id="lada"
                required
                type="text"
                name="lada"
                defaultValue="+52"
                className="w-12"
            />
          
       
        </div>
        <div className=" mb-2 block">
        <Label
            htmlFor="telefono"
            value="Numero"
          />
           <TextInput
                id="telefono"
                required
                type="text"
                name="telefono"
            />
        </div>
        <div className=" flex mb-2 space-x-4 self-end">
        <Button type="submit">
       LLamar
      </Button>
      <Button type="submit" className="bg-lime-500" >
       whatsapp
      </Button>
      </div>
      </div>
      <p>ultima llamada: </p>
      <p># de llamadas</p>
      {/* agendar llamada despues  */}
      <div className="flex space-x-4">
       
      
       <div className=" mb-2 block">
       <Label
           htmlFor="telefono"
           value="agendar llamada despues"
         />
          <TextInput
               id="telefono"
               required
               type="text"
               name="telefono"
           />
       </div>
       <div className=" flex mb-2 space-x-4 self-end">
       <Button type="submit">
      LLamar
     </Button>
     <Button type="submit" className="bg-lime-500" >
      whatsapp
     </Button>
     </div>
     </div>
      {/* estado */}
      <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Select your country"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option>
          United States
        </option>
        <option>
          Canada
        </option>
        <option>
          France
        </option>
        <option>
          Germany
        </option>
      </Select>
    </div>
      {/* direccion */}
      <div className="flex space-x-4">
       
     
        <div className=" mb-2 block">
        <Label
            htmlFor="direccion"
            value="Direccion"
          />
           <TextInput
                id="direccion"
                required
                type="text"
                name="telefono"
            />
        </div>
        <div className=" flex mb-2 space-x-4 self-end">
        <Button type="submit">
       buscar
      </Button>
      <Button type="submit" className="bg-lime-500" >
       google maps
      </Button>
      </div>
      </div>
       {/* indicaciones */}
      <div className="flex space-x-4">
       
        <div className=" mb-2 block">
        <Label
            htmlFor="indicaciones"
            value="Indicaciones"
            
          />
           <Textarea
                id="lada"
                required
                name="indicaciones"

                className=""
            />
          
       
        </div>
       
  
      </div>

      {/* mapa */}

     

      {/* fecha de presupuesto */}
      <div className="flex space-x-4">
       
     
       <div className=" mb-2 block">
       <Label
           htmlFor="telefono"
           value="fecha de presupuesto"
         />
          <TextInput
               id="telefono"
               required
               type="text"
               name="telefono"
           />
       </div>
      
     </div>
        {/* notas */}

        <div className="flex space-x-4">
       
        
        <div className=" mb-2 block">
        <Label
            htmlFor="telefono"
            value="Notas Presupuesto"
          />
           <Textarea
                id="telefono"
                required
                
                name="telefono"
            />
        </div>
      

      </div>

      <div className="flex text-right space-x-4">
      <Button type="submit">
       Actualizar
      </Button>
      <Button type="submit" className="bg-red-500" >
       Eliminar
      </Button>
      </div>
                        </Form>
            
            </InnerOutline>
    )
}