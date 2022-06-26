import {React,useState, useEffect, useRef} from 'react';
import { useForm } from 'react-hook-form';
import './App.scss'
import { handleChange } from './helpers/mask/mask';
export default function App() {

  const {
    register,
    formState: {
        errors,
        isValid
    },
    handleSubmit,
    reset
} = useForm({
    mode: 'onBlur'
})
 


const sub = (data) =>{
 console.log(data)
}
 return (
   <div className="wrapper">
      <form className='form' onSubmit={handleSubmit(sub)}>
          <div className="form__input1">
          <input type="text"   onInput={(e) => {handleChange(e,2)}} {...register("card", {
             required: true,
              minLength:19
         })} />
          </div>
          <div className="form__input1">
          {/* <MaskedInput
            id="expiration"
            type="tel"
            placeholder="MM/YY"
            pattern="(1[0-2]|0[1-9])\/(1[5-9]|2\d)"
            data-valid-example="05/18"
            label="Credit Card Expiration"
            //  />; */}
             {/* https://github.com/estelle/input-masking */}
          </div>
          <button type='submit'>SEND</button>
      </form>
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

