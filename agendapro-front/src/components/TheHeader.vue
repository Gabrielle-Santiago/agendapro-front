<script setup lang="ts">
  import { ref, watchEffect } from 'vue'; 
  import caduceus from '../assets/caduceus.png'; 

  const isLoggedIn = ref(false);

  const loginStatus = () => {
    const token = localStorage.getItem('jwt_token'); 
    isLoggedIn.value = !!token; 
  };

  watchEffect(() => {
    loginStatus();
  });

  const logout = () => {
    localStorage.removeItem('jwt_token'); 
    isLoggedIn.value = false;
  };
  
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-content">

        <div class="logo">
          <div class="skeleton-avatar">
            <img id="caduceus" :src="caduceus" alt="Logo AgendaPro">
          </div>
          <p class="brand-text">Agenda Pro</p>
        </div>

        <ul class="links">
          <template v-if="isLoggedIn">
            <li class="value">
              <router-link to="/homePatient" class="link">Consulta</router-link>
            </li>
            <li class="value">
              <router-link to="/newConsultation" class="link">Nova Consulta</router-link>
            </li>
            <li class="value">
              <router-link to="/chatView" class="link">Comunidade</router-link>
            </li>
            <li class="value">
              <router-link to="/" @click="logout" class="link">Sair</router-link>
            </li>
          </template>

          <template v-else>
            <li class="value">
              <router-link to="/" class="link">Início</router-link>
            </li>
            <li class="value">
              <router-link to="/formEmployee" class="link">Afiliar-se</router-link>
            </li>
            <li class="value">
              <router-link to="/login" class="link">Login</router-link>
            </li>
            <li class="value">
              <router-link to="/formPatient" class="link">Cadastrar-se</router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>


<style scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1E3953;
    z-index: 1000;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .logo {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: white;
  }

  .brand-text {
    margin-left: 10px;
    font-size: 1.2rem;
  }

  #caduceus {
    height: 30px;
    padding: 4px;
  }

  .skeleton-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #d1d5db;
    border: 2px solid #111111;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .value {
    padding: 10px;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    position: relative;
  }

  .value:hover {
    background-color: #21262c;
  }

  .value:active,
  .value:focus {
    background-color: #11152b;
    outline: none;
  }

  .value::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .value:focus::before,
  .value:active::before {
    opacity: 1;
  }

  .link {
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    color: #dfdfe2;
  }

  .link:hover {
    color: #3dc9ec;
  }

  @media (max-width: 768px) {
    .navbar-content {
      flex-direction: column;
    }

    .links {
      width: 100%;
      padding-top: 10px;
      font-size: 14px;
    }

    .value {
      width: 100%;
    }
  }
</style>
