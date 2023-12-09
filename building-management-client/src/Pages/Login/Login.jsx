
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import { Toaster,toast } from 'react-hot-toast';

const Login = () => {
    const { signIn } = useAuth()

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('bodda kam kore')
        const email = event.target.email.value
        const password = event.target.password.value

        signIn(email, password)
            .then(res => {
                toast.success('Successfully Signed Up!')
                console.log('Successfully signed up', res)
            })
            .catch(err => {
                toast.error("Failed to sign up")
                console.log('Failed to sign up', err)
            })
    }
    return (
        <div className='flex justify-center'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                </div>
                <form onSubmit={onSubmit} action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="text" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="**********" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="btn btn-active w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign In</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                            <Link to='/signUp'>

                                <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</a>.
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;