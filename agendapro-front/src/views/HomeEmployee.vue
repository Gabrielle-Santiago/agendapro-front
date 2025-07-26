<script lang="ts" setup></script>

<template>
  <div class="bodyPatient">
    <div class="gridPatient">
      <div class="gridsPatients">
        <h1 class="title">Consultas Agendadas</h1>
        <div class="headers">
          <span class="headerPatient">Paciente</span>
          <span class="headerHour">Horário</span>
          <span class="headerDate">Data</span>       
          <span class="headerDescribe">Descrição</span>
        </div>

        <div class="line"></div>

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
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 0.5rem;
    }

    .line {
        border-bottom: 1px solid #888;
        margin-bottom: 40px;
    }
</style>