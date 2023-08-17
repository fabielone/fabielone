import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Label, TextInput, Button, Select, Textarea } from "flowbite-react";
import { useRef, useEffect, useState, SetStateAction } from "react";
import InnerOutline from "~/components/inneroutline";
import { useUser } from "~/utils";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { ActionArgs, LoaderArgs, json, redirect } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { getProspect, incrementProspectCallCount, updateProspect } from "~/models/prospect.server";
import invariant from "tiny-invariant";


export const loader = async ({ params,request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const id = params.prospectId;
  invariant(id, "prospectId not found");
  const note = await getProspect({ id: id });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ note });
};

export const action = async ({ request,params }: ActionArgs) => {
  const userId = await requireUserId(request);
 
  invariant(params.prospectId, "prospectId not found");
  const formData = await request.formData();
  switch (formData.get("action")) {
    case "registrarllamada": {
      // increment call attempts and update last call date
      const updateCalls = await incrementProspectCallCount({ id: params.prospectId });
      return redirect(`/home/prospects/${params.prospectId}`);
    }
    case "guardar": {
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const lada = formData.get("lada");
      const phoneNumber = formData.get("phoneNumber");
      const status = formData.get("estado");
      const callLaterDate = formData.get("agendarllamada");
      const appointmentDate = formData.get("fechaPresupuesto");
      const address = formData.get("direccion");
      const indicaciones = formData.get("indicaciones");
      const notas_p = formData.get("notas_p");
    
      if (typeof firstName !== "string" || firstName.length === 0) {
        return json(
          { errors: { body: null, title: "Title is required" } },
          { status: 400 }
        );
      }
    
      if (typeof lastName !== "string" || lastName.length === 0) {
        return json(
          { errors: { body: "Body is required", title: null } },
          { status: 400 }
        );
      }
    
      if (typeof lada !== "string" || lada.length === 0) {
          return json(
            { errors: { body: "Body is required", title: null } },
            { status: 400 }
          );
        }
    
        if (typeof phoneNumber !== "string" || phoneNumber.length === 0) {
          return json(
            { errors: { body: "Body is required", title: null } },
            { status: 400 }
          );
        }
    
        if (typeof status !== "string" || status.length === 0) {
          return json(
            { errors: { body: "Status is required", title: null } },
            { status: 400 }
          );
        }
    
        // parse string to date 
        const callLaterDateParsed =  callLaterDate?  new Date(callLaterDate as string):null;
        const appointmentDateParsed = appointmentDate? new Date(appointmentDate as string):null;
    
        // parse to string or null address , indicaciones notes_p
    
        const addressParsed = address as string;
        const indicacionesParsed = indicaciones as string;
        const notas_pParsed = notas_p as string;
        const prospect = await updateProspect({ id:params.prospectId, firstName: firstName, lastName: lastName, lada: lada, phoneNumber: phoneNumber,status: status, callLaterDate: callLaterDateParsed, appointmentDate: appointmentDateParsed, address: addressParsed, indicaciones: indicacionesParsed,notas_p: notas_pParsed});
        return redirect(`/home/prospects/`);
    }
    default: {
      throw new Error("Unknown action");
    }
  }
  
};



