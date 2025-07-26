<script lang="ts" setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    interface ConsulationForm {
        patientId: number;
        title: string;
        startConsultation: string;
        endConsultation: string;
        employeeId: string;
    }

    const patientId = 1;
    const title = ref<string>("");
    const startConsultation = ref<string>("");
    const employeeId = ref<string>("medico1");
    const dateConsultation = ref<string>("");
    const hours = ref<string[]>([]);

    const addMinutesToTime = (time: string, minutesToAdd: number): string => {
        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes + minutesToAdd, 0, 0);

        const h = date.getHours().toString().padStart(2, '0');
        const m = date.getMinutes().toString().padStart(2, '0');
        return `${h}:${m}:00`;
    };

    const router = useRouter();
    const handleSubmit = async () => {
        
        if (!title.value || !dateConsultation.value || !startConsultation.value) {
            alert("Por favor, preencha todos os campos obrigatórios: Título, Data e Horário.");
            return;
        }

        const dateStr = new Date(dateConsultation.value).toISOString().split('T')[0];
        const startTime = `${startConsultation.value}:00`;
        const endTime = addMinutesToTime(startConsultation.value, 40);

        const formattedStartDateTime = `${dateStr}T${startTime}`;
        const formattedEndDateTime = `${dateStr}T${endTime}`;

        const ConsultationData: ConsulationForm = {
            patientId,
            title: title.value,
            startConsultation: formattedStartDateTime,
            endConsultation: formattedEndDateTime,
            employeeId: employeeId.value
        };

        console.log("Payload para o Backend:", ConsultationData);

        try {
            const response = await axios.post("http://localhost:8080/api/consultations/create", ConsultationData);
            alert("Consulta agendada com sucesso!");
            console.log(response.data);

            const calendarDiv = document.getElementById("calendarDiv");
            if (calendarDiv) {
                calendarDiv.style.display = "block";
                alert("Que tal vincular a sua agenda pessoal do Google");

            }

           
        } catch (error) {
            console.error("Erro ao agendar consulta:", error);
            alert("Falha ao agendar consulta.");

            if (axios.isAxiosError(error) && error.response && error.response.data) {
            console.error("Resposta de erro do backend:", error.response.data);
            alert(`Erro: ${error.response.data.message || 'Erro desconhecido'}`);
            }
        }
    };

    const getConsultationHours = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/consultations/available-slots", {
            params: {
                date: dateConsultation.value,
                employeeId: employeeId.value
            }
            });
            hours.value = response.data;
            console.log("Horários disponíveis:", hours.value);
        } catch (error) {
            console.error("Erro ao buscar horários:", error);
        }
    };


    const googleEmail = ref("");
    const googleCalendar = async () => {

    interface CalendarForm {
        title: string;
        start: string;
        end: string;
        emailPatient: string;
    }

    const dateStr = new Date(dateConsultation.value).toISOString().split('T')[0];
    const startTime = `${startConsultation.value}:00`;
    const endTime = addMinutesToTime(startConsultation.value, 30);

    const formattedStartDateTime = `${dateStr}T${startTime}`;
    const formattedEndDateTime = `${dateStr}T${endTime}`;

    const CalendarData: CalendarForm = {
        title: title.value,
        start: formattedStartDateTime,
        end: formattedEndDateTime,
        emailPatient: googleEmail.value
    }

    try {
        const response = await axios.post("http://localhost:8080/calendar/create", CalendarData);
        alert("Adicionado ao Google Calendar com sucesso!");
        console.log(response);

        await router.push('/homePatient');
    } catch (error) {
        console.error("Erro ao adicionar ao Google Calendar:", error);
        alert("Erro ao adicionar ao Google Calendar.");
    }
};
    const onClickGoogleCalendar = async () => {
        await googleCalendar();
    };

    const onClickSkipGoogleCalendar = async () => {
        await router.push("/homePatient");
    };

</script>

<template>
  <div class="bodyConsultation">
    <h1 class="title">Agendar Consulta</h1>
    <div class="calendarOverlay" id="overlay" style="display: none;"></div>

    <div class="calendarDiv" id="calendarDiv" style="display: none;">
        <form @submit.prevent="googleCalendar">
            <h2 class="titleCalendar">Título</h2>
            <input type="text" class="inputCalendar" v-model="title" readonly />

            <h2 class="titleCalendar">Data</h2>
            <input type="date" class="inputCalendar" v-model="dateConsultation" readonly />

            <h2 class="titleCalendar">Horário</h2>
            <input type="text" class="inputCalendar" v-model="startConsultation" readonly />

            <h2 class="titleCalendar">Email Google</h2>
            <input type="email" class="inputCalendar" v-model="googleEmail" required />

            <div class="calendarButtons">
                <button type="submit" class="buttonCalendar" @click="onClickGoogleCalendar">Adicionar</button>
                <button type="button" class="buttonCalendar cancel" @click="onClickSkipGoogleCalendar">Sair</button>
            </div>
        </form>
    </div>


    <form @submit.prevent="handleSubmit" class="formConsultation">
      <input id="title" type="text" class="inputConsultation" v-model="title" placeholder="Escreva um título" />
      
      <input id="dateConsultation" type="date" class="inputConsultation" v-model="dateConsultation" placeholder="Selecione uma data" />

      <input type="text" class="inputConsultation" placeholder="Selecione um horário" @click="getConsultationHours" readonly />

      <div id="startConsultation" name="startConsultation" v-if="hours.length > 0">
        <select class="hoursSelect" v-model="startConsultation">
          <option v-for="(hour, index) in hours" :key="index"> {{ hour }} </option>
        </select>
      </div>

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

    .hoursSelect{
        width: 300px;
        height: 38px;
        font-size: 14px;
    }

    .calendarOverlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .calendarDiv {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;

        width: 400px;
        max-width: 90%;
        background-color: #ffffff;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titleCalendar {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin-top: 1rem;
        margin-bottom: 0.3rem;
        text-align: left;
        width: 100%;
    }

    .inputCalendar {
        width: 100%;
        padding: 0.7rem 1rem;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-bottom: 1rem;
        outline: none;
        transition: border 0.2s;
    }

    .inputCalendar:focus {
        border-color: #4a90e2;
    }

    .calendarButtons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 10px;
        margin-top: 1rem;
    }

    .buttonCalendar {
        flex: 1;
        padding: 0.8rem 1rem;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        background-color: #4a90e2;
        color: white;
        transition: background-color 0.2s ease-in-out;
    }

    .buttonCalendar:hover {
        background-color: #357abd;
    }

    .buttonCalendar.cancel {
        background-color: #d9534f;
    }

    .buttonCalendar.cancel:hover {
        background-color: #c9302c;
    }
</style>