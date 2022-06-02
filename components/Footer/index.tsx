import {
  ContainerFooter,
  ContainerLinks,
  ContainerLogo,
  FooterRow,
  IconFooter,
  LogoFooter,
  Titulo,
} from "./styles";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Footer() {
  return (
    <ContainerFooter>
      {/* <ContainerLogo>
        <div>SEMPRE PENSADO EM VOCÊ</div>
        <LogoFooter>
          <div>UNI</div>
          <div>MODAS 7L</div>
        </LogoFooter>
        <div>Aki você é único</div>
      </ContainerLogo> */}
      <ContainerLinks>
        <FooterRow>
          <Titulo>Menu</Titulo>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Sobre</a>
          </Link>
          <Link href="/">
            <a>Política de entrega</a>
          </Link>
          <Link href="/">
            <a>Política de Privacidade</a>
          </Link>
          <Link href="/">
            <a>Termos e Condições</a>
          </Link>
          <Link href="/">
            <a>Perguntas Frequentes</a>
          </Link>
        </FooterRow>

        <FooterRow>
          <Titulo>Endereço</Titulo>
          <div>Avenida Otávio Campelo Ribeiro nº 2801, Eldorado</div>
          <div>Sete Lagoas, Minas Gerais</div>
        </FooterRow>

        <FooterRow>
          <Titulo>Contato</Titulo>
          <span>unimodas1538@gmail.com</span>
          <span>(31) 9 9666-2795</span>
        </FooterRow>

        <FooterRow>
          <IconFooter>
            <Titulo>Redes sociais</Titulo>
            <a href="https://www.instagram.com/unimodas7l/" target="_blank">
              <Icon icon="akar-icons:instagram-fill" width="1.8rem" />
            </a>
          </IconFooter>
        </FooterRow>
      </ContainerLinks>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Titulo>Formas de Pagamento</Titulo>
        <div>
          <Icon icon="logos:visa" width="40" height="40" />
          <Icon icon="logos:mastercard" width="40" height="40" />
          <Icon icon="logos:elo" width="40" height="40" />
        </div>
      </div>
    </ContainerFooter>
  );
}

export default Footer;
