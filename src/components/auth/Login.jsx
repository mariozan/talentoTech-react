export default function Login(){

    return (
        <div className="max-w-lg w-full mx-auto px-5 py-5">
            <form action="" className=" shadow-md rounded pt-6 pb-10 mb-4 px-10">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                    <input type="email" 
                            required 
                            name="email" 
                            placeholder="Email" 
                            className="shadow appearance-none border rounded w-full focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 
                                    disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
                    <input type="password" 
                            required 
                            minLength="3"
                            name="password" 
                            placeholder="Password" 
                            className="shadow appearance-none border rounded w-full focus:shadow-outline 
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4">Iniciar Sesion</button>
                </div>
            </form>
        </div>
    );
}