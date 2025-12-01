import "./banner.scss";
import banner from "../../assets/bannerPrincipal.png"



export default function Banner() {
  return (
    <section className="banner">
      <img src={banner} alt="Banner principal" />
    </section>
  );
}