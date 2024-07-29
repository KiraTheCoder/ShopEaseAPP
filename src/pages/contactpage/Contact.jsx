import { Formik, Form } from 'formik';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TextInput, Textarea, Button } from '@/components/form';
import {sendMessageForm } from "@/services/lib/YupFormikValidator";

function Contact() {
   function sendMessage(values, actions) {
    alert("Send Message Successfully ...!", values)
    actions.resetForm();
   }


    return (
        <div className='w-[80vw] m-auto bg-green-500'>
            <div className='w-[15rem]  font-Poppins'>
                <div className='py-4'>
                    <div className='flex items-center gap-4 my-2'><div className='w-7 h-7 bg-[#db4444] rounded-[50%] flex justify-center items-center' ><FaPhoneAlt className='text-sm text-white' /></div> <span className='text-sm font-four '>call to us</span></div>
                    <p className='text-[14px] leading-[1.7rem]'>we are available 24/7, 7 days a week.</p>
                    <p className='text-[14px] leading-[1.7rem]'>Phone: +8801611112222</p>
                </div>
                <hr />
                <div>
                    <div className='flex items-center gap-4 my-4 '> <div className='w-7 h-7 bg-[#db4444] rounded-[50%] flex justify-center items-center' ><MdOutlineEmail className='text-base text-white' /></div> <span className='text-sm font-four '>write to us</span></div>
                    <p className='text-[14px] my-2 '>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='text-[14px] leading-[1.7rem]'>Emails: customer@exclusive.com</p>
                    <p className='text-[14px] leading-[1.7rem]'>Emails: support@exclusive.com</p>
                </div>
            </div>
            <div>
                <Formik
                    initialValues={{ ...sendMessageForm.initialVaues }}
                    validationSchema={sendMessageForm.validationSchema}
                    onSubmit={sendMessage} >

                    {(values) => (
                        <From>
                            <div>
                                <TextInput label="Username" name="name" type="input" />
                                <TextInput label="Email" name="email" type="input" />
                                <TextInput type="text" label="Phone" name="phone" />
                            </div>
                            <Textarea type="textarea" label="Message" name="textarea" />
                            <div className='w-full flex justify-end'><Button type="submit" name="Send OTP" style="w-[5.5rem] my-0 mb-2" /></div>
                        </From>
                    )}
                </ Formik>
            </div>

        </div>
    )
}

export default Contact