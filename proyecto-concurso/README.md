🛠️ CoreFix – Sistema de Gestión de Fallas Industriales



👥 Integrantes del Equipo
Roberto Lemus – Desarrollo web, backend y base de datos

Iker Gael Rico Nonato - Desarrollo web y base de datos

Luis Eduardo Navarro Hernandez - Desarrollo Web y backend


🧩 Problema que Resuelve
En entornos industriales, el manejo de fallas se realiza de manera dispersa: mensajes, hojas, correos y reportes informales que dificultan el seguimiento y retrasan la reparación de equipos.
CoreFix nace para centralizar, organizar y agilizar el proceso completo de atención de fallas, garantizando trazabilidad, comunicación clara y validación final del empleado afectado.






🚀 Funcionalidades Principales

🔧 Para Empleados

Registro rápido de fallas en equipos.

Adjuntar evidencia fotográfica.

Visualizar el estado del ticket.

🧭 Para Supervisores

Validación de fallas registradas.

Filtrado de reportes por área, fecha y prioridad.

🧪 Para Técnicos / Ingenieros de Pruebas

Recepción de fallas asignadas.

Gestión del avance del ticket.

Subida de evidencia de reparación.

Actualización del estado en cada etapa.

✔️ Validación Final del Empleado

Confirmación de que la reparación fue aplicada correctamente (sexto paso del flujo).




🧰 Tecnologías Utilizadas
🌐 Frontend

HTML5

CSS3

JavaScript (ES6)

Bootstrap

🖥️ Backend

ASP.NET / C#

Controladores MVC

Lógica de roles y flujo de trabajo

🗄️ Base de Datos

SQL Server

Tablas principales:

empleados

supervisores

tecnicos

reportes

evidencias

mantenimiento

historial_estados

equipos (si aplica)

🛠️ Herramientas

Visual Studio 2022

Git & GitHub

Diagrama ER / UML


▶️ Instrucciones para Ejecutar el Proyecto

🔧 1. Clonar el repositorio

git clone https://github.com/R-LEMUS/CoreFixWeb

🛢️ 2. Configurar la Base de Datos

Abrir SQL Server Management Studio.

Crear una base de datos llamada CoreFixDB.

Ejecutar el script incluido en /documentacion/basedatos.sql.

Verificar que las tablas se hayan creado correctamente.

⚙️ 3. Configurar el Backend

Abrir Visual Studio 2022.

Cargar CoreFix.sln.

Revisar appsettings.json y actualizar la cadena de conexión:

"ConnectionStrings": {
  "DefaultConnection": "Server=TU_SERVIDOR;Database=CoreFixDB;Trusted_Connection=True;"
}

Restaurar paquetes NuGet si Visual Studio lo solicita.

▶️ 4. Ejecutar el Proyecto

Presiona F5 en Visual Studio
o

Ejecuta el servidor con:

dotnet run

Luego abre en tu navegador:

http://localhost:"El puerto según se requiera"

📌 Notas Finales

El sistema está diseñado para usarse en flujo real industrial.

Se pueden añadir módulos futuros como reportes PDF, dashboard o auditoría.

Todo el equipo contribuyó mediante commits claros y organizados.
