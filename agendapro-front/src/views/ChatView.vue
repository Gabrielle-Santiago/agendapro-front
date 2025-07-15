<script lang="ts" setup></script>

<template>
    <div class="bodyChat">
        <h1 class="titleChat">Bem Vindo a comunidade</h1>
        <h2 class="subtitleChat">Envie uma mensagem e comece uma conversa</h2>

        <div class="sendChat">
            <textarea class="inputChat" name="chatMessage" placeholder="Escreva aqui..."></textarea>
            <button class="buttonSend">➔</button>
        </div>
    </div>
</template>

<style scoped>
    .bodyChat {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 85vh;
        padding: 2rem;
        text-align: center;
    }

    .titleChat {
        font-size: 60px;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .subtitleChat {
        font-size: 30px;
        font-weight: 500;
        color: #555555;
        margin-bottom: 2rem;
    }

    .sendChat {
        display: flex;
        align-items: center;
        border: 1px solid #888888;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        margin-top: 20px;
        width: 500px;
        max-width: 90%;
        background-color: #fdf9f9;
    }

    .inputChat {
        flex: 1;
        border: none;
        background: transparent;
        font-size: 16px;
        outline: none;
    }

    .buttonSend {
        background: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #2c2c2c;
    }

    .buttonSend:hover {
        color: #555555;
    }

</style>