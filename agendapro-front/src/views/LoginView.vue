<script setup lang="ts">
import background_login from '../assets/background_login.jpg'
</script>

<template>
    <div class="gridLogin">
        <div class="gridBackground">
            <img :src="background_login" alt="background_login">
        </div>
        <div class="gridLoginText">
            <h1>Login</h1>

            <label for="username">Username</label>
            <input type="text" name="username" placeholder="Escreva seu username">

            <label for="passwd">Senha</label>
            <input type="text" name="passwd" placeholder="Escreva sua escreva">

            <button @click="">Logar</button>
        </div>     
    </div>
</template>

<style>
    .gridLogin {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100vh;      
        background-color: #f0f0f0;
    }

    .gridBackground {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        overflow: hidden;
    }

    .gridBackground img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .gridBackground::after {
        content: "Bem Vindo";
        font-size: 12.5rem;
        font-weight: bold;
        padding: 20px;
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        background-color: #777676c9;
        color: #d1d0d0;
        text-shadow: 5px 2px 5px rgb(10 20 30);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-stroke: 2.5px #0d1a26;
    }

    .gridLoginText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem 8rem;
        background-color: #e9e8e8;
    }

    .gridLoginText h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }

    .gridLoginText label {
        font-weight: bold;
        margin-top: 2rem;
        font-size: 1.2rem;
    }

    .gridLoginText input {
        border: none;
        border-bottom: 2px solid black;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        padding: 0.5rem;
        font-size: 1rem;
        background-color: transparent;
    }

    .gridLoginText input:focus {
        outline: none;
        border-color: #0072c6;
    }

    .gridLoginText button {
        margin-top: 2rem;
        padding: 1rem;
        font-size: 1.3rem;
        font-weight: bold;
        background: #00111A;
        background: linear-gradient(0deg, rgba(0, 17, 26, 1) 0%, rgba(3, 97, 145, 1) 100%);
        color: #e9e8e8;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        border: 2px solid #000e14;
        box-shadow: 3px 3px 3px #00080c;
    }

    .gridLoginText button:hover {
        background: linear-gradient(to right, #0889e6, #015fa1, #001c29);
    }
</style>