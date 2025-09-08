     function diasFaltantes(fechaObjetivo) {
            const hoy = new Date();
            const objetivo = new Date(fechaObjetivo);
            const diferenciaTiempo = objetivo - hoy;
            const dias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
            return dias;
        }

        // Calcular días para el 29 de septiembre y 18 de octubre de 2025
        const dias29Septiembre = diasFaltantes('2025-09-29');
        const dias18Octubre = diasFaltantes('2025-10-18');

        // Mostrar los resultados en la página
        document.getElementById('dias-29-septiembre').textContent = `Faltan ${dias29Septiembre} días para el 29 de septiembre de 2025 💖`;
        document.getElementById('dias-18-octubre').textContent = `Faltan ${dias18Octubre} días para el 18 de octubre de 2025 💖`;