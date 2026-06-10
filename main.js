// 1. Importar el creador del cliente directamente desde el CDN oficial de módulos
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 2. Configuración de tus credenciales reales de Supabase
//const SUPABASE_URL = "https://zbqrlyvjgfeycczixgqc.supabase.co/";
//const SUPABASE_ANON_KEY = "sb_publishable_sE5jMRoQ-SNjuSMWJSY63g_OEGn5h8e";
// Archivo: script.js (o dentro de las etiquetas <script> en tu HTML)
const SUPABASE_URL = "___VALOR_API_URL___";
const SUPABASE_ANON_KEY = "___VALOR_API_KEY___";

// Tu lógica de JS normal usando esas variables...
console.log("Conectando a:", SUPABASE_URL );

// 3. Inicializar el cliente (aquí ya no hay ningún conflicto de nombres)
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 4. Función para INSERTAR datos
async function guardarDatos() {
    const { data, error } = await supabase
        .from('user') // Reemplaza por tu tabla
        .insert([
            { columna_nombre: 'Ejemplo desde entorno local', columna_numero: 99 } 
        ]);

    if (error) {
        console.error("Error al guardar:", error.message);
    } else {
        console.log("¡Datos guardados con éxito!", data);
    }
}

// 5. Función para LEER datos
async function obtenerDatos() {
    const { data, error } = await supabase
        .from('user') // Reemplaza por tu tabla
        .select('*');          

    if (error) {
        console.error("Error al leer:", error.message);
    } else {
        console.log("Datos recibidos de la BD:", data);
    }
}

// 6. Asignar las funciones a los botones (Obligatorio al usar type="module")
document.getElementById('btnGuardar').addEventListener('click', guardarDatos);
document.getElementById('btnLeer').addEventListener('click', obtenerDatos);
