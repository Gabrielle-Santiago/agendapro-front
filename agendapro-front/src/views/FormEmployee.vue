<script lang="ts" setup>
import Form from '../components/FormRegister.vue';
</script>

<template>
    <div>
        <form action="" method="post">
            <Form />
            <slot>
                <label for="proof">Certificação</label>
                <input type="text" name="proof" placeholder="Escreva em qual instituição em que se formou">
                <button @click="" type="submit">Cadastrar</button>
            </slot>   
        </form>
    </div>
</template>

<style></style>