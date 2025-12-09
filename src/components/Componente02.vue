<template>
    <div class="bg-gray-200 p-8 rounded-xl shadow-md text-center">
        <h2 class="text-2xl font-bold mb-6 text-gray-700">
            Laboratorio de lógica y estilos
        </h2>
        <div class="text-white p-10 rounded-lg shadow-xl cursor-pointer transition-all duration-500 transform mx-auto w-64"
            :class="estadoActivo ? 'bg-green-500 scale-110 rotate-3' : 'bg-red-500 scale-100 rotate-0'">
            <p class="text-xl font-bold">{{estadoActivo?'Estoy Activo':'Estoy Inactivo  '}}

            </p>
            <p class="text-sm mt-2 opacity-80">El estado es: {{ estadoActivo }}
            </p>
        </div>
        <button @click="alternarEstado"
            class="mt-8 bg-slate-800 text-white py-2 px-6 rounded hover:bg-slate-700 active:scale-95 transition">Cambiar
            Estado

        </button>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
const estadoActivo = ref(false);

const alternarEstado = () => { estadoActivo.value = !estadoActivo.value }

</script>