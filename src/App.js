import {React,useState, useEffect, useRef} from 'react';
import { useForm } from 'react-hook-form';
import './App.scss'

export default function App() {

 return (
   <div className="wrapper">
  
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

