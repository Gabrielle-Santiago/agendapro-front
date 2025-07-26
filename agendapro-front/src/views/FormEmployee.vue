<script lang="ts" setup>
    import { ref } from "vue";
    import axios from "axios";
    import { useRouter } from 'vue-router';

    interface EmployeeForm {
        fullName: string;
        email: string;
        username: string;
        passwd: string;
        cpf: string;
        dateBirth: string;
        contact_number: string;
        proof: string;
        role: string;
    }

    const fullName = ref<string>("");
    const email = ref<string>("");
    const username = ref<string>("");
    const passwd = ref<string>("");
    const cpf = ref<string>("");
    const dateBirth = ref<string>("");
    const contact_number = ref<string>("");
    const proof = ref<string>("");
    const role = ref<string>("ROLE_EMPLOYEE");

    const router = useRouter();
    const handleSubmit = async () => {
        if (!fullName.value || !email.value || !username.value || !passwd.value ||
        !cpf.value || !dateBirth.value || !contact_number.value || !proof.value) {
            return alert("Por favor, preencha todos os campos do formulário.");
        }

        const formData: EmployeeForm = {
            fullName: fullName.value,
            email: email.value,
            username: username.value,
            passwd: passwd.value,
            cpf: cpf.value,
            dateBirth: dateBirth.value,
            contact_number: contact_number.value,
            proof: proof.value,
            role: role.value
        };

        try {
            const response = await axios.post("http://localhost:8080/register/employee", formData);
            alert("Cadastro realizado com sucesso");
            await router.push('/login');
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }    
    };
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="formContainer">
            <h1 class="cadTitle">Cadastro</h1>

            <div class="formLeft">
                <label class="formLabel" for="fullName">Nome Completo</label>
                <input class="formInput" type="text" name="fullName" id="fullName" v-model="fullName" placeholder="Exemplo: João Gomes da Silva">

                <label class="formLabel" for="email">Email</label>
                <input class="formInput" type="email" name="email" id="email" v-model="email" placeholder="Exemplo: exemplo@gmail.com">

                <label class="formLabel" for="username">Username</label>
                <input class="formInput" type="text" name="username" id="username" v-model="username" placeholder="Exemplo: Joao1mb">

                <label class="formLabel" for="passwd">Senha</label>
                <input class="formInput" type="password" name="passwd" id="passwd" v-model="passwd" placeholder="Escreva sua senha">

                <label class="formLabel" for="cpf">CPF</label>
                <input class="formInput" type="text" name="cpf" id="cpf" v-model="cpf" placeholder="Exemplo: 000.000.000-00">
            </div>

            <div class="line"></div>

            <div class="formRight">
                <label class="formLabel" for="dateBirth">Data de Nascimento</label>
                <input class="formInput" type="date" name="dateBirth" id="dateBirth" v-model="dateBirth" placeholder="Exemplo: 30/06/1980">

                <label class="formLabel" for="contact_number">Número de Contato</label>
                <input class="formInput" type="text" name="contact_number" id="contact_number" v-model="contact_number" placeholder="Exemplo: (73) 98888-8888">

                <label for="formLabel">Certificado</label>
                <input class="formInput" type="text" name="proof" id="proof" v-model="proof" placeholder="Escreva a instituição que se formou">

                <button type="submit" class="buttonLogin">Cadastrar</button>
            </div>     
        </div>
    </form>
</template>


<style scoped>
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