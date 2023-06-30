import axios from 'axios'
import { ref } from 'vue'

const useClima = () => {
  const error = ref('')
  const loading = ref(false)
  const clima = ref(null)

  const obtenerClima = async (busqueda) => {
    const API_KEY = import.meta.env.VITE_API_KEY
    clima.value = null
    error.value = ''
    loading.value = true

    try {
      if (!busqueda?.ciudad) {
        throw new Error('No se ha ingresado una ciudad')
      }

      if (!busqueda?.pais) {
        throw new Error('No se ha ingresado un país')
      }

      // Obtener lat y lon
      const { data } = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${busqueda.ciudad},${busqueda.pais}&limit=1&appid=${API_KEY}`
      )

      if (!data || data.length === 0) {
        error.value = 'No se ha encontrado la ciudad'
        return
      }

      const { lat, lon } = data[0]

      // Obtener clima
      const { data: climaData } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )

      clima.value = climaData
    } catch (e) {
      console.log(e)
      error.value = 'Busqueda no valida'
      clima.value = null
    } finally {
      loading.value = false
    }
  }
  return { obtenerClima, error, loading, clima }
}

export default useClima
