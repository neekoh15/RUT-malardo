<template>
  <main>
    <section>
      <div class="content">
        <div class="panel__header">
          <div
            class="panel__title"
            style="display: flex; gap: 0.5rem; align-items: center"
          >
            <img src="/icons/icon__panel_domicilios.svg" alt="" />
            <h2>Jurisdicciones</h2>
          </div>

          <p>
            Las jurisdicciones son las provincias donde realizás actividades.
            Los domicilios que informaste en el paso anterior determinan tus
            jurisdicciones. También podés declarar otras jurisdicciones por
            obtener ingresos o gastos sin un domicilio especifico.
          </p>
        </div>
        <h3>Jurisdicciones con domicilios declarados</h3>
        <div class="tarjeta" v-for="d in domiciliosDeclarados">
          <div class="tarjeta__title">
            <h3>{{ d.provincia }}</h3>
            <button class="b__primary">MODIFICAR</button>
          </div>

          <div><b>Inicio de jurisdicción:</b> 01/2025</div>
          <div style="display: flex; gap: 1rem">
            <b v-for="t in d.tipo" style="font-weight: 500; color: #333">{{
              t
            }}</b>
          </div>
        </div>

        <h3>Jurisdicciones por ingresos obtenidos o gastos realizados</h3>

        <div>
          ¿Obtenés ingresos o realizás gastos vinculados a tu acitivdad en otra
          jurisdicción? *
        </div>

        <div>
          <div>
            <label for=""> <input type="radio" name="" id="" /> Sí </label>
          </div>

          <label for="">
            <input type="radio" name="" id="" checked /> No
          </label>
        </div>
      </div>
    </section>

    <div class="section__actions">
      <RouterLink to="/">
        <button class="b__terciary">VOLVER</button>
      </RouterLink>

      <RouterLink to="/jurisdicciones">
        <button class="b__secundary">SIGUIENTE</button></RouterLink
      >
    </div>
  </main>
</template>

<script setup>
import { useDomiciliosStore, onJuridiscciones } from "@/stores/domicilios";

onJuridiscciones.value = true;

const domicilios = useDomiciliosStore();

const domiciliosDeclarados = [
  domicilios.domicilioFiscal,
  domicilios.domicilioReal,
];
</script>

<style scoped>
main {
  max-width: 1280px;
  margin-inline: auto;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 1rem;
}

.tarjeta {
  padding: 1rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tarjeta__title {
  display: flex;
  justify-content: space-between;
}

.section__actions {
  margin-top: 2rem;
  display: flex;
  justify-content: right;
  gap: 1rem;
}
</style>
