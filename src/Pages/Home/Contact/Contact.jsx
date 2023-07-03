// import email1 from '../../../../public/email1.json'
// import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import {  toast } from 'react-toastify';
import Email from "../../../../src/Component/Email"
import Header from '../../../Component/Header';
import { useContext } from 'react';
import { ThemContext } from '../../../Layout/Main';
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
        <div className="pt-10" id="contact">
          <Header title={'Contact  Me'}/>
          <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-full">
    <>
        <Canvas className="">
            <Stage environment="city" intensity={1}>

            <Email/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        </>
    </div>
    <div className="card flex-shrink-0 w-full max-w-xl  ">
    <form ref={form} onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className={dark?' input bg-black border-[#1e9db3]':'text-black input border-[#1e9db3]'}  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className={dark?' input bg-black border-[#1e9db3]':'text-black input border-[#1e9db3]'} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <textarea type="text" placeholder="Wright your message" name='message'  className={dark?' input bg-black border-[#1e9db3]':'text-black input border-[#1e9db3]'} required/>
        </div>
      
        <div className="form-control mt-6">
          <button type='submit' className="btn bg-[#1e9db3]">Send</button>
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