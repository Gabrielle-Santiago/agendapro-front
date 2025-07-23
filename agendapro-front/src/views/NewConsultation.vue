<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

    interface ConsulationForm{
        //patientId: number,
        title: string,
        startConsultation: string,
        endConsultation: string,
        employeeId: string,
    }

    //const patientId = ref<number>();
    const title = ref<string>("");
    const startConsultation = ref<string>("");
    const endConsultation = ref<string>("");
    const employeeId = ref<string>("medico1");
    const dateConsultation = ref<string>("");

    const handleSubmit = async () => {
        const ConsultationData: ConsulationForm = {
            //patientId: patientId.value,
            title: title.value,
            startConsultation: startConsultation.value,
            endConsultation: endConsultation.value,
            employeeId: employeeId.value
        }

        try {
            const response = await axios.post("http://localhost:8080/api/consultations/create", ConsultationData);
            alert("Consulta agendada com sucesso!");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
  <div class="bodyConsultation">
    <h1 class="title">Agendar Consulta</h1>
    <form @submit.prevent="handleSubmit" class="formConsultation">
      <input id="title" type="text" class="inputConsultation" v-model="title" placeholder="Escreva um título">
      
      <input id="startConsultation" type="time" class="inputConsultation" v-model="startConsultation" placeholder="Selecione um horário">
      
      <input id="dateConsultation" type="date" class="inputConsultation" v-model="dateConsultation" placeholder="Selecione uma data">

      <label class="labelDescription" for="describe">Descrição (opcional)</label>
      <textarea class="textareaDescription" placeholder="Escreva quais sintomas você possui"></textarea>

      <button type="submit" class="buttonConsultation">Cadastrar Horário</button>
    </form>
  </div>
</template>


<style scoped>
    .bodyConsultation {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 1rem;
        min-height: 100vh;
        margin-top: 50px;
    }

    .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .formConsultation {
        background-color: #f5f5f5;
        border: 1px solid #8b8989;
        border-radius: 8px;
        padding: 3rem;
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        box-shadow: inset 5px 5px 5px #b7b2b2;
    }

    .inputConsultation {
        border: none;
        border-bottom: 1px solid #333333;
        background: transparent;
        padding: 1rem 0;
        font-size: 18px;
        outline: none;
    }

    .inputConsultation::placeholder {
        color: #666666;
    }

    .labelDescription {
        font-weight: 600;
        font-size: 20px;
        padding: 0.5rem 0;
        color: #333333;
    }

    .textareaDescription {
        width: 96%;
        height: 80px;
        resize: none;
        background-color: #f2eaea;
        border: 1px solid #999999;
        border-radius: 5px;
        padding: 0.5rem;
        font-size: 14px;
    }

    .buttonConsultation {
        background-color: #d9d9d9;
        color: #000000;
        font-weight: bold;
        font-size: 16px;
        padding: 0.7rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
    }

    .buttonConsultation:hover {
        background-color: #c9c9c9;
    }
</style>