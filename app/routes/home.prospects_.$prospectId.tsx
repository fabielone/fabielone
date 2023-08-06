import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Label, TextInput, Button, Select, Textarea } from "flowbite-react";
import { useRef, useEffect, useState } from "react";
import InnerOutline from "~/components/inneroutline";
import { useUser } from "~/utils";
import { loader } from "./healthcheck";
import { action } from "./home.prospects";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";






export default function HomeProspectsProspectId() {

        const data = useLoaderData<typeof loader>();
        const user = useUser();
    
        const actionData = useActionData<typeof action>();
        const titleRef = useRef<HTMLInputElement>(null);
        const bodyRef = useRef<HTMLInputElement>(null);

        const [startDate, setStartDate] = useState<Date | null>(
                setHours(setMinutes(new Date(), 30), 16)
              );
    
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>

      </Button>
      <Button type="submit" className="bg-lime-500" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

      </Button>
      </div>
      </div>
      <p>ultima llamada: </p>
      <p># de llamadas:</p>
      {/* agendar llamada despues  */}
      <div className="flex space-x-4">
       
      
       <div className=" mb-2 flex flex-col">
       <Label
           htmlFor="agendarllamada"
           value="agendar llamada:"
         />
         <DatePicker
         name="agendarllamada"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
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
          value="Estado"
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

      </Button>
      <Button type="submit" className="bg-lime-500" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
</svg>

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
       
     
       <div className=" mb-2 flex flex-col">
       <Label
           htmlFor="telefono"
           value="fecha de presupuesto:"
         />
           <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
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