<script setup lang="ts">
import doctor from "../assets/doctor.jpg"
import doctors from "../assets/doctors.jpg"
</script>

<template>
  <section class="backgroundHome">
    <img class="doctorImg" :src="doctor" alt="doctor_background">
    <div class="degradeImg"></div>

    <div class="homeDiv">
      <h1 class="title">Sua saúde em primeiro lugar</h1>
      <ul class="links">
        <li>
          <router-link to="" class="consult">marque sua consulta agora</router-link>
        </li>
      </ul>
    </div>
  </section>

  <section class="backgroundDoctors">
    <div class="grid">
      <div class="gridDoctors">
        <img :src="doctors" alt="doctors">
      </div>
      <div class="gridText">
        <h2>Junte-se ao nosso time</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vel molestias incidunt reiciendis ex facilis nam, accusantium, odit excepturi cum quod optio repudiandae quas nesciunt ea voluptate unde labore odio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus quia velit neque vel, consequuntur magnam, mollitia, provident natus sapiente facere nam hic incidunt? Dicta amet distinctio nisi velit illum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eaque architecto minus nesciunt quaerat natus, in cum porro eligendi a minima expedita voluptas sint nobis repellat id vero, atque saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero ipsam iure reiciendis natus! Quo sed cum alias nulla sapiente fuga esse ad aspernatur nisi adipisci! Dolorum eligendi necessitatibus quasi.
        </p>
        <router-link id="linkDoctor" to="" class="link">Realizar Cadastro</router-link>
      </div>
    </div>
  </section>
  
  <section class="consultationAdvantages">
    <div class="gridFather">
      <div class="titleAdvantages">
        <h2>Vantagens de quem usa nossos serviços</h2>
      </div>
      <div>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi tempore quibusdam obcaecati, quas exercitationem aliquam molestiae sed vel autem minima velit nulla. Odit deleniti nam assumenda minus tempore totam.</p>
      </div>
      <div>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi tempore quibusdam obcaecati, quas exercitationem aliquam molestiae sed vel autem minima velit nulla. Odit deleniti nam assumenda minus tempore totam.</p>
      </div>
      <div>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi tempore quibusdam obcaecati, quas exercitationem aliquam molestiae sed vel autem minima velit nulla. Odit deleniti nam assumenda minus tempore totam.</p>
      </div>
    </div>
  </section>

  <footer>
    <div class="gridFooter">
      <div>
        <h3>Contatos</h3>
        <router-link to="" class="footer-link">Email: gabriellesantisilva@gmail.com</router-link>
        <router-link to="" class="footer-link">Número: (73) 91111-1111</router-link>
      </div>
      <div>
        <h3>Sobre</h3>
        <router-link to="" class="footer-link">Cadastre-se como cliente</router-link>
        <router-link to="" class="footer-link">Cadastre-se como funcionário</router-link>
      </div>
      <div>
        <h3>Créditos</h3>
        <ul>
          <li>
            <a href="https://www.pexels.com/pt-br/foto/trabalhando-mulheres-profissional-cuidados-de-saude-8460349/" class="footer-link" target="_blank">Médico</a>
          </li>
          <li>
            <a href="https://www.pexels.com/pt-br/foto/mulher-com-macacao-azul-em-pe-ao-lado-da-mulher-com-macacao-branco-6129507/" class="footer-link" target="_blank">Equipe médica</a>
          </li>
          <li>
            <a href="https://www.pexels.com/pt-br/foto/31687152/" class="footer-link" target="_blank">Background do Login</a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/sunbeam" class="footer-link" target="_blank">Icone de Sol</a>
          </li>
        </ul>        
      </div>
    </div>
  </footer>
</template>

<style>
  .backgroundHome{
    position: relative;
    width: 100%;
    height: auto; 
    display: flex;
    align-items: center;
  }

  .doctorImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .degradeImg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 25%, transparent 80%);
    z-index: 1;
  }

  .homeDiv{
    position: absolute;
    top: 25%;
    z-index: 2;
    padding-left: 4rem;
    max-width: 900px;
    color: #ffffff;
  }

  .title {
    margin: 0;
    font-size: 80px;
  }

  .consult {
    text-decoration: none;
    font-weight: 500;
    font-size: 40px;
    color: #b7b7b9;
  }

  .consult:hover{
    color: #770417;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    height: 40rem;
    background: #0d1a26;
    background: linear-gradient(90deg, rgba(13, 26, 38, 1) 0%, rgba(10, 60, 122, 1) 56%, rgba(4, 120, 209, 1) 100%);
  }

  .gridDoctors img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(5, 30, 61);
    }

  .gridText h2 {
    font-size: 50px;
    margin-bottom: 1rem;
  }

  .gridText p {
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  #linkDoctor{
    font-size: 25px;
    font-weight: bold;
  }

  .gridFather {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);  
    gap: 2rem;                         
    padding: 2rem;
    height: 36rem;
    justify-items: center;
    background-color: #ecebeb;
  }

  .gridFather > div {
    padding: 1.5rem;
    width: 30rem;
    border-radius: 8px;
    border: 3px solid #0A3C7A;
    margin-bottom: 30px;
    box-shadow: 8px 8px 10px #919090;
  }

  .gridFather h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .gridFather p {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: bold;
  }

  .titleAdvantages{
    border: none ! IMPORTANT;
    box-shadow: none ! IMPORTANT;
  }

  .titleAdvantages > h2{
    font-size: 52px;
    max-width: 450px;
    text-align: left;
  }

  footer {
    background-color: #0b121b;
    color: white;
  }

  .gridFooter {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem;
    justify-items: center;
  }

  .gridFooter h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .footer-link {
    display: block;
    font-size: 14px;
    color: #ebe9e9;
    text-decoration: none;
    margin: 0.3rem 0;
  }

  .footer-link:hover {
    text-decoration: underline;
    color: #0c5cac; 
  }

  /* TELAS MÉDIAS: TABLETS (ex.: iPads) */
@media (max-width: 1024px) {
  .title {
    font-size: 50px;
  }

  .consult {
    font-size: 28px;
  }

  .grid {
    grid-template-columns: 1fr;
    height: auto;
    text-align: center;
  }

  .gridDoctors img {
    max-width: 400px;
    margin: 0 auto;
  }

  .gridText h2 {
    font-size: 40px;
  }

  .gridText p {
    font-size: 18px;
  }

  .gridFather {
    grid-template-columns: 1fr;
    height: auto;
  }

  .gridFather > div {
    width: 80%;
  }

  .titleAdvantages > h2 {
    font-size: 36px;
    text-align: center;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .backgroundHome {
    margin-top: 160px;
  }

  .homeDiv {
    top: 15%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .title {
    font-size: 40px;
  }

  .consult {
    font-size: 20px;
  }

  .gridText h2 {
    font-size: 32px;
  }

  .gridText p {
    font-size: 16px;
  }

  #linkDoctor {
    font-size: 18px;
  }

  .gridDoctors img {
    width: 100%;
    max-width: 100%;
  }

  .gridFather > div {
    width: 100%;
  }

  .titleAdvantages > h2 {
    font-size: 28px;
    text-align: center;
  }

  .gridFooter {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .gridFooter div {
    margin-bottom: 2rem;
  }
}

</style>