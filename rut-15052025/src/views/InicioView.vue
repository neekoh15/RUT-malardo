<template>
  <main>
    <section class="domicilios" v-if="panel == 'domicilios'">
      <div class="content">
        <div class="panel__header">
          <div
            class="panel__title"
            style="display: flex; gap: 0.5rem; align-items: center"
          >
            <img src="/icons/icon__panel_domicilios.svg" alt="" />
            <h2>Domicilios</h2>
          </div>

          <p>
            Te mostramos los domicilios que informaste. Indicá o actualizá el
            tipo de domicilio provincial de cada uno, en caso de corresponder.
            La denominación “fiscal provincial/jurisdicción sede” solo puede
            asignarse a un domicilio.
          </p>
        </div>

        <h3>Tus domicilios</h3>

        <div class="container__domicilios">
          <div class="tarjeta">
            <div class="tarjeta__title">
              <h4>Fiscal</h4>
              <button class="b__primary" @click="openMenu('fiscal')">
                MODIFICAR
              </button>
            </div>

            <div
              :class="{
                domAlert: !isEqual(
                  domicilioOriginal,
                  domicilios.domicilioFiscal
                ),
              }"
              style="margin-block: 0.5rem"
            >
              <img
                src="/icons/icon__alert_domicilio.svg"
                alt="alert_domicilio"
                v-if="!isEqual(domicilioOriginal, domicilios.domicilioFiscal)"
              />
              <div>
                <p>
                  <b
                    >{{ domicilios.domicilioFiscal.calle }}
                    {{ domicilios.domicilioFiscal.numero }}
                    ({{ domicilios.domicilioFiscal.cp }}),
                    {{
                      domicilios.domicilioFiscal.piso
                        ? `Piso ${domicilios.domicilioFiscal.piso},`
                        : ""
                    }}
                    {{
                      domicilios.domicilioFiscal.localidad ==
                      "CIUDAD AUTÓNOMA DE BUENOS AIRES"
                        ? "CABA"
                        : ""
                    }},
                    {{
                      domicilios.domicilioFiscal.provincia ==
                      "CIUDAD AUTÓNOMA DE BUENOS AIRES"
                        ? "CABA"
                        : ""
                    }}</b
                  >
                </p>

                <p
                  v-if="!isEqual(domicilioOriginal, domicilios.domicilioFiscal)"
                >
                  Para completar la modificación del domicilio fiscal tenés que
                  avanzar hasta confirmar los pasos 2-Jurisdicciones y
                  3-Actividades.
                </p>
              </div>
            </div>

            <div class="input__select">
              <b>Tipo de domicilio provincial</b>
              <div>
                <div class="multi__select">
                  <div class="seleccionados">
                    <div
                      class="seleccionado"
                      v-for="t in domicilios.domicilioFiscal.tipo"
                    >
                      x
                      <div>{{ t }}</div>
                    </div>
                  </div>

                  <img src="/icons/icon__chevron.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="tarjeta">
            <div class="tarjeta__title">
              <h4>Real</h4>
              <button class="b__primary" @click="openMenu('real')">
                MODIFICAR
              </button>
            </div>

            <p>
              {{ domicilios.domicilioReal.calle }}
              {{ domicilios.domicilioReal.numero }}
              ({{ domicilios.domicilioReal.cp }}),
              {{
                domicilios.domicilioReal.piso
                  ? `Piso ${domicilios.domicilioReal.piso},`
                  : ""
              }}
              {{
                domicilios.domicilioReal.localidad ==
                "CIUDAD AUTÓNOMA DE BUENOS AIRES"
                  ? "CABA"
                  : ""
              }},
              {{
                domicilios.domicilioFiscal.provincia ==
                "CIUDAD AUTÓNOMA DE BUENOS AIRES"
                  ? "CABA"
                  : ""
              }}
            </p>

            <div class="input__select">
              <b>Tipo de domicilio provincial</b>
              <div>
                <div class="multi__select">
                  <div class="seleccionados">
                    <div
                      class="seleccionado"
                      v-for="t in domicilios.domicilioReal.tipo"
                    >
                      x
                      <div>{{ t }}</div>
                    </div>
                  </div>

                  <img src="/icons/icon__chevron.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="tarjeta otro">
            <div class="tarjeta__title">
              <h4>Otro domicilio</h4>
              <button class="b__primary" @click="openMenu('otro')">
                AGREGAR
              </button>
            </div>
            <p>
              Si lo necesitas podés agregar un nuevo domicilio de “Locales y
              establecimientos”
            </p>
          </div>
        </div>
      </div>

      <div class="section__actions">
        <button class="b__terciary">VOLVER</button
        ><RouterLink to="/jurisdicciones"> 
          <button class="b__secundary">SIGUIENTE</button></RouterLink>
      </div>
    </section>

    <section class="modificar__domicilio" v-else>
      <div class="content">
        <div class="panel__header">
          <div
            class="panel__title"
            style="display: flex; gap: 0.5rem; align-items: center"
          >
            <img src="/icons/icon__panel_domicilios.svg" alt="" />
            <h2>Domicilios</h2>
          </div>
        </div>

        <h3>Modificar domicilio</h3>

        <div class="contenedor__modificar">
          <div class="tarjeta">
            <div class="declarar__domicilio fcol">
              <h4>Domicilio a declarar</h4>
              <div>
                <select
                  name="selectDomicilio"
                  id="selectDomicilio"
                  style="width: 50%"
                  :v-model="datosDomicilio"
                  @change="cambiarDomicilioSeleccionado($event)"
                >
                  <option :value="JSON.stringify(emptyDomicilio)">
                    <b>Agregar nuevo domicilio</b>
                  </option>
                  <option
                    :value="JSON.stringify(d)"
                    v-for="d in domiciliosRegistrados"
                    :selected="isEqual(d, datosDomicilio)"
                  >
                    {{ d.calle }}
                    {{ d.numero }};
                    {{ d.cp }}
                    {{ d.piso ? `; Piso ${d.piso}` : `` }}
                    {{
                      isEqual(d, domicilios.domicilioFiscal)
                        ? " (Domicilio fiscal)"
                        : ""
                    }}
                  </option>
                </select>
              </div>
            </div>

            <div class="datos__domicilio fcol">
              <div class="fila">
                <div class="campo">
                  <h5>Código postal *</h5>
                  <input
                    type="text"
                    name="cp"
                    id="cp"
                    v-model="domicilioSeleccionado.cp"
                  />
                </div>

                <div class="campo">
                  <h5>Provincia *</h5>
                  <input
                    type="text"
                    name="provincia"
                    id="provincia"
                    v-model="domicilioSeleccionado.provincia"
                  />
                </div>

                <div class="campo">
                  <h5>Localidad *</h5>
                  <input
                    type="text"
                    name="localidad"
                    id="localidad"
                    v-model="domicilioSeleccionado.localidad"
                  />
                </div>
              </div>

              <div class="fila">
                <div class="campo">
                  <h5>Calle *</h5>
                  <input
                    type="text"
                    name="calle"
                    id="calle"
                    v-model="domicilioSeleccionado.calle"
                  />
                </div>
                <div class="campo">
                  <h5>Número *</h5>
                  <input
                    type="text"
                    name="numero"
                    id="numero"
                    v-model="domicilioSeleccionado.numero"
                  />
                </div>
              </div>

              <div class="fila">
                <div class="campo">
                  <h5>Piso</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.piso"
                  />
                </div>
                <div class="campo">
                  <h5>Oficina, depto o local</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.oficina"
                  />
                </div>
                <div class="campo">
                  <h5>Sector</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.sector"
                  />
                </div>
                <div class="campo">
                  <h5>Torre</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.torre"
                  />
                </div>
              </div>

              <div class="fila">
                <div class="campo">
                  <h5>Manzana</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.manzana"
                  />
                </div>
                <div class="campo">
                  <h5>Partida N°</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.partida"
                  />
                </div>
                <div class="campo">
                  <h5>Latitud</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.latitud"
                  />
                </div>
                <div class="campo">
                  <h5>Longitud</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.longitud"
                  />
                </div>
              </div>
            </div>

            <div class="tipo__domicilio fcol">
              <div class="input__select">
                <div style="display: flex; align-items: center; gap: 0.5rem">
                  <b>Tipo de domicilio provincial * </b>
                  <img src="/icons/icon__info2.svg" alt="" />
                </div>

                <div>
                  <div class="multi__select" @click="openSelect(1)">
                    <div class="seleccionados">
                      <div
                        class="seleccionado"
                        v-for="t in domicilioSeleccionado.tipo"
                        @click="seleccionarTipoDomicilio(t)"
                      >
                        x {{ t }}
                      </div>
                    </div>

                    <div class="opciones" v-if="showTipoDomicilios">
                      <div
                        class="opcion"
                        v-for="tipo in tipoDomicilios"
                        @click="seleccionarTipoDomicilio(tipo)"
                        :class="{
                          opcionSeleccionada:
                            domicilioSeleccionado.tipo.includes(tipo),
                        }"
                      >
                        {{ tipo }}
                      </div>
                    </div>

                    <img src="/icons/icon__chevron.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="datos__adicionales fcol">
              <div class="fila">
                <div class="campo">
                  <h5>Nombre del local</h5>
                  <input
                    type="text"
                    name="nombreLocal"
                    id="nombreLocal"
                    v-model="domicilioSeleccionado.nombreLocal"
                  />
                </div>
              </div>

              <div class="fila">
                <div class="campo">
                  <h5>Tipo de dato adicional</h5>
                  <select
                    name="tipoDatoAdicional"
                    id="tipoDatoAdicional"
                    v-model="domicilioSeleccionado.tipoDatoAdicional"
                  >
                    <option :value="o.value" v-for="o in tipoDatoAdicional">
                      {{ o.dato }}
                    </option>
                  </select>
                </div>
                <div class="campo">
                  <h5>Dato adicional</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="domicilioSeleccionado.datoAdicional"
                  />
                </div>
              </div>
            </div>

            <div
              class="adjuntar__documentacion fcol"
              v-if="domicilioSeleccionado.id == 'empty'"
            >
              <div class="fila">
                <div class="mensaje__info">
                  <img src="/icons/icon__info.svg" alt="" />
                  <b
                    >Tenes que adjuntar
                    <a href="">documentación respaldatoria</a></b
                  >, la cual vericaremos para validarlo.
                </div>
              </div>

              <div class="fila">
                <p>
                  Adjuntar documentación respaldatoria (Formato permitido:
                  archivo color JPG o PDF. Tamaño máximo: XX MB).
                </p>
                <label
                  for="file"
                  class="b__primary file"
                  style="cursor: pointer"
                >
                  <img src="/icons/icon__file.svg" alt="" /> ADJUNTAR
                </label>
                <input
                  type="file"
                  id="file"
                  style="display: none"
                  v-on:change="setFilePath($event)"
                />
              </div>

              <p v-if="filePath">
                Document adjuntado: <b>{{ filePath }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section__actions">
        <button class="b__terciary" @click="cerrarMenu()">VOLVER</button>
        <button class="b__primary" @click="checkModificacionesDomicilio()">
          GUARDAR
        </button>
      </div>
    </section>

    <div
      class="popup"
      v-if="popupCambioDomicilioFiscal || popupModificacionDomicilioActual"
    >
      <div
        class="cambio__domicilio_fiscal tarjeta__popup"
        v-if="popupCambioDomicilioFiscal"
      >
        <div class="popup__contenido">
          <div class="popup__title">
            <h5>Modificar domicilio fiscal</h5>
          </div>
          <p>
            Estás por modificar el <b>domicilio fiscal</b> de
            {{ datosDomicilio.calle }} {{ datosDomicilio.numero }}
            {{
              datosDomicilio.localidad == "CIUDAD AUTÓNOMA DE BUENOS AIRES"
                ? "CABA"
                : datosDomicilio.localidad
            }}
            por
            <b>
              {{ domicilioSeleccionado.calle }}
              {{ domicilioSeleccionado.numero }}
              {{
                domicilioSeleccionado.localidad ==
                "CIUDAD AUTÓNOMA DE BUENOS AIRES"
                  ? "CABA"
                  : domicilioSeleccionado.localidad
              }}
            </b>
          </p>

          <p>
            Tené en cuenta que para completar el cambio de domicilio fiscal
            tenés que <b>confirmar tus jurisdicciones y actividades.</b>
          </p>
        </div>

        <div class="popup__buttons">
          <button class="b__terciary" @click="cerrarPopup">CANCELAR</button>
          <button
            class="b__primary"
            @click="cerrarPopup(), guardarModificacionesDeDomicilio()"
          >
            CONTINUAR
          </button>
        </div>
      </div>

      <div class="cambio__domicilio tarjeta__popup" v-else>
        <div class="popup__contenido">
          <div class="popup__title">
            <h5>Documentación respaldatoria</h5>
          </div>

          <div class="fila">
            <div>
              <b>Adjuntá <a href="">documentación respaldatoria</a></b> del
              domicilio, la verificaremos para validarlo.
            </div>
          </div>

          <div class="fila">
            <p>Adjuntar (formato permitido: archivo color JPG o PDF). *</p>
            <label for="file" class="b__secundary file" style="cursor: pointer">
              <img src="/icons/icon__file_sec.svg" alt="" /> ADJUNTAR
            </label>

            <input
              type="file"
              id="file"
              style="display: none"
              v-on:change="setFilePath($event)"
            />
          </div>

          <p v-if="filePath">
            Document adjuntado: <b>{{ filePath }}</b>
          </p>
        </div>

        <div class="popup__buttons">
          <button class="b__terciary" @click="cerrarPopup">CANCELAR</button>
          <button
            class="b__primary"
            @click="cerrarPopup(), guardarModificacionesDeDomicilio()"
          >
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import HeaderAFIP from "@/components/HeaderAFIP.vue";
import {
  useDomiciliosStore,
  tipoDomicilios,
  domiciliosRegistrados,
  tipoDatoAdicional,
  emptyDomicilio,
  domicilioOriginal,
  onJuridiscciones
} from "@/stores/domicilios.js";

onJuridiscciones.value = false

const panel = ref("domicilios");

const tipoDomicilioAModificar = ref("");
const domicilioAModificar = ref(null);
const datosDomicilio = ref({});

const showTipoDomicilios = ref(false);

const domicilios = useDomiciliosStore();

const domicilioSeleccionado = ref({});

const popupCambioDomicilioFiscal = ref(false);
const popupModificacionDomicilioActual = ref(false);

const filePath = ref("");

function seleccionarTipoDomicilio(tipo) {
  if (domicilioSeleccionado.value.tipo.includes(tipo)) {
    domicilioSeleccionado.value.tipo = domicilioSeleccionado.value.tipo.filter(
      (t) => t != tipo
    );
  } else {
    domicilioSeleccionado.value.tipo.push(tipo);
  }
}

function cerrarMenu() {
  panel.value = "domicilios";
  domicilioAModificar.value = null;
}

function validarDatosObligatorios() {
  return;
}

function guardarDatosDomicilio() {}

function openMenu(menu) {
  panel.value = "modificar domicilio";
  domicilioAModificar.value = menu;

  if (menu == "fiscal") {
    datosDomicilio.value = JSON.parse(
      JSON.stringify(domicilios.domicilioFiscal)
    );

    domicilioSeleccionado.value = JSON.parse(
      JSON.stringify(domicilios.domicilioFiscal)
    );
  }

  if (menu == "real") {
    datosDomicilio.value = JSON.parse(JSON.stringify(domicilios.domicilioReal));

    domicilioSeleccionado.value = JSON.parse(
      JSON.stringify(domicilios.domicilioReal)
    );
  }
}

function openSelect(number) {
  if (number == 1) {
    showTipoDomicilios.value = !showTipoDomicilios.value;
  }
}

function cambiarDomicilioSeleccionado(event) {
  domicilioSeleccionado.value = JSON.parse(event.target.value);
}

function checkModificacionesDomicilio() {
  console.log(datosDomicilio.value.id);
  console.log(domicilioSeleccionado.value.id);

  if (datosDomicilio.value.id !== domicilioSeleccionado.value.id) {
    if (domicilioSeleccionado.value.tipo.includes("Jurisdicción sede")) {
      popupCambioDomicilioFiscal.value = true;
    }
  } else if (!isEqual(datosDomicilio.value, domicilioSeleccionado.value)) {
    popupModificacionDomicilioActual.value = true;
  } else {
    cerrarMenu();
  }
}

function guardarModificacionesDeDomicilio() {
  console.log("Guardando modificaciones ...");
  console.log("domicilioAModificar: ", domicilioAModificar.value);

  if (domicilioAModificar.value == "fiscal") {
    console.log("Cambiando domicilio fiscal");

    domicilios.domicilioFiscal = JSON.parse(
      JSON.stringify(domicilioSeleccionado.value)
    );
  }

  if (domicilioAModificar.value != "fiscal") {
    domicilios.domicilioReal = JSON.parse(
      JSON.stringify(domicilioSeleccionado.value)
    );
  }

  let d = domiciliosRegistrados.value.find(
    (d) => d.id == datosDomicilio.value.id
  );
  let index = domiciliosRegistrados.value.indexOf(d);

  domiciliosRegistrados.value[index].tipo = [];
  d = domiciliosRegistrados.value.find(
    (d) => d.id == domicilioSeleccionado.value.id
  );
  index = domiciliosRegistrados.value.indexOf(d);

  domiciliosRegistrados.value[index] = JSON.parse(
    JSON.stringify(domicilioSeleccionado.value)
  );

  cerrarMenu();
}

const isEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) == JSON.stringify(obj2);
};

