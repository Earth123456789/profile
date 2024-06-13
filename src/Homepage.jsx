import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navbtn from './data/Navbtn';
import './Home.css';
import { useEffect } from 'react';


function Homepage() {

  //Data
  const { Mydata, btn1 } = Navbtn;

  // Change the title
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <html>
      <header>
        <Navbar Myself={Mydata} btn={btn1} />
      </header>
      <main className='text-center items-center justify-center flex h-screen'>
        <div className='w-full text-center mb-10'>
          <img src="https://media.giphy.com/media/fhAwk4DnqNgw8/200.gif" alt="" className='w-full' />
          <span className='absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 animate text-7xl'>My Profile</span>
          {/* 1.absolute เพื่อ กำหนดตำแหน่งได้ ทับ element อื่น 
          2.top 1/2 ย้ายขอบบนขององค์ประกอบให้ตรงกับ 50% ของความสูงของรูปภาพ 
          3. transform -translate-x-1/2 -translate-y-1/2 : ย้ายองค์ประกอบทางซ้ายและขวาโดย 50% ของความกว้าง
           */}
        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </html>
  )
}

export default Homepage;