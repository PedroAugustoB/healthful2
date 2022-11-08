import { Footer } from "../../Components/Footer/footer.jsx";
import { Navbar } from "../../Components/Navbar/navbar.jsx";
import { Container, BannerTexto, Banner, ImagemCategoria, ImagemArtigo, CardsCategoria, LogoHealthful, Apresentacao, SecaoBanner, HomeTitulo, HomeTexto, CrieArtigo, SecaoArtigo, Separador } from "./style.jsx";
import Logo from "../../Assets/logo.svg";
import leite from "../../Assets/Placeholder/comidas.svg"

/*PlaceHolder*/
import Bike from "../../Assets/Placeholder/Bike.svg";
import Caminhar from "../../Assets/Placeholder/Caminhar.svg";
import Abdomen from "../../Assets/Placeholder/Abdomen.svg";
import Medico from "../../Assets/Placeholder/Medico.svg";
import Comidas from "../../Assets/Placeholder/Comidas.svg";

import Escrita from "../../Assets/HomeImg/escritas.svg";
import Salvos from "../../Assets/HomeImg/artigos_salvos.svg";
import Perfil from "../../Assets/HomeImg/perfil.svg";
import Certificado from "../../Assets/HomeImg/certificados.svg";
import { CardComp } from "../../Components/Cards/cards.jsx";


export function Home () {
  return (
    <>
      <Container>
        <Navbar />
            
          <SecaoBanner>
            <Banner>
              <BannerTexto>
                “Que desgraça é para o
                  <br />  
                homem envelhecer sem
                  <br /> 
                nunca ver a beleza e a força
                  <br /> 
                do que o seu corpo é capaz”
              </BannerTexto>
              <span>Sócrates</span >
            </Banner> 
          </SecaoBanner>

          
          <Apresentacao>
            <p>Bem-vindos à plataforma de artigos voltados à saúde.</p>
          </Apresentacao>

          <LogoHealthful>
            <img src={Logo} style={{width : '70% ', height : 'auto'}}/>
          </LogoHealthful>


        <HomeTitulo>
          O Que É A Healthful?
        </HomeTitulo>
    
        <HomeTexto style={{  'margin-top': '2%'}}>
        A HEALTHFUL É UMA PLATAFORMA DE ARTIGOS VOLTADO AO 
        </HomeTexto>

        <HomeTexto>
        SETOR DA SAÚDE, COM O FOCO EM MELHORIA DE VIDA. 
        </HomeTexto>

        <HomeTexto>
        ACESSE ABAIXO PARA LER NOSSOS ARTIGOS OU  <CrieArtigo> ‎ Crie Um Artigo</CrieArtigo>
        </HomeTexto>

        <CardsCategoria>

          <CardComp background={leite} />
              
              <ImagemCategoria src={Bike} /> 
              <ImagemCategoria src={Caminhar} />
              <ImagemCategoria src={Abdomen} />
              <ImagemCategoria src={Medico} />
              <ImagemCategoria src={Comidas} /> 

          </CardsCategoria> 

        <HomeTitulo style={{'margin-top': '10%', 'font-size': '500%'}}>
          Crie Ou Leie Artigos
        </HomeTitulo>
         

        <SecaoArtigo>
          <HomeTexto>
          <ImagemArtigo src={Escrita} />
          <Separador />
            OS ARTIGOS SÃO SEPARADOS POR <br />
            CATEGORIAS, FACILITANDO SUA <br /> ORGANIZAÇÃO
            E CARACTERIZAÇÃO.
       
          </HomeTexto>
        </SecaoArtigo>


        <SecaoArtigo>
          <HomeTexto style={{'display' : 'flex', 'align-itens': 'center', 'justify-content': 'center'}}>

            VOCÊ TAMBÉM PODE SALVAR 
            <br/>
            ARTIGOS E COMENTAR SUA 
            <br/>
            OPINIÃO EM UM ARTIGO!
            <br/>

            <Separador />
            <ImagemArtigo src={Salvos} />
          </HomeTexto>
        </SecaoArtigo>


        <SecaoArtigo>
          <HomeTexto>
          <ImagemArtigo src={Perfil} style={{width : '35% ', height : 'auto'}} />
          <Separador />
         
            QUALQUER UM PODE ESCREVER ARTIGOS,
            <br/>
            PORÉM, SERÃO AVALIADOS POR NOSSA EQUIPE
            <br/>
            A FIM DE GARANTIR A QUALIDADE E A VALIDEZ 
            <br/>
            DOS NOSSOS ARTIGOS.
            <br/>
            
          </HomeTexto>
      </SecaoArtigo>
          
      <SecaoArtigo>
          <HomeTexto>
            PARA CRIAR UM ARTIGO, É NECESSÁRIO TER UMA 
            <br/> 
            CONTA NO SITE E DEFINIR O SETOR DA 
            <br/> 
            SAÚDE QUE DIZ RESPEITO AO ARTIGO.
            <br/> 
            DEPOIS, SÓ ESCREVER!
   
            <Separador />
            <ImagemArtigo src={Certificado}></ImagemArtigo>
            
          </HomeTexto>
        </SecaoArtigo>
       
        
        <Footer />
      </Container>
    </>
  )
}

