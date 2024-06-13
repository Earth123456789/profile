import CardItem from './components/CardItem';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './data/Cards';
import Navbtn from './data/Navbtn';
import { useEffect } from 'react';

function Profile() {

    //Data
    const { Mydata, btn2 } = Navbtn;
    //ชื่อต้องเหมือนกัน
    const { MyAbout, MyEducation, MyCertification, MyContact} = Cards;

    // Change the title
    useEffect(() => {
        document.title = "Profile";
    }, []);

    return (
        <html>
            <header>
                <Navbar Myself={Mydata} btn={btn2} />
            </header>
            <main className="grid grid-cols-1 gap-10 mt-72 ml-20 mr-20 mb-72">
                {/*TEST*/}
                <CardItem Aboutme={MyAbout}/>
                <CardItem Education={MyEducation}/>
                <CardItem Certificate={MyCertification} />
                <CardItem Contact={MyContact}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </html>
    )
}

export default Profile;