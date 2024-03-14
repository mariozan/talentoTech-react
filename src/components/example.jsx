import { useState } from "react";

function Profile({user}) {  

    return (
      <>
        <h1>{user.name}</h1>
        <br />
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
            backgroundColor: 'black'
          }}
        />      
      </>
    );
}

export default function Example() {

    const saludar = () => {
      alert("hola")
    }
  
    const mostrarTexto = (e) => {
      console.log(e.target.value)
    }
  
    const keyUp = () => {
      console.log("Solo una tecla")
    }
  
    /** Cambiando el estado de las variables */
    const [count, setCount] = useState(0);
  
    const users = [{
      name: 'Elvis Presley',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/singer-elvis-presley-news-photo-1590531497.jpg',
      imageSize: 90,
    }, 
    {
      name: 'Brad Pitt',
      imageUrl: 'https://goldenglobes.com/wp-content/uploads/2023/10/brad-pitt_03_paramount-pictures.jpg',
      imageSize: 90,
    }, 
    {
      name: 'Madonna',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVATslgVY87n3lp3XHUlxF8Edc6jubIVkmbg&usqp=CAU',
      imageSize: 90,
    },
    {
      name: 'Zinedine Zidane',
      imageUrl: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--c477d5d0-4f24-486c-9984-5f07beef79fd/_330186270595.app.png?preferwebp=true&width=312',
      imageSize: 90,
    }];
  
    return (
      <div>
        {users.map(user => (
          <Profile key={user.name} user={user}/>
        ))}
        <br/>
        <button onClick={() => saludar()}>Enviar</button>    
        <input type="text" onChange={mostrarTexto} onKeyUp={keyUp} />  
        <br/>
        <button onClick={() => setCount(count+1)}>Sumar</button>
        <button onClick={() => setCount(count-1)}>Restar</button>
        <p> El contador va en: {count}</p>
      </div>
    )
  }