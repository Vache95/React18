import {React,useState,lazy,Suspense,useEffect,useTransition,useDeferredValue} from 'react';
import './App.scss'
// import MyLazyComponent from './components/MyLazyComponent';
const MyLazyComponent = lazy(()=> import('./components/MyLazyComponent'))
export default function App() {
 console.log("render")

// * sinchron-------------------------------------------------------------------------------
 const [sinchrontext,setsinchronText] = useState('')
 const [sinchroncolor,setsinchroncolor] = useState(false)

// * asynchron------------------------------------------------------------------------------
 const [asynchrontext,setasynchronText] = useState('')
 const [asynchroncolor,setasynchroncolor] = useState(false)

// * lazy-----------------------------------------------------------------------------------
 const [openLazy,setopenLazy] = useState(false)

// * useTransition useDeferredValue---------------------------------------------------------
const [value,setValue] =useState('')
const [comment,setcomment] = useState([])
const [isPending,startTransition] = useTransition()

 const onChangeValue = (e) =>{
  // startTransition(()=>{
  //   setValue(e.target.value);
  // })
  setValue(e.target.value);
 }
const filterSearch = (entites,search) => entites.filter(item => item.title.includes(search))

// const values = useDeferredValue(filterSearch(comment,value))

  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    setcomment(json)
  })
 },[])

 // * sinchron function
 const sinchronBatching = () => {
  setsinchronText("react18")
  setsinchroncolor(true)
 }
// * asynchron function
 const acynchronBatching = () => {
         setTimeout(() => {
          setasynchronText("react18")
          setasynchroncolor(true)
          },1000)
}
// * lazy function
const lazy = () => {
    setopenLazy(true)
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
              <span className='import'>import</span><span className='artibut'> React</span> <span className='import'>from</span><span className='select'> 'react';</span><br/>
              <span className='import'>import</span><span className='artibut'> ReactDOM</span> <span className='import'>from</span><span className='select'> 'react-dom';</span><br/>
              <span className='import'>import</span><span className='select'> './scss/app.scss';</span><br/>
              <span className='import'>import</span><span className='artibut'> App</span> <span className='import'>from</span><span className='select'> './App';</span><br/>
              <br/>
              <span className='artibut'>ReactDOM</span>.<span className='render'>render</span><span className='renderskop'>(</span><br/>
              <span className='mode'>&#10094;React.StrictMode&#10095;</span><br/>

              <span className='mode'>&#10094;/App&#10095;</span><br/>

              <span className='mode'>&#10094;/React.StrictMode&#10095;</span><br/>
                <span className='artibut'>document</span>.<span className='render'>getElementById</span><span className='renderskop2'>(</span><span className='select'>'root'</span><span className='renderskop2'>)</span><br/>
                <span className='renderskop'>)</span>;
       </code>
      </div>
      <div className="wrapper__section2-rigth">
      <h2>React-18</h2>
      <code>
      <span className='import'>import</span><span className='artibut'> React</span> <span className='import'>from</span><span className='select'> 'react';</span><br/>
              <span className='import'>import</span><span className='artibut'><span className='renderskop'> &#10100;</span> createRoot <span className='renderskop'>&#10101;</span></span> <span className='import'>from</span><span className='select'>'react-dom/client';</span><br/>
              <span className='import'>import</span><span className='select'> './scss/app.scss';</span><br/>
              <span className='import'>import</span><span className='artibut'> App </span> <span className='import'>from</span><span className='select'> './App';</span><br/>

Vache Virabyan, [04.08.2022 6:49]
<br/>
              <span className='import'>const</span> <span className='artibut'>root</span> = <span className='render'>createRoot</span><span className='renderskop'>(</span><br/>
                <span className='artibut'>document</span>.<span className='render'>getElementById</span><span className='renderskop2'>(</span><span className='select'>'root'</span><span className='renderskop2'>)</span><br/>
                <span className='renderskop2'>)</span>;<br/>

                  <span className='artibut'>root</span>.<span className='render'>render</span><span className='renderskop'>(</span><br/>
                  <span className='mode'>&#10094;React.StrictMode&#10095;</span><br/>

                  <span className='mode'>&#10094;/App&#10095;</span><br/>

                  <span className='mode'>&#10094;/React.StrictMode&#10095;</span><br/>
                  <span className='renderskop'>)</span>;
       </code>
      </div>
     </section>


     <section className="wrapper__section3">
      <h2>1 update Batching</h2>
      <div className="wrapper__section3-top">
        <button onClick={sinchronBatching}>React17-sinchron</button>
        <span className={sinchroncolor ? "color" : null}>{`change-${sinchrontext}`}</span>
      </div>
      <div className="wrapper__section3-bottom">
        <button onClick={acynchronBatching}>React17-asynchron</button>
        <span className={asynchroncolor ? "color" : null}>{`change-${asynchrontext}`}</span>
      </div>
     </section>


     <section className="wrapper__section4">
      <h2>2 update Suspense</h2>
       <div className="wrapper__section4-content">
       <div className="wrapper__section4-left">
            <button onClick={lazy}>open lazy component</button>
            {
              openLazy && <>
               <Suspense fallback={<h3>Loading...</h3>}>
                 <MyLazyComponent/>
               </Suspense>
              </>
            }

       </div>
         <div className="wrapper__section4-rigth">

         </div>
       </div>
     </section>


     <section className="wrapper__section5">
      <h2>3 concurrent mode</h2>
      <div className="wrapper__section5-content">
          <ul className="list1">
            <li>useTransition</li>
            <li>startTransition</li>
            <li>useDeferredValue</li>
          </ul>
          <ul className="list2">
            <li>useSyncExternalStore</li>
            <li>useInsertionEffect</li>
            <li>useId</li>
          </ul>
      </div>
      <div className="search__container">
        <input type="text" placeholder='Search react17' onChange={onChangeValue} />
        <div className="search__option">
            {/* {isPending && (
            <h1>Rendering...</h1>
          )} */}
         {
        filterSearch(comment,value).map((e,i)=>{
            return <span key={i}>{e.title}</span>
          })
         }
        </div>
      </div>
     </section>
   </div>
  )
}