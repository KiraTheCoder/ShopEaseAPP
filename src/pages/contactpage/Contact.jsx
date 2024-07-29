
import { Formik, Form } from 'formik';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TextInput,  Button, Textarea } from '@/components/form';
import {sendMessageForm } from "@/services/lib/YupFormikValidator";

function Contact() {
   function sendMessage(values, actions) {
    alert("Send Message Successfully ...!", values)
    actions.resetForm();
   }


    return (
        <div className=' md:w-[90vw] lg:w-[80vw] m-auto my-[4rem]  md:flex md:justify-between '>
            <div className='w-[15rem] sm:w-[100%] md:w-[15rem] sm:text-center md:text-start font-Poppins'>
            {/* <div className='w-[15rem] sm:w-[100%] md:w-[15rem] font-Poppins bg-teal-500'> */}
                <div className='py-4'>
                    <div className='flex items-center gap-4 my-2'><div className='w-7 h-7 bg-[#db4444] rounded-[50%] flex justify-center items-center' ><FaPhoneAlt className='text-sm text-white' /></div> <span className='text-sm font-four '>call to us</span></div>
                    <p className='text-[14px] leading-[1.7rem]'>we are available 24/7, 7 days a week.</p>
                    <p className='text-[14px] leading-[1.7rem]'>Phone: +8801611112222</p>
                </div>
                <hr className="border-gray-400 border-[1.5px]" />
                <div>
                    <div className='flex items-center gap-4 my-4 '> <div className='w-7 h-7 bg-[#db4444] rounded-[50%] flex justify-center items-center' ><MdOutlineEmail className='text-base text-white' /></div> <span className='text-sm font-four '>write to us</span></div>
                    <p className='text-[14px] my-2 '>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='text-[14px] leading-[1.7rem]'>Emails: customer@exclusive.com</p>
                    <p className='text-[14px] leading-[1.7rem]'>Emails: support@exclusive.com</p>
                </div>
            </div>
            <div className='w-[50vw]  '>
                <Formik
                    initialValues={{ ...sendMessageForm.initialVaues }}
                    validationSchema={sendMessageForm.validationSchema}
                    onSubmit={sendMessage} >

                    {(values) => (
                        <Form>
                            <div className=' lg:flex lg:justify-between gap-4'>
                                <TextInput style=" sm-w[100%] border-none bg-gray-200 px-1"  name="name" type="input" />
                                <TextInput style=" sm-w[100%] border-none bg-gray-200 px-1"  name="email" type="input" />
                                <TextInput style=" sm-w[100%] border-none bg-gray-200 px-1" type="text"  name="phone" />
                            </div>
                            <Textarea type="textarea" rows="4" cols="50"  name="textarea" style="bg-gray-200 px-1 " />
                            <div className='w-full flex justify-end items-center gap-8'> cancel <Button type="submit" name="Send message" style="w-[11.5rem] my-0 mb-2" /></div>
                        </Form>
                    )}
                </ Formik>
            </div>

        </div>
    )
}

export default Contact