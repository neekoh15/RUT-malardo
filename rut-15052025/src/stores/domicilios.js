
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const tipoDatoAdicional = [
    {
        value: '',
        dato: ''
    },
    {
        value: '1',
        dato: 'Tipo dato 1'
    },
    {
        value: '2',
        dato: 'Tipo dato 2'
    },
    {
        value: '3',
        dato: 'Tipo dato 3'
    }
]

export const tipoDomicilios = [
    'Jurisdicción sede',    
    'Principal de actividades',
    'Fiscal jurisdiccional',
    'Sin actividad',
]

export const emptyDomicilio = {
    id: 'empty',
    cp: '',
    provincia: '',
    localidad: '',
    calle: '',
    numero: '',
    piso: '',
    oficina: '',
    sector: '',
    torre: '',
    manzana: '',
    partida: '',
    latitud: '',
    longitud: '',

    tipo: [],

    nombreLocal: '',
    tipoDatoAdicional: '',
    datoAdicional: ''
}

export const domiciliosRegistrados = ref(
    [
    {   
        id: 0,
        cp: '1406',
        provincia: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
        localidad: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
        calle: 'Av. Reservistas Argentinos',
        numero: '219',
        piso: '2',
        oficina: '',
        sector: '',
        torre: '',
        manzana: '',
        partida: '',
        latitud: '',
        longitud: '',

        tipo: ['Jurisdicción sede', 'Principal de actividades'],

        nombreLocal: '',
        tipoDatoAdicional: '',
        datoAdicional: ''
    },

    {   
        id: 1,
        cp: '1406',
        provincia: 'CIUDAD AUTÓNOMA BUENOS AIRES',
        localidad: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
        calle: 'Av. Álvarez Jonte',
        numero: '5922',
        piso: '',
        oficina: '',
        sector: '',
        torre: '',
        manzana: '',
        partida: '',
        latitud: '',
        longitud: '',

        tipo: [],

        nombreLocal: '',
        tipoDatoAdicional: '',
        datoAdicional: ''
    },

    {   
        id: 2,
        cp: '1406',
        provincia: 'CIUDAD AUTÓNOMA BUENOS AIRES',
        localidad: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
        calle: 'Alcaraz',
        numero: '5437',
        piso: '2',
        oficina: '4',
        sector: '',
        torre: '',
        manzana: '',
        partida: '',
        latitud: '',
        longitud: '',

        tipo: [],

        nombreLocal: '',
        tipoDatoAdicional: '',
        datoAdicional: ''
    },

    {   
        id: 3,
        cp: '1406',
        provincia: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
        localidad: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
        calle: 'Nazarre',
        numero: '5421',
        piso: '2',
        oficina: '',
        sector: '',
        torre: '',
        manzana: '',
        partida: '',
        latitud: '',
        longitud: '',

        tipo: ['Sin actividad'],

        nombreLocal: '',
        tipoDatoAdicional: '',
        datoAdicional: ''

    }
]
)

export const domicilioOriginal = domiciliosRegistrados.value[0]

export const onJuridiscciones = ref(false)

export const useDomiciliosStore = defineStore('domicilios', {
    state: () => ({

        domicilioAModificar: '', // Domicilio Fiscal | Domicilio Real

        domicilioFiscal: {
            id: 0,
            cp: '1406',
            provincia: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
            localidad: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
            calle: 'Av. Reservistas Argentinos',
            numero: '219',
            piso: '2',
            oficina: '',
            sector: '',
            torre: '',
            manzana: '',
            partida: '',
            latitud: '',
            longitud: '',

            tipo: ['Jurisdicción sede', 'Principal de actividades'],

            nombreLocal: '',
            tipoDatoAdicional: '',
            datoAdicional: ''
        },

        domicilioReal: {
            id: 3,
            cp: '1406',
            provincia: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
            localidad: 'CIUDAD AUTÓNOMA DE BUENOS AIRES',
            calle: 'Nazarre',
            numero: '5421',
            piso: '2',
            oficina: '',
            sector: '',
            torre: '',
            manzana: '',
            partida: '',
            latitud: '',
            longitud: '',

            tipo: ['Sin actividad'],

            nombreLocal: '',
            tipoDatoAdicional: '',
            datoAdicional: ''

        },

        otroDomicilio: {
            cp: '',
            provincia: '',
            localidad: '',
            calle: '',
            numero: '',
            piso: '',
            oficina: '',
            sector: '',
            torre: '',
            manzana: '',
            partida: '',
            latitud: '',
            longitud: '',

            tipo: [''],

            nombreLocal: '',
            tipoDatoAdicional: '',
            datoAdicional: ''

        },

    }),

    actions: {

        actualizarDomicilioFiscal(nuevoDomicilio) {
            this.domicilioFiscal = nuevoDomicilio
        },

        actualizarDomicilioReal(nuevoDomicilio) {
            this.domicilioReal = nuevoDomicilio
        },

        actualizarDomicilioOtro(nuevoDomicilio) {
            this.otroDomicilio = nuevoDomicilio
        }

    }

})
