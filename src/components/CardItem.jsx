import './Card.css';
import React, { useState } from 'react';

function Card(props) {



    const { Aboutme, Education, Certificate, Contact } = props;

    const [zoomImage, setZoomImage] = useState(null);

    const handleZoom = (imageUrl) => {
        setZoomImage(imageUrl);
    };

    const handleCloseZoom = () => {
        setZoomImage(null);
    };

    return (
        <div className="card lg:card-side bg-base-200 shadow-2xl lg:p-0 md:p-12">

            {/* ABOUT ME */}
            {Aboutme && (
                <figure>
                    <img className="w-72 h-auto lg:w-48 rounded-lg" src={Aboutme.Picture} alt="Album" />
                </figure>
            )}

            {/* Body For Use */}
            <div className="card-body">

                {/* ABOUT ME */}
                {Aboutme && (
                    <section id='aboutme'>
                        <h1 className="text-center permanent-marker text-4xl mb-4 exo-2 text-secondary">About Me</h1>
                        <h2 className="card-title text-center lg:text-left m-auto">{Aboutme.Title}</h2>
                    </section>
                )}

                {/* EDUCATION */}
                {Education && (
                    <section className="md:grid-rows-3 lg:grid-rows-1" id='education'>
                        <h1 className="text-4xl text-center font-bold exo-2 text-secondary" >My Education</h1>
                        <ul className="steps steps-vertical lg:steps-horizontal mt-8">
                            <li className="step step-success text-l font-semibold">{Education.HighSchool}</li>
                            <li className="step text-l font-semibold">{Education.College}</li>
                        </ul>
                    </section>
                )}



                {/* CERTIFICATION */}
                {Certificate && (
                    <section id='certification'>
                        <h1 className="text-4xl text-center font-bold exo-2 text-secondary" >Certification</h1>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>

                            {Certificate.Borntodev.map((cert, index) => (
                                <div key={index} onClick={() => handleZoom(cert.Picture)}>
                                    <img src={cert.Picture} alt={`Borntodev Certificate ${index + 1}`} className="w-auto rounded-lg" />
                                    <p className="text-center text-m mt-2">{cert.Title}</p>
                                </div>
                            ))}

                            {Certificate.Cisco.map((cert, index) => (

                                <div key={index} onClick={() => handleZoom(cert.Picture)}>
                                    <img src={cert.Picture} alt={`Cisco Certificate ${index + 1}`} className="w-auto rounded-lg" />
                                    <p className="text-center text-m  mt-2">{cert.Title}</p>
                                </div>
                            ))}

                            {Certificate.Bangkok.map((cert, index) => (
                                <div key={index} onClick={() => handleZoom(cert.Picture)}>
                                    <img src={cert.Picture} alt={`42 Bangkok Certificate ${index + 1}`} className="w-auto rounded-lg" />
                                    <p className="text-center text-m mt-2">{cert.Title}</p>
                                </div>
                            ))}

                            { /* ZoomImage */}
                            {zoomImage && (
                                <div className="fixed inset-0 bg-base-200 flex justify-center items-center z-10" onClick={handleCloseZoom}>
                                    <img className="max-h-screen rounded-lg" src={zoomImage} alt="Zoomed Certificate" />
                                </div>
                            )}

                        </div>
                    </section>
                )}

                {/* CONTACT */}
                {Contact && (
                    <section id='contact'>
                        <h1 className="text-4xl text-center font-bold exo-2 text-secondary">Contact</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                            {Contact.Title.map((title, index) => (
                                <a key={index} href={Contact.Url[index]} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                                    <p className='text-xl exo-2 text-white'>{title}</p>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
}

export default Card;
