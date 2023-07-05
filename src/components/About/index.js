import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./index.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function About() {
    const publicUrl = process.env.PUBLIC_URL;
    const resumeUrl = `${publicUrl}/Patrik_Bacic_CV_EN.docx`;


    return (
        <div className="about-container">
            <div className="txt-zone">
                <h1 className="about-title">
                    About me
                </h1>
                <p className="p-container">
                    I am a junior software developer, attending <a href="https://www.vsite.hr/">Vsite</a> college and currently in my final year.
                    <br /><br />
                    I possess a wide range of technical skills including proficiency in <strong className="lang">C#, .NET, SQL, Java, Python, C, JavaScript, HTML, CSS, SCSS and React.</strong>
                    <br /><br />
                    Throughout my academic journey I have honed my skills in software development and gained valuable experience working on various projects.
                    <br /><br />
                    I am excited to continue growing as a developer and honing my programming skills by taking on new and exciting projects.<br /><br />
                    Feel free to download and check out my <a href={resumeUrl} download>resume</a>.
                </p>
            </div>
            <div className="map-wrap">
                <MapContainer center={[45.815434, 15.933707]} zoom={15}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[45.815434, 15.933707]} icon={L.icon({
                        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                    })}>
                        <Popup className="popup-container">
                            Approximately the area where I live                            
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

