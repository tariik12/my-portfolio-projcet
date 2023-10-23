// import email1 from '../../../../public/email1.json'
// import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {  toast } from 'react-toastify';
import Header from '../../../Component/Header';
import { useContext } from 'react';
import { ThemContext } from '../../../Layout/Main';
import { ImWhatsapp } from 'react-icons/im';
import { CgCloseO } from 'react-icons/cg';
import { MdAttachEmail, MdOutlineContactPhone } from 'react-icons/md';
const Contact = () => {
  const dark = useContext(ThemContext);
    const form = useRef();
    const handleSubmit = event =>{
        event.preventDefault()
        emailjs.sendForm('service_b1dg8wb', 'template_3cc8dca', form.current, 'crrt3NuS4tVdHhHpZ')
        .then((result) => {
            console.log(result.text);
            toast.success("Your message send done");
        }, (error) => {
            console.log(error.text);
            toast.error(`${error.message}`)
        });
    

    }
 
    
    return (
        <div className="pt-10" id="contact" 
         >
          <Header title={'Contact with  Me'}/>
          <div className=" ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 md:px-20"  >
 
        <div className='flex flex-col items-center gap-4'>
        <button className="rounded-full" onClick={()=>window.my_modal_5.showModal()}><ImWhatsapp className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="WhatsAppNumber" /></button>
<dialog id="my_modal_5" className="modal modal-bottom md:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-thin text-center text-2xl ">WhatsApp Number</h3>
    <p className="py-4 text-center">+8801708774287</p>
    <div className="text-center">
      {/* if there is a button in form, it will close the modal */}
      <button className="rounded-full" ><CgCloseO className="   rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="close" /></button>
    </div>
  </form>
</dialog>
        <button className="rounded-full" onClick={()=>window.my_modal_6.showModal()}><MdOutlineContactPhone className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="WhatsAppNumber" /></button>
<dialog id="my_modal_6" className="modal modal-bottom md:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-thin text-center text-2xl ">Mobile Number</h3>
    <p className="py-2 text-center">+8801708774287</p>
    <p className="py-2 text-center">+8801611826146</p>
    <div className="text-center">
      <button className="rounded-full" ><CgCloseO className="   rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="close" /></button>
    </div>
  </form>
</dialog>
        <button className="rounded-full" onClick={()=>window.my_modal_7.showModal()}><MdAttachEmail className="  px-5 rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl me-8 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="WhatsAppNumber" /></button>
<dialog id="my_modal_7" className="modal modal-bottom md:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-thin text-center text-2xl ">Email</h3>
    <p className="py-4 text-center">tariikul12@gmail.com</p>
    <div className="text-center">
      {/* if there is a button in form, it will close the modal */}
      <button className="rounded-full" ><CgCloseO className="   rounded-full bg-gradient-to-t from-cyan-500  to-indigo-400   cursor-pointer text-7xl hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white" title="close" /></button>
    </div>
  </form>
</dialog>
       
        
    </div>
    <div className=" flex-shrink-0 w-full max-w-xl  " >
    <form ref={form} onSubmit={handleSubmit}>
      <div className="">
        <div className="form-control">
          <label className="label">
            <span  className={dark? 'label-text text-black border-in':'text-white label-text'} >Name</span>
          </label>
          <input type="text" placeholder="name" name='name'className='input border-indigo-400'   required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className={dark? 'label-text text-black':'text-white label-text'}>Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className='input border-indigo-400' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={dark? 'label-text text-black':'text-white label-text'}>Text</span>
          </label>
          <textarea type="text"  placeholder="Wright your message" name='message'  className='input border-indigo-400 ' required/>
        </div>
      
        <div className="form-control mt-6">
          <button type='submit' className="btn bg-gradient-to-t from-cyan-500  to-indigo-400 hover:bg-gradient-to-t hover:from-cyan-700  hover:to-indigo-700 text-white">Send</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;