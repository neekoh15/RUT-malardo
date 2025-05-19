<template>
  <div class="container">
    <section class="header">
      <div class="header__logo">
        <img src="/icons/icon__logo_header.svg" alt="" />
        <h1 class="title">RUT - REGISTRO ÚNICO TRIBUTARIO</h1>
      </div>

      <div class="header__cuits">
        <div class="cuits">
          <b class="cuit_p">JUAN PÉREZ</b> [23-11111111-3]
          <img src="/icons/icon__exit_cuit.svg" alt="" />
        </div>

        <div class="cuits">
          REPRESENTANDO A: <b class="cuit_s">CARLA MARTÍNEZ</b> [27-22222222-4]
          <img src="/icons/icon__persona_cuit.svg" alt="" />
        </div>
      </div>
    </section>

    <section class="breadcrumb">
      <div class="content">Inicio <b>></b><b>Domicilios</b></div>
    </section>

    <section class="stepper">
      <div class="steps">
        <div class="hr"></div>
        <div class="step"  v-for="step in steps">
          <div class="step__number" :class="{seleccionado: step.seleccionado}">{{ step.number }}</div>

          <div class="step__name" :class="{text_seleccionado: step.seleccionado}">
            {{ step.name }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const steps = [
  {
    number: 1,
    name: "Domicilios",
    seleccionado: true
  },
  {
    number: 2,
    name: "Jurisdicciones",
  },
  {
    number: 3,
    name: "Actividades",
  },
  {
    number: 4,
    name: "Impuestos",
  },
  {
    number: 5,
    name: "Puntos de venta",
  },
  {
    number: 6,
    name: "Constancias",
  },
];
</script>

<style scoped>
.header {
  margin-top: 1rem;
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.header .header__logo {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.header__logo img {
  height: 32px;
  width: auto;
}

.header__cuits {
  text-align: right;
}

.cuits {
  display: flex;
  justify-content: right;
  gap: 0.3rem;
}
.cuits b {
  font-weight: bold;
}
.cuits .cuit_p {
  color: var(--vt-c-main);
}

.cuits .cuit_s {
  color: var(--vt-c-secu);
}

.breadcrumb {
  background-color: var(--vt-c-main);
  color: white;
  height: 2rem;
  display: flex;
  align-items: center;
}

.breadcrumb .content {
  max-width: 1280px;
  margin-inline: auto;
  font-weight: 300;
  display: flex;
  gap: 0.5rem;
  width: 100%;
}

.stepper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 2rem;
  margin-bottom: 4rem;
}

.stepper .hr {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: #666;
  z-index: -1 !important;
}

.stepper .steps {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8rem;
  text-align: center;
  justify-content: center;
  width: fit-content;
}

.steps .step {
  width: fit-content;
  position: relative;
}

.step .step__number {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #666;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.steps .step__name {
  position: absolute;
  left: 0;
  bottom: -2rem;
  transform: translate(-25%, 0%);
  text-wrap: nowrap;
}

.seleccionado {
    background-color: var(--vt-c-main) !important;
    color: white;
}
.text_seleccionado {
    font-weight: bold;
    color: var(--vt-c-main);
}

@media (max-width: 1280px) {
  .header,
  .breadcrumb .content {
    margin-inline: 2rem;
  }
}
</style>
