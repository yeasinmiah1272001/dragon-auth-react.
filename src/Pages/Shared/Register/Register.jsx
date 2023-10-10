import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
;

const Register = () => {
       const {createUser} = useContext(AuthContext);


        const handleRegister = (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const Password = e.target.password.value;
          const name = e.target.name.value
          console.log(email, Password, name);
          console.log(createUser)


       //    create user
       createUser(email, Password)

       .then(Result =>{
              console.log(Result.user)
       })
       .catch(error=>{
              console.error(error)
       })



        };



       return (
         <div>
           <Navbar></Navbar>
           <h1 className="text-center text-3xl mt-6 font-bold">
             Register your account
           </h1>

           <div className="hero min-h-screen bg-base-200">
             <div className="hero-content flex-col ">
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <form onSubmit={handleRegister} className="card-body w-full">
                   <div className="form-control ">
                     <label className="label">
                       <span className="label-text">Your Name</span>
                     </label>
                     <input
                       type="text"
                       placeholder="Your name"
                       name="name"
                       className="input input-bordered"
                       required
                     />
                   </div>
                   <div className="form-control ">
                     <label className="label">
                       <span className="label-text">Photo url</span>
                     </label>
                     <input
                       type="text"
                       placeholder="photo url"
                       className="input input-bordered"
                       required
                     />
                   </div>
                   <div className="form-control ">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input
                       type="email"
                       placeholder="email"
                       name='email'
                       className="input input-bordered"
                       required
                     />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Password</span>
                     </label>
                     <input
                       type="password"
                       placeholder="password"
                       name='password'
                       className="input input-bordered"
                       required
                     />
                     <label className="label">
                       <a href="#" className="label-text-alt link link-hover">
                         Forgot password?
                       </a>
                     </label>
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                   </div>
                   <p>
                     Already Have An Account ?{" "}
                     <Link className="text-red-500" to="/login">
                       Please Login
                     </Link>
                   </p>
                 </form>
               </div>
             </div>
           </div>
         </div>
       );
};

export default Register;