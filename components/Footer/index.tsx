import {
  ContainerFooter,
  ContainerLogo,
  IconFooter,
  LogoFooter,
} from "./styles";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <ContainerFooter>
      <div>Avenida Otávio Campelo Ribeiro nº 2801, Eldorado</div>
      <div>Sete Lagoas, Minas Gerais</div>
      <IconFooter>
        <div>Redes sociais</div>
        <a href="https://www.instagram.com/unimodas7l/" target="_blank">
          <Icon
            color="#fafafa"
            icon="akar-icons:instagram-fill"
            width="1.8rem"
          />
        </a>
      </IconFooter>
      <ContainerLogo>
        <div></div>
        <div>SEMPRE PENSADO EM VOCÊ</div>
        <LogoFooter>
          <div>UNI</div>
          <div>MODAS 7L</div>
        </LogoFooter>
        <div>Aki você é único</div>
      </ContainerLogo>
    </ContainerFooter>
  );
}

export default Footer;
