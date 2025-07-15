<script lang="ts" setup></script>

<template>
    <div class="formContainer">
        <h1 class="cadTitle">Cadastro</h1>

        <div class="formLeft">
            <label class="formLabel" for="fullName">Nome Completo</label>
            <input class="formInput" type="text" name="fullName" placeholder="Exemplo: João Gomes da Silva">

            <label class="formLabel" for="email">Email</label>
            <input class="formInput" type="email" name="email" placeholder="Exemplo: exemplo@gmail.com">

            <label class="formLabel" for="username">Username</label>
            <input class="formInput" type="text" name="username" placeholder="Exemplo: Joao1mb">

            <label class="formLabel" for="passwd">Senha</label>
            <input class="formInput" type="text" name="passwd" placeholder="Escreva sua senha">

            <label class="formLabel" for="cpf">CPF</label>
            <input class="formInput" type="text" name="cpf" placeholder="Exemplo: 000.000.000-00">
        </div>

        <div class="line"></div>

        <div class="formRight">
            <label class="formLabel" for="dateBirth">Data de Nascimento</label>
            <input class="formInput" type="date" name="dateBirth" placeholder="Exemplo: 30/06/1980">

            <label class="formLabel" for="contact_number">Número de Contato</label>
            <input class="formInput" type="text" name="contact_number" placeholder="Exemplo: (73) 98888-8888">

            <button @click="" class="buttonLogin">Cadastrar</button>
        </div>
    </div>
</template>


<style>
    .formContainer {
        color: #000;
        display: grid;
        grid-template-columns: 1fr 2px 1fr;
        background: linear-gradient(to bottom, #e4e4e4, #c9c8c8);
        border-radius: 15px;
        padding: 2rem 3rem;
        width: 90%;
        max-width: 1000px;
        margin: 8rem auto;
        box-shadow: inset 5px 5px 5px #7a7a7ad3;
        position: relative;
        gap: 18px;
    }

    .cadTitle {
        grid-column: 1 / -1;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
        position: relative;
    }

    .line {
        background-color: #2b2b2b;
        width: 2px;
        height: 100%;
        justify-self: center;
    }

    .formLeft, .formRight {
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;
    }

    .formLabel {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }

    .formInput {
        width: 100%;
        padding: 0.5rem;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #000;
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .formInput::placeholder {
        color: #888;
        font-size: 0.9rem;
    }

    .buttonLogin{
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

    .buttonLogin:hover {
        background: linear-gradient(to right, #0889e6, #015fa1, #001c29);
    }

</style>