export default function HomeProspectsProspectId() {

        const data = useLoaderData<typeof loader>();
        const user = useUser();
    
        const actionData = useActionData<typeof action>();
        const titleRef = useRef<HTMLInputElement>(null);
        const bodyRef = useRef<HTMLInputElement>(null);
        const dbTimeStamp = data.note?.callLaterDate || null;
        const dbDate = dbTimeStamp? new Date(dbTimeStamp) : null;

        const dbAppointmentTimeStamp = data.note?.appointmentDate || null;
        const dbAppointmentDate = dbAppointmentTimeStamp? new Date(dbAppointmentTimeStamp) : null;

        const [appointmentDate, setAppointmentDate] = useState<Date | null>(
          dbAppointmentDate ? setHours(setMinutes(dbAppointmentDate, dbAppointmentDate.getMinutes()), dbAppointmentDate.getHours() ):null );

   
        const [startDate, setStartDate] = useState<Date | null>(
               dbDate ? setHours(setMinutes(dbDate, dbDate.getMinutes()), dbDate.getHours() ):null );
    
        useEffect(() => {
        if (actionData?.errors?.title) {
          titleRef.current?.focus();
        } else if (actionData?.errors?.body) {
          bodyRef.current?.focus();
        }
      }, [actionData]);

        //google maps 
        const city = 'Ensenada, Baja California';
        const [location, setLocation] = useState('');

        const handleLocationChange = (event: { target: { value: SetStateAction<string>; }; }) => {
                setLocation(event.target.value);
        };

        const handleSearchClick = () => {
                if (city && location) {
                const encodedCity = encodeURIComponent(city);
                const encodedLocation = encodeURIComponent(location);
                window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}+${encodedCity}`, '_blank');
                }
        };

        const handleClearClick = () => {
                setStartDate(null);
        };

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
            htmlFor="firstName"
            value="Nombre"
          />
           <TextInput
            id="firstName"
            placeholder=""
            defaultValue={data.note?.firstName}
            type="text"
            ref={titleRef}
            name="firstName"
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
            htmlFor="lastName"
            value="Apellido"
          />
           <TextInput
            id="lastName"
            placeholder=""
            defaultValue={data.note?.lastName}
            type="text"
            ref={bodyRef}
            name="lastName"
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
                defaultValue={data.note?.lada ? data.note?.lada : "+52"}
                className="w-12"
            />
          
       
        </div>
        <div className=" mb-2 block">
        <Label
            htmlFor="phoneNumber"
            value="Numero"
          />
           <TextInput
                id="phoneNumber"
                required
                type="text"
                name="phoneNumber"
                defaultValue={data.note?.phoneNumber}
                className="w-30"
                
            />
        </div>
        <div className=" flex mb-2 space-x-4 self-end">
        <a href={"tel:"+data.note.lada+data.note.phoneNumber}>
        <Button >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
        </Button>
        </a>
        <a target="blank" rel="noopener noreferrer" href={'https://wa.me/'+data.note.lada+data.note.phoneNumber}>
      <Button  className="bg-lime-500" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

      </Button>
      </a>
      </div>
      </div>
      <div className="flex" ><Button size="sm"  name="action" type="submit" value="registrarllamada">Registrar Llamada</Button></div>
      
      <p>ultima llamada: {data.note.lastCallDate !== null
              ? new Date(data.note.lastCallDate).toLocaleString("en-US", {
                  
                  day: "2-digit",
                  month: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""} </p>
      <p># de llamadas: {data.note?.callAttempts} </p>
      {/* agendar llamada despues  */}
      <div className="flex space-x-4">
       
      
       <div className=" mb-2 flex flex-row"> 
       <Label
           htmlFor="agendarllamada"
           value="agendar llamada:"
         />
         <DatePicker
          id="agendarllamada"
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
     <Button onClick={handleClearClick}>Clear</Button>
       </div>
     
     </div>
      {/* estado */}
      <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="estado"
          value="Estado"
        />
      </div>
      <Select
        id="estado"
        name="estado"
        required
        defaultValue={data.note?.status}
      >
        <option value="nuevo" >
          Nuevo
        </option>
        <option value="no_interesado">
          No Interesado
        </option>
        <option value="llamada_agendada">
          LLamada Agendada
        </option>
        <option value="agendado_pre">
          Agendado
        </option>
        <option value="no_contesta" >
          No Contesta
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
           <Textarea
                id="direccion"
                onChange={handleLocationChange}
                required
                defaultValue={data.note?.address||" "}
                name="direccion"
            />
        </div>
        <div className=" flex mb-2 space-x-4 self-end">
        <a href="" >
        <Button disabled>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </Button>
        </a>
        <a  >
        <Button className="bg-lime-500" onClick={handleSearchClick} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
        </Button>
        </a>
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
                id="indicaciones"
                required
                name="indicaciones"
                defaultValue={data.note?.indicaciones||" "}
                className=""
            />
          
       
        </div>
       
  
      </div>

      {/* mapa */}

     

      {/* fecha de presupuesto */}

     

      <div className="flex space-x-4">
       
     
       <div className=" mb-2 flex flex-col">
       <Label
           htmlFor="fechaPresupuesto"
           value="fecha de presupuesto:"
         />
           <DatePicker
           id="fechaPresupuesto"
           name="fechaPresupuesto"
           selected={appointmentDate}
           onChange={(date) => setAppointmentDate(date)}
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
            htmlFor="notas_p"
            value="Notas Presupuesto"
          />
           <Textarea
                id="notas_p"
                required
                defaultValue={data.note?.notas_p||" "}
                name="notas_p"
            />
        </div>
      

      </div>

      <div className="flex text-right space-x-4">
      <Button type="submit" name="action" value="guardar">
       Guardar
      </Button>
    
      </div>
      </Form>
            
            </InnerOutline>
    )
}