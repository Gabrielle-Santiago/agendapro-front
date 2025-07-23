<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from "vue";
    import { Client } from "@stomp/stompjs";

    interface ChatMessage {
        username: string;
        message: string;
    }

    const mensagens = ref<ChatMessage[]>([]);
    const newMessage = ref<string>("");

    const username = ref("Usuario" + Math.floor(Math.random() * 100));
    const currentUsername = username; 

    let client: Client;

    function connect() {
        if (client && client.active) {
            console.log("Cliente STOMP já ativo.");
            return;
        }

        client = new Client({
            webSocketFactory: () => new WebSocket("ws://localhost:8080/websocket"),
            
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            
            debug: (str) => {
                console.log(str); 
            },
            
            onConnect: () => {
                console.log("Conectado ao WebSocket!");

                client.publish({
                    destination: "/app/chat.register", 
                    body: JSON.stringify({ username: currentUsername.value, message: "entrou no chat." }),
                });

                client.subscribe("/topic/public", (message) => {
                    const body: ChatMessage = JSON.parse(message.body);
                    mensagens.value.push(body); 
                });
            },
            
            onStompError: (frame) => {
                console.error("Erro STOMP:", frame);
            },
            
            onWebSocketClose: (event) => {
                console.error("Conexão WebSocket fechada:", event);
            },
            
            onWebSocketError: (event) => {
                console.error("Erro WebSocket:", event);
            }
        });
        client.activate();
    }

    function sendChatMessage() {
        if (!client || !client.active) {
            console.warn("Cliente STOMP não está ativo. Não é possível enviar mensagem.");
            return;
        }
        if (!newMessage.value.trim()) {
            return; 
        }

        const payload: ChatMessage = {
            username: currentUsername.value,
            message: newMessage.value,
        };

        client.publish({
            destination: "/app/chat.send",
            body: JSON.stringify(payload),
        });
            newMessage.value = ""; 
    }

    onMounted(() => { connect(); });

    onUnmounted(() => {
        if (client) {
            client.deactivate(); 
        }
    });
</script>

<template>
  <div class="bodyChat">
    <h1 class="titleChat">Bem Vindo à Comunidade</h1>
    <h2 class="subtitleChat">Você está como: <strong>{{ currentUsername }}</strong></h2>

    <div class="messagesContainer">
      <div
        v-for="(msg, index) in mensagens"
        :key="index"
        :class="['messageBubble', msg.username === currentUsername ? 'myMessage' : 'otherMessage']">
        <p class="username">{{ msg.username }}</p>
        <p class="text">{{ msg.message }}</p>
      </div>
    </div>

    <div class="sendChat">
      <input class="inputChat" name="chatMessage" type="text" v-model="newMessage" placeholder="Escreva..." @keyup.enter="sendChatMessage">
      <button class="buttonSend" @click="sendChatMessage">➔</button>
    </div>
  </div>
</template>

<style scoped>
    .bodyChat {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .messagesContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        max-width: 600px;
        padding: 1rem;
        overflow-y: auto;
        flex-grow: 1;
    }

    .messageBubble {
        max-width: 70%;
        padding: 10px 15px;
        border-radius: 15px;
        word-break: break-word;
        display: inline-block;
    }

    .myMessage {
        align-self: flex-end;
        background-color: #dcf8c6;
        border-bottom-right-radius: 0;
        text-align: left;
    }

    .otherMessage {
        align-self: flex-start;
        background-color: #e6e6e6;
        border-bottom-left-radius: 0;
        text-align: left;
    }

    .username {
        font-weight: bold;
        font-size: 0.8rem;
        color: #1825d5;
        margin-bottom: 5px;
    }

    .text {
        margin: 0;
        font-size: 1rem;
        color: #000;
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
