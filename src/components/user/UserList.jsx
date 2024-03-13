
export default function UserList(){

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Idetification</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Juan</td>
                    <td>Perez</td>
                    <td>juan@correo.com</td>
                    <td>124545</td>
                    <td><img style={{
                        width: 50,
                        height: 50
                    }} 
                    src="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/jxn3zttbkrvxudzifk6b"/></td>
                </tr>
                <tr>
                    <td>Angela</td>
                    <td>Cardona</td>
                    <td>angela@correo.com</td>
                    <td>454545455</td>
                    <td><img style={{
                        width: 50,
                        height: 50
                    }} 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amparo_Grisales_2023_01.jpg"/></td>
                </tr>
            </tbody>
        </table>

    );
}