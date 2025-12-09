<script setup lang="ts">
import Componente02 from './components/Componente02.vue';
import Laboratorio from './components/Laboratorio.vue';

</script>

<template>
  <header class="fixed top-0 w-full bg-slate-800 py-3 text-center shadow-md">
    <p class="text-xl text-white">Mi Proyecto Vue + Tailwind</p>
  </header>
<div class="min-h-screen bg-white flex justify-center items-center pt-20 gap-8">

  <Laboratorio />  
  <Componente02 />

</div>
<footer class="fixed bottom-0 w-full text-white bg-slate-800 text-center py-1">
  <p class="text-sm">Creado por Samuel Durán con Vue y Tailwind | <span class="text-blue-400 font-bold">2025</span></p>
</footer>
</template>