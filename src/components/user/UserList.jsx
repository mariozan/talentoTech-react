
export default function UserList(){

    return (
        <div className="flex justify-center py-8 px-10">
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2 bg-slate-500 text-white">Name</th>
                    <th className="px-4 py-2 bg-slate-500 text-white">LastName</th>
                    <th className="px-4 py-2 bg-slate-500 text-white">Email</th>
                    <th className="px-4 py-2 bg-slate-500 text-white">Idetification</th>
                    <th className="px-4 py-2 bg-slate-500 text-white">Avatar</th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                <tr>
                    <td className="border px-4 py-2">Juan</td>
                    <td className="border px-4 py-2">Perez</td>
                    <td className="border px-4 py-2">juan@correo.com</td>
                    <td className="border px-4 py-2">124545</td>
                    <td className="border px-4 py-2">
                        <img className="size-40 transition-transform duration-300 transform hover:scale-110"
                            src="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/jxn3zttbkrvxudzifk6b"/></td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Angela</td>
                    <td className="border px-4 py-2">Cardona</td>
                    <td className="border px-4 py-2">angela@correo.com</td>
                    <td className="border px-4 py-2">454545455</td>
                    <td className="border px-4 py-2"><img className="size-40 transition-transform duration-300 transform hover:scale-110" 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amparo_Grisales_2023_01.jpg"/></td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}