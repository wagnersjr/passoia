import "./Main.scss";
import banner from "../../assets/bannerPrincipal.png"



export default function Main() {
  return (
    <section className="banner">
      <img src={banner} alt="Banner principal" />
    </section>
  );
}