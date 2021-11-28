import Head from 'next/head'
import Link from 'next/link';
const Register = function(){
    return(
        <div>
           <Head>
               <title>
                    Register Page
               </title>
           </Head>
            <form className="mx-auto my-4" style={{maxWidth: '500px'}}>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" />
                </div>

                <button type="submit" className="btn btn-dark w-100">Register Now</button>

                <p className="my-2"> Already have an account?
                    <Link href="/signin">                    
                        <a style={{color:'crimson'}}>Login Now</a>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register;