import bannerRosa from "../../assets/bannerosa.png";
import "./novidades.scss";

export default function Novidades() {
  return (
    <section>
        <div>
      <h2 className="novidades">NOVIDADES PARA VOCÊ</h2>
      </div>

      <div>
        <img className="bannerosa" src={bannerRosa} alt="Banner de novidades" />
      </div>
    </section>
  );
}