function setFilePath(event) {
  console.log("New file: ", event.target.value);
  filePath.value = event.target.value;
}

function cerrarPopup() {
  popupCambioDomicilioFiscal.value = false;
  popupModificacionDomicilioActual.value = false;
}
</script>

<style scoped>
main {
  max-width: 1280px;
  margin-inline: auto;
}

section.domicilios,
section.modificar__domicilio {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section__actions {
  display: flex;
  justify-content: right;
  gap: 1rem;
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

.domicilios .content .panel__header p {
  padding-block: 0.5rem;
}

.container__domicilios {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tarjeta {
  background-color: white;
  padding: 1rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.tarjeta.otro {
  background-color: inherit;
  box-shadow: none;
}

.tarjeta__title {
  display: flex;
  justify-content: space-between;
}

.contenedor__modificar .tarjeta {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.opcionSeleccionada {
  background-color: var(--vt-c-light);
  color: var(--vt-c-main);
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tarjeta__popup {
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30%;
}

.popup__contenido {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.popup__contenido .popup__title {
  color: var(--vt-c-main);
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}

.popup__buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
}

.mensaje__info {
  display: flex;
  gap: 0.5rem;
  border: 1px solid var(--vt-c-main);
  width: 100%;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  border-radius: 4px;
  background-color: #e7f5fb;
  color: var(--vt-c-main);
  margin-block: 1rem 0.5rem;
}

.domAlert {
  background-color: #fef2de;
  border: 1px solid #93600b;
  display: flex;
  padding-inline: 0.5rem;
  gap: 0.5rem;
  padding-block: 0.3rem;
  border-radius: 4px;
  color: #93600b;
}

@media (max-width: 1280px) {
  main {
    margin-inline: 2rem;
  }
}
</style>
