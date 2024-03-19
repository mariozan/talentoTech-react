import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../features/api/apiSlice';

export default function UserList(){

    /** Obtiene el estado de una variable con Redux */
    // const users = useSelector(state => state.users)
    const { data: users, isLoading, isError, error } = useGetUsersQuery();
    console.log(users)
    if (isLoading) return <p>Cargando usuarios...</p>;
    else if(isError) return (<div>Error: {error.message} </div>)
    
    return (
        <div className="flex justify-center py-8 px-10">
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-slate-500">
                    <th className="px-4 py-2 text-white">Name</th>
                    <th className="px-4 py-2 text-white">LastName</th>
                    <th className="px-4 py-2 text-white">Email</th>
                    <th className="px-4 py-2 text-white">Idetification</th>
                    <th className="px-4 py-2 text-white">Avatar</th>
                    <th className="px-4 py-2 text-white">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-gray-200 ">
                {users.map(user => (
                <tr key={user._id}>
                    <td className="border-y-2 px-4 py-2 border-indigo-600">{user.name}</td>
                    <td className="border-y-2 px-4 py-2 border-indigo-600">{user.lastname}</td>
                    <td className="border-y-2 px-4 py-2 border-indigo-600">{user.email}</td>
                    <td className="border-y-2 px-4 py-2 border-indigo-600">{user.id}</td>
                    <td className="border-y-2 px-4 py-2 border-indigo-600">
                        <img className="size-40 transition-transform duration-1000 transform hover:scale-110 max-w-none"
                            src={user.avatar}/></td>
                    <td className="border-y-2 px-4 py-2 border-indigo-600">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <Link to={`/user/${user._id}`} 
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border
                                             border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white 
                                             focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white
                                             dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">Edit</Link>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Delete
                        </button>
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}