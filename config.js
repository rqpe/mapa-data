var config = {
  style: "mapbox://styles/rawqel/cmmjn9zza001t01s7b2mpefyg",
  accessToken:
    "pk.eyJ1IjoicmF3cWVsIiwiYSI6ImNtbWR0M2hzODA2dTAycXM4dXFzYmxqMXkifQ.RYBtxumHXZPiUad0MQ2J6g",
  showMarkers: false,
  projection: "mercator",
  theme: "light",
  alignment: "left",
  title:
    "Climate Justice: Desigualdad en la Producción de Conocimiento Climático",
  subtitle:
    "Un recorrido visual por quién investiga el clima, desde dónde y con qué voces ausentes",
  byline: "Storytelling creado por Raquel Pérez",
  footer:
    "Datos: IPCC SROCC · Marco teórico: Epistemic Justice (JEP) · Visualización: Mapbox GL JS",

  chapters: [
    // Sección 1— INTRODUCCIÓN / OVERVIEW GLOBAL
    {
      id: "overview-global",
      title: "¿Quién produce el conocimiento climático?",
      description: `
                <a href="https://public.flourish.studio/visualisation/27946186/" target="_blank">
                <img src="assets/mapa-paises1.png" style="width:100%; border-radius:8px; margin-bottom:12px;">
                </a>
                <p style="font-size: 11px; color: #888; font-style: italic; margin-top: 4px;">
                Figura 1. Mapa global de autores del IPCC 4
                </p>
                La ciencia climática no se escribe en el vacío. Se escribe desde lugares concretos,
                con recursos desiguales y con voces que se escuchan más que otras.
                Este mapa muestra la distribución global de autores del IPCC.

                <br><br>
                Este proyecto se inspira en el marco de la <strong>justicia epistémica</strong>,
                que analiza cómo ciertos grupos quedan sistemáticamente excluidos de la producción de conocimiento.
                <br>
                <a href="https://journals.publishing.umich.edu/jep/article/id/7206/" target="_blank">
                    Referencia: Journal of Ethics and Philosophy — Epistemic Justice
                </a> 
                    
                <br><br>
                Los datos proceden del <strong>IPCC SROCC</strong>, Capítulo 4, sobre el aumento del nivel del mar
                y sus implicaciones para islas, costas y comunidades vulnerables.
                <br>
                <a href="https://www.ipcc.ch/srocc/chapter/chapter-4-sea-level-rise-and-implications-for-low-lying-islands-coasts-and-communities/4-1synthesis/4-1-2future-sea-level-rise-and-implications-for-responses/ipcc-srocc-ch_4_15/" target="_blank">
                    Fuente: IPCC SROCC, Capítulo 4
                </a>

                <br><br>
                <a href="https://public.flourish.studio/visualisation/27946186/" target="_blank">
                    >> Ver mapa interactivo completo
                </a>
            `,
      location: {
        center: [-0.3196, 39.317],
        zoom: 11.5,
        pitch: 45,
        bearing: 0,
      },
    },

    // Sección 2 — SUR GLOBAL
    {
      id: "sur-global",
      title: "El Sur Global: voces ausentes en la ciencia del clima",
      description: `
                <a href="https://public.flourish.studio/visualisation/27948335/" target="_blank">
                <img src="assets/Treemap-Global-Flourish.png" style="width:100%; border-radius:8px; margin-bottom:12px;">
                </a>
                <p style="font-size: 11px; color: #888; font-style: italic; margin-top: 4px;">
                Figura 2. Representación de autores global
                </p>
                África, Latinoamérica y gran parte de Asia están subrepresentadas en la autoría científica.
                Esta ausencia refleja desigualdades históricas en financiación, infraestructura
                y acceso a instituciones científicas.

                <br><br>
                El IPCC SROCC muestra que muchas de estas regiones serán de las más afectadas por el aumento del nivel del mar.
                Sin embargo, su presencia en la producción científica sigue siendo mínima.
                Esta desconexión entre vulnerabilidad e influencia es una forma profunda de <strong>injusticia epistémica</strong>.

                <br><br>
                <a href="https://public.flourish.studio/visualisation/27948335/" target="_blank">
                    >> Ver mapa interactivo Global
                </a>
            `,
      location: {
        center: [-5, 12],
        zoom: 4,
        pitch: 30,
        bearing: 20,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      speed: 0.7,
      curve: 1.5,
    },

    // Sección 3 — REGIONES VULNERABLES
    {
      id: "regiones-vulnerables",
      title: "Regiones vulnerables: quienes más sufren, menos participan",
      description: `
                <a href="https://public.flourish.studio/visualisation/27949824/" target="_blank">
                <img src="assets/mapa-global-autoria.png" style="width:100%; border-radius:8px; margin-bottom:12px;">
                </a>
                <p style="font-size: 11px; color: #888; font-style: italic; margin-top: 4px;">
                Figura 3. Mapa global de autoría por país
                </p>
                Las regiones costeras y las islas bajas serán algunas de las más afectadas por el aumento del nivel del mar, según el IPCC. Sin embargo, estas mismas zonas apenas están representadas en la autoría científica. Quienes viven los impactos más intensos del cambio climático suelen tener menos presencia en los espacios donde se produce el conocimiento.
                <br><br>
                Esta distancia entre vulnerabilidad y participación refleja una forma de injusticia epistémica.
                <br><br>
                <a href="https://public.flourish.studio/visualisation/27949824/" target="_blank">
                    >> Ver mapa de regiones vulnerables
                </a>
            `,
      location: {
        center: [42, -5] /*[-160, -15]*/,
        zoom: 3.8,
        pitch: 0,
        bearing: 0,
      },
    },

    // Sección 4 — LIDERAZGO Y GÉNERO
    {
      id: "liderazgo-genero",
      title: "Liderazgo y género: una representación desigual",
      description: `
                <a href="https://public.flourish.studio/visualisation/27948629/" target="_blank">
                <img src="assets/Sunburst-comparativa-genero.png" style="width:100%; border-radius:8px; margin-bottom:12px;">
                </a>
                <p style="font-size: 11px; color: #888; font-style: italic; margin-top: 4px;">
                Figura 4. Comparativa de género y liderazgo
                </p>
                El liderazgo científico sigue concentrado en regiones con más recursos. Solo una cuarta parte de quienes ocupan roles de liderazgo son mujeres. Y aunque en muchas zonas del Sur Global hay una fuerte presencia femenina en la investigación, su participación disminuye cuando se trata de acceder a posiciones de coordinación y toma de decisiones.
                <br><br>
                <strong>¿Qué representan los roles?</strong><br>
                • <strong>CLA</strong> — Coordinating Lead Authors: lideran capítulos completos.<br>
                • <strong>LA</strong> — Lead Authors: responsables de secciones clave.<br>
                • <strong>RE</strong> — Review Editors: supervisan la calidad y coherencia científica.<br><br>

                Estos roles determinan qué voces influyen en la agenda climática. La menor presencia de mujeres en estas posiciones, especialmente en contextos con menos apoyo institucional— refleja barreras estructurales que limitan su acceso al liderazgo. Esta brecha constituye una forma clara de <strong>injusticia epistémica de género</strong>.</p>
                <a href="https://public.flourish.studio/visualisation/27948629/" target="_blank">
                    >> Ver comparativa de género y liderazgo
                </a>
            `,
      location: {
        /*center: [-5, 12],
                zoom: 4,
                pitch: 45,
                bearing: -20*/
                center: [-85, 15],
                zoom: 2.5,
                pitch: 8,
                bearing: -10,
      },
    },

    // Sección 5 — CONCLUSIÓN
    {
      id: "conclusion",
      title: "La justicia climática empieza por quién participa",
      description: `
                <a href="https://public.flourish.studio/visualisation/27948112/" target="_blank">
                <img src="assets/Sanskey.png" style="width:100%; border-radius:8px; margin-bottom:12px;"></a>
                <p style="font-size: 11px; color: #888; font-style: italic; margin-top: 4px;">
                Figura 4. ¿Quién participa en la ciencia del clima?
                </p>
                La crisis climática es desigual: afecta más a quienes menos han contribuido a causarla.
                Pero también es desigual quién investiga, quién lidera y quién define las soluciones.

                <br><br>
                La justicia climática exige democratizar la producción de conocimiento:
                ampliar quién participa, quién lidera y quién es escuchado.

                <br><br>
                <a href="https://public.flourish.studio/visualisation/27948112/" target="_blank">
                    >> Ver diagrama sobre liderazgo científico
                </a>
            `,
      location: {
        center: [0, 20],
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
      },
    },
  ],
};
