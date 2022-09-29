import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

function ContactMe({}: Props) {

  const {
        register, 
        handleSubmit, 
    } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 pt-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-8">
            <h4 className="text-2xl font-semibold text-center">
                if you need, {" "}
                <span className="decoration-[#F7AB0A]/50 underline"> hit me up! </span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">+11234566778</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">tetx@text.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">123 developer lane</p>
                </div>
            </div>

            <form 
                className="flex flex-col space-y-2 mx-auto w-[350px] md:w-[454px]" 
                onSubmit={handleSubmit(onSubmit)}
            >

                <div className="flex space-x-2">
                    <input {...register('name')} type="text" placeholder="Name" className="contactInput w-[50%]" />
                    <input {...register('email')} type="email" placeholder="Email" className="contactInput w-[50%]" />
                </div>

                <input {...register('subject')} type="text" placeholder="Subject" className="contactInput" />

                <textarea {...register('message')} placeholder="Message" className="contactInput" />

                <button className="bg-[#F7AB0A] py-5 px-1 rounded-md text-black font-bold text-lg">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe