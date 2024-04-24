import { useState } from "react"



export const CalDemo = () => {
    const [res,setresult] = useState('')
    
    const btn =[
        '9','8','7','6','5','4','3','2','1','0','.','+','-','*','/','%','clear','='
    ]
    const handleCalc = (item)=>{
if(item === 'clear'){
    setresult('')
}else if(item === '=' ){
    try{
        const result = eval(res)
        setresult(result)
    }catch(err){
        setresult(err)
    }

}else{
 let displayValue = res + item
 setresult(displayValue)
}
    }
  return (
    <>
        <div className='calculator'>
        <input type='text'  id='answer' value={res} readOnly/>
        {btn.map((item)=>(
            <button key={item} className="btn" onClick={()=>handleCalc(item)}>{item}</button>
        ))}

        
        </div>
        
    </>
  )
}
