import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
   <div >
   <div className="flex h-screen items-center justify-center">
    <div className="w-[400px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").closest()}
      >✕</Link>
    <h3 className="font-bold text-center">Contact Us</h3>
    <div className=" mt-4 space-y-4">
   <span>Name</span>
   <br/>
  <input 
  type="text" 
  className="w-80 px-3 py-1 border rounded-md outline-none" 
  placeholder="Enter Username" {...register("text", { required: true })} 
  />
  <br/>
  {errors.text && <span className="text-sm text-red-500">This field is required</span>}

</div>
    <div className=" mt-4 space-y-4">
   <span>Email</span>
   <br/>
  <input 
  type="email" 
  className="w-80 px-3 py-1 border rounded-md outline-none" 
  placeholder="Enter email" {...register("email", { required: true })} 
  />
  <br/>
  {errors.email && <span className="text-sm text-red-500">This field is required</span>}

</div>
  <div className=" mt-4 space-y-4">
  <span>Message</span>
   <br/>
  <input
   type="text"
   className="w-80 px-9 py-7 border rounded-md outline-none" 
   placeholder="Type here..." {...register("text", { required: true })} 
   />
   <br/>
   {errors.text && <span className="text-sm text-red-500">This field is required</span>}

    </div>
    <div className=" flex justify-around mt-4">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
    </div>
    </form>
  </div>
  </div>
</div>
   </div>
    </>
  )
}

export default Contact