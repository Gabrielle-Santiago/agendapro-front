<script lang="ts" setup>
  import axios from 'axios';
  import { ref } from 'vue';

  interface Consultation {
    title: string;
    startConsultation: string;
    endConsultation: string;
  }

  const consultations = ref<Consultation[]>([]);

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('pt-BR'); 
  };

  const formatHour = (isoStart: string, isoEnd: string): string => {
    const start = new Date(isoStart);
    const end = new Date(isoEnd);

    const format = (d: Date) =>
      d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    return `${format(start)} às ${format(end)}`;
  };

  const getConsultation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/consultations/allConsultations");
      consultations.value = response.data;
      console.log("Consultas:", consultations.value);
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  };
</script>

<template>
  <div class="bodyPatient">
    <div class="gridPatient">
      <div class="gridsPatients">
        <h1 class="title">Consultas Agendadas</h1>

        <div class="headers">
          <span class="headerTitle">Título</span>
          <span class="headerHour">Horário</span>
          <span class="headerDate">Data</span>
        </div>

        <div class="line"></div>

        <div v-if="consultations.length === 0" class="noConsultations"> Nenhuma consulta agendada. </div>

        <div
          v-for="(consultation, index) in consultations"
          :key="index"
          class="consultationItem"
        >
          <span class="itemTitle">{{ consultation.title }}</span>
          <span class="itemHour">{{ formatHour(consultation.startConsultation, consultation.endConsultation) }}</span>
          <span class="itemDate">{{ formatDate(consultation.startConsultation) }}</span>
        </div>

        <button @click="getConsultation" class="buttonPatient">Atualizar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bodyPatient {
    padding: 2rem;
    text-align: center;
    margin-top: 6rem;
  }

  .title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 1.5rem;
  }

  .gridPatient {
    display: flex;
    justify-content: center;
  }

  .gridsPatients {
    background-color: #fff9f4;
    border: 2px solid #888;
    border-radius: 8px;
    width: 800px;
    padding: 2rem;
  }

  .headers {
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0.5rem;
  }

  .line {
    border-bottom: 1px solid #888;
    margin-bottom: 1rem;
  }

  .consultationItem {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    font-size: 18px;
    border-bottom: 1px solid #eee;
  }

  .itemTitle,
  .itemHour,
  .itemDate {
    width: 30%;
    text-align: center;
  }

  .buttonPatient {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    margin: 2rem auto 0;
    display: block;
  }

  .buttonPatient:hover {
    background-color: #f0f0f0;
  }

  .noConsultations {
    font-size: 18px;
    color: #999;
    margin-bottom: 2rem;
  }
</style>
