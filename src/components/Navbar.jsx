import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';


function Navbar(props) {
    const { Myself, btn } = props; // Props คือ Attributes ของ HTML (ใช้ส่งผ่านข้อมูลระหว่าง Component หนึ่ง ไปยังอีก Component หนึ่ง )
    const [time, setTime] = useState(''); //  useState สำหรับค่าที่มีการเปลี่ยนแปลงได้


    useEffect(() => {
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            let session = 'AM';

            if (hours === 0) {
                hours = 12;
            } else if (hours > 12) {
                hours -= 12;
                session = 'PM';
            }

            hours = String(hours).padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds} ${session}`;
            setTime(timeString);
        }

        updateClock(); // เพื่อตั้งเวลาทันที
        const intervalId = setInterval(updateClock, 1000); // เพื่อให้ update วิต่อวิ

        return () => clearInterval(intervalId); // clear ข้อมูลเมื่อยกเลิกการต่อ 
    }, []);

    return (
        <div className="navbar bg-transparent p-4 grid grid-cols-1 md:grid-cols-3 items-center fixed top-0 w-full z-10 backdrop-blur-xl text-primary">
            { /* ใช้ postion : fixed เพื่อให้เมื่อ scoll ลง แล้ว scoll ลงตาม และใช้ top-0 เพื่อให้อยู่บนสุด */}
            {/* grid-cols-1 สำหรับหน้าจอเล็ก และ md:grid-cols-3 สำหรับหน้าจอขนาดกลางขึ้นไป */}
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0"> {/* justify-content กำหนดการจัดตำแหน่งของ flex items เมื่อเทียบกับทิศทางการไหลของ flexbox เช่น ชิดซ้าย กึ่งกลาง ชิดขวา */}
                <img src={Myself.pic} alt="" className="w-12 h-12 rounded-full" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-center"> {/* ใช้ flex-row เพื่อ ปุ่มเป็นแถวแนวนอน */}
                <NavLink className="btn btn-ghost text-l" to="/" end>{Myself.Home}</NavLink>
                {btn && btn.MyProfile && <NavLink className="btn btn-ghost text-l " to="/Profile">{btn.MyProfile}</NavLink>}
                {btn && btn.Aboutme && <ScrollLink className="btn btn-ghost text-l" to="aboutme" smooth={true} duration={500}> {btn.Aboutme}</ScrollLink>}
                {btn && btn.Education && <ScrollLink className="btn btn-ghost text-l" to="education" smooth={true} duration={500}>{btn.Education}</ScrollLink>}
                {btn && btn.Certification && <ScrollLink className="btn btn-ghost text-l" to="certification" smooth={true} duration={500}>{btn.Certification}</ScrollLink>}
                {btn && btn.Contact && <ScrollLink className="btn btn-ghost text-l" to="contact" smooth={true} duration={500}>{btn.Contact}</ScrollLink>}

                { /*หลักการทำงานของ  {btn && btn.MyProfile && <NavLink className="btn btn-ghost text-xl mr-4">{btn.MyProfile}</NavLink>}
                1. ตรวจสอบว่า btn มีค่าเป็นจริงหรือไม่
                2. ถ้า btn เป็นเท็จ จะไม่ต้องดำเนินการต่อ
                3. ถ้า btn เป็นจริง จะตรวจสอบต่อว่า btn.MyProfile มีค่าเป็นจริงหรือไม่
                4. ถ้า btn.MyProfile เป็นเท็จ จะไม่ต้องดำเนินการต่อ
                5. ถ้า btn.MyProfile เป็นจริง จะแสดงผลลัพธ์ <NavLink className="btn btn-ghost text-xl mr-4">{btn.MyProfile}</NavLink>
                */}

                {/*  btn && btn.Aboutme && <ScrollLink className="btn btn-ghost text-l" to="aboutme" smooth={true} duration={500}> {btn.Aboutme}</ScrollLink>}
                1. to: อาร์ทิบิวต์นี้ระบุถึงองค์ประกอบเป้าหมายที่ต้องการเลื่อนไปยัง ในที่นี้ เมื่อใช้กับ react-scroll หากเป้าหมายเป็นองค์ประกอบที่มี ID ที่สอดคล้องกัน มันจะเลื่อนไปยังองค์ประกอบนั้น */}

            </div>
            <div className="flex items-center justify-center md:justify-end">
                <span className="text-l m-4 font-semibold">{time}</span>
            </div>
        </div>
    );
}

export default Navbar;
