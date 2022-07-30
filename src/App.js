import {React,useState, useEffect, useRef} from 'react';
import { useForm } from 'react-hook-form';
import './App.scss'

export default function App() {
  console.log("render")
 const [text,setText] = useState('')
 const [color,setcolor] = useState(false)

 const handelChange = ()=>{
  setTimeout(()=>{
    setText("react18")
    setcolor(true)
  },1000)
 }

 return (
   <div className="wrapper">
     <section className="wrapper__section1">
      <h1>npm install react@18 react-dom@18</h1>
     </section>
     <section className="wrapper__section2">
      <div className="wrapper__section2-left">
        <h2>React-17</h2>
       <code>  
              import React from 'react';<br/>
              import ReactDOM from 'react-dom';<br/>
              import './scss/app.scss';<br/>
              import App from './App';<br/>



              ReactDOM.render(<br/>
                {/* <React.StrictMode><br/>

                      <App/><br/>
              
                </React.StrictMode>, */}<br/>
                document.getElementById('root')<br/>
              );
       </code>
      </div>
      <div className="wrapper__section2-rigth">
      <h2>React-18</h2>
      <code>  
              import React from 'react';
              import ReactDOM from 'react-dom';
              import './scss/app.scss';
              import App from './App';



              ReactDOM.render(
                {/* <React.StrictMode>

                      <App/>
              
                </React.StrictMode>, */}
                document.getElementById('root')
              );
       </code>
      </div>
     </section>
     <section className="wrapper__section3">
      <h2>1 update Batching</h2>
      <div className="wrapper__section3-top">
        <button onClick={handelChange}>React17-sinchron</button>
        <span className={color ? "color" : null}>{`change-${text}`}</span>
      </div>
      <div className="wrapper__section3-bottom"></div>
     </section>
     <section className="wrapper__section4">
      <h2>Suspense</h2>
     </section>
     <section className="wrapper__section5"></section>
   </div>
  )
}































// import {React,useState, useEffect, useRef} from 'react'
// import './App.scss'

// export default function App() {


//     const [card, setCard] = useState();
//     const inputCard = useRef();
  
//     const handleChange = () => {
//       const cardValue = inputCard.current.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
//       inputCard.current.value = !cardValue[2]
//         ? cardValue[1]
//         : `${cardValue[1]} ${cardValue[2]}${`${
//             cardValue[3] ? ` ${cardValue[3]}` : ''
//           }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
//       const numbers = inputCard.current.value.replace(/(\D)/g, '');
//       setCard(numbers);
//     };
  


//  return (
//    <div className="wrapper">
//       <form className='form'>
//           <div className="form__input1">
//           <input type="text" ref={inputCard} onChange={handleChange} />
//             {/* <input type="number" /> */}
//             {/* <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"></input> */}
//           </div>
//           <div className="form__input2">
//             <input type="number" />
//           </div>
//           <button type='submit'>SEND</button>
//       </form>
//    </div>
//   )
// }

