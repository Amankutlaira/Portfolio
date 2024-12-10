import CertificatesCard from "../certificates-card/Certificates-card.jsx";
import { certificatesData } from "../ulits/data";
import "./Certificates.css";

const Certificates = () => {
  return (
    <div id="certificates" className="certificates-container">
      <div className="certificates-list">
        {certificatesData.map((certificate, index) => (
          <CertificatesCard key={index} certificate={certificate} del={index} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
