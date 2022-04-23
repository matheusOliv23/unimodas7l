import {
  ContainerFooter,
  ContainerLogo,
  IconFooter,
  LogoFooter,
  Titulo,
} from "./styles";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <ContainerFooter>
      <ContainerLogo>
        <div>SEMPRE PENSADO EM VOCÊ</div>
        <LogoFooter>
          <div>UNI</div>
          <div>MODAS 7L</div>
        </LogoFooter>
        <div>Aki você é único</div>
      </ContainerLogo>
      <div>
        <Titulo>Endereço</Titulo>
        <div>Avenida Otávio Campelo Ribeiro nº 2801, Eldorado</div>
        <div>Sete Lagoas, Minas Gerais</div>
      </div>

      <div>
        <Titulo>Contato</Titulo>
        <div>unimodas1538@gmail.com</div>
        <div>(31) 9 9666-2795</div>
      </div>

      <IconFooter>
        <Titulo>Redes sociais</Titulo>
        <a href="https://www.instagram.com/unimodas7l/" target="_blank">
          <Icon icon="akar-icons:instagram-fill" width="1.8rem" />
        </a>
      </IconFooter>
    </ContainerFooter>
  );
}

export default Footer;
