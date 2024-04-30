import { Link } from "react-router-dom";

const Login = () => {
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className='h-full w-full p-6 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
			<h1 className='text-3xl font-semibold text-center text-gray-300'>
				Login <span className="text-blue-500">ChatApp</span>
			</h1>

            <form>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-100">Username</span>
                        </label>
                    <input type= 'text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                </div>

                <div>
					<label className='label'>
						<span className='text-base label-text text-gray-100'>Password</span>
					</label>
					<input type='password'placeholder='Enter Password'className='w-full input input-bordered h-10'/>
				</div>

                <Link to='/signup' className='text-sm text-gray-100  hover:underline hover:text-amber-400 mt-2 inline-block'>
						{"Don't"} have an account?
				</Link>

                <div>
					<button className='btn btn-block btn-sm mt-2'>Login</button>
				</div>

            </form>
        </div>        
        
    </div>
};

export default Login;



// STARTER CODE FOR THE FILE
// RAFCE
// const Login = () => {
//     return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className='h-full w-full p-6 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
// 			<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 				Login <span className="text-blue-500">ChatApp</span>
// 			</h1>

//             <form>

//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text text-gray-100">Username</span>
//                         </label>
//                     <input type= 'text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//                 </div>

//                 <div>
// 					<label className='label'>
// 						<span className='text-base label-text text-gray-100'>Password</span>
// 					</label>
// 					<input type='password'placeholder='Enter Password'className='w-full input input-bordered h-10'/>
// 				</div>

//                 <a to='/signup' className='text-sm text-gray-100  hover:underline hover:text-amber-400 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 				</a>

//                 <div>
// 					<button className='btn btn-block btn-sm mt-2'>Login</button>
// 				</div>

//             </form>
//         </div>        
        
//     </div>
// };

// export default Login;