import bannerRosa from "../../assets/bannerosa.png";
import "./Novidades.scss";

export default function Novidades() {
  return (
    <section>
        <div>
      <h2>NOVIDADES PARA VOCÊ</h2>
      </div>

      <div>
        <img src={bannerRosa} alt="Banner de novidades" />
      </div>
    </section>
  );
}