/**
 * Biblioteca de documentos — Hematología Clínica
 * Universidad Santo Tomás — Tecnología Médica
 * Fuente: INFORMACIÓN IVONNE\HC 2023\
 */
const LIBRARY_DATA = {
  u1: [
    {
      nombre: 'Hemofilias y Enfermedad de Von Willebrand',
      archivo: 'hemofilias y enfermedad de von willebrand (2).pdf',
      carpeta: 'UNIDAD 1 HC 2023/CLASES',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Hemofilias y Enfermedad de Von Willebrand</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Hemofilia A: déficit Factor VIII · ligada al X · solo varones · hemartrosis como manifestación principal</li>
  <li>Hemofilia B (Christmas): déficit Factor IX · ligada al X · clínicamente indistinguible de A</li>
  <li>Hemofilia C: déficit Factor XI · rarísima · 2 casos en Chile</li>
  <li>Severidad: &lt;1% = severa (hemorragias espontáneas) · 1-5% = moderada · &gt;5% = leve</li>
  <li>Herencia: 100% de hijas de hemofílico son portadoras · 50% de hijos de portadora son hemofílicos</li>
  <li>EvW: déficit cuantitativo (tipo 1,3) o cualitativo (tipo 2) del FvW · AD · hombres Y mujeres</li>
  <li>EvW laboratorio: FvW:Ag↓ · RIPA↓ · tiempo de sangría↑ · TTPA variable (según ↓ FVIII)</li>
  <li>Tratamiento EvW: DDAVP tipo 1 · concentrado FvW tipo 2B y 3 (NUNCA DDAVP en 2B)</li>
  <li>Diagnóstico diferencial clave: EvW vs Hemofilia A → FvW:Ag normal en Hemofilia A</li>
</ul>`
    },
    {
      nombre: 'Resumen Video 1 — Alteraciones Plaquetarias',
      archivo: 'RESUMEN VIDEO 1 (1).pdf',
      carpeta: 'UNIDAD 1 HC 2023/RESUMENES COMPLEMENTARIOS',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Alteraciones Plaquetarias — Resumen</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Trombocitopenia: clasificar en 4 grupos: ↓ producción / alteración distribución / ↑ destrucción / pseudotrombocitopenia</li>
  <li>PTI: IgG anti-GpIIb/IIIa → remoción esplénica. PAIgG gold estándar. Mielograma: hiperplasia megacariocítica</li>
  <li>HIT Tipo II: IgG anti-FP4-heparina → activación plaquetaria → trombosis paradójica. Cambiar anticoagulante</li>
  <li>Trombocitosis clonal (&gt;1.000.000) vs reactiva (&lt;1.000.000): esplenomegalia, displasia MO, morfología plaquetaria</li>
  <li>Defectos cualitativos: Bernard Soulier (GpIb/V/IX), Glanzmann (GpIIb/IIIa), Hemansky-Pudlak (gránulos densos)</li>
  <li>DDAVP: análogo vasopresina → libera FvW endotelial × 4-5 veces · duración 8-10h</li>
</ul>`
    },
    {
      nombre: 'Tabla comparativa de Anemias',
      archivo: 'tabla-comparativa-anemias.pdf',
      carpeta: 'UNIDAD 1 HC 2023/RESUMENES COMPLEMENTARIOS',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Tabla Comparativa de Anemias</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Ferropénica: VCM↓ + HCM↓ + RDW↑ + reticulocitos↓ + ferritina↓ + TIBC↑</li>
  <li>Megaloblástica: VCM↑ + neutrófilos hipersegmentados + B12↓ o folato↓ + LDH↑</li>
  <li>Enfermedad crónica: VCM normal o ↓ + ferritina↑ (fase aguda) + Fe↓ + TIBC↓</li>
  <li>Hemolítica: reticulocitos↑ + bilirrubina indirecta↑ + LDH↑ + haptoglobina↓ + Coombs(+/-)</li>
  <li>Aplásica: pancitopenia + reticulocitos↓ + MO hipocelular + sin blastos</li>
  <li>Clave diagnóstica: ferritina es el primer examen para diferenciar ferropénica de EEC</li>
</ul>`
    },
    {
      nombre: 'Tabla de enfermedades — Video 2',
      archivo: 'tabla de enfermedades del video 2.pdf',
      carpeta: 'UNIDAD 1 HC 2023/RESUMENES COMPLEMENTARIOS',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Enfermedades Plaquetarias y Hemostasia — Video 2</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Enfermedades por gránulos: Plaquetas Grises (↓ gránulos alfa) · Hemansky-Pudlak (↓ gránulos densos + albinismo)</li>
  <li>Chediak-Higashi: ↓ gránulos densos + gigantismo lisosómico leucocitos + riesgo leucemia · mutación CHS1/LYST</li>
  <li>Macrotrombocitopenias MYH9: May-Hegglin, Epstein, Fechtner, Sebastian</li>
  <li>Sd. Wiskott-Aldrich: Xp11, gen WASP. Defecto citoesqueleto (actina) → infecciones + riesgo linfoma</li>
  <li>Sd. Scott: defecto escramblasa → no expone fosfatidilserina → no inicia coagulación</li>
  <li>Vitamina K: activa factores II, VII, IX, X, Proteína C y S (carboxilación glutamato)</li>
</ul>`
    }
  ],
  u2: [
    {
      nombre: 'LMA vs LLA — Documento comparativo',
      archivo: 'LMA VS LLA.docx',
      carpeta: 'UNIDAD 2 HC 2023',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">LMA vs LLA — Puntos clave</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>LMA: blastos mieloides · tamaño mediano-grande · bastones de Auer 60-70% (PATOGNOMÓNICO)</li>
  <li>LLA: blastos linfoides · tamaño pequeño-mediano · agranulares · SIN bastones de Auer</li>
  <li>Criterio LMA OMS: ≥20% blastos en sangre/MO (o alteración citogenética recurrente)</li>
  <li>Criterio LLA: ≥25% blastos. Si &lt;25%: confirmar por MO → podría ser LINFOMA</li>
  <li>LMA displasia: hipogranularidad + cuerpos de Döhle (más frecuente). Cup-like blast = bowl</li>
  <li>LLA adenopatías (+) + hematopoyesis extramedular. LMA: adenopatías (-)</li>
  <li>Inmunofenotipo LMA: cMPO + lisozima + esterasa. LLA-B: CD19+CD10+TdT. LLA-T: CD3+CD7</li>
  <li>Valor crítico siempre: cualquier blasto en sangre periférica → informe morfológico urgente</li>
</ul>`
    },
    {
      nombre: 'Síndrome Mononucleosico — Clase',
      archivo: 'SINDROME MONONUCLEOSICOS .docx',
      carpeta: 'UNIDAD 2 HC 2023/CLASES',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Síndrome Mononucleosico — Puntos clave</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>EBV (98%): DNA doble cadena · jóvenes 20-30 años · faringitis + adenopatías + linfocitos reactivos</li>
  <li>CMV (7%): similar a EBV pero menos faríngeo/ganglionar · HETERÓFILOS NEGATIVOS</li>
  <li>Hantavirus: zoonótico · sindrome cardiopulmonar · trombocitopenia &lt;50k + inmunoblastos ≥10%</li>
  <li>Criterios SMN hemograma: leucocitosis 10-20k + linfocitosis relativa ≥50% + linfocitos reactivos ≥10%</li>
  <li>Inmunoblasto (Downey III): ≥10% = criterio diagnóstico Hanta · ≥40% = mal pronóstico</li>
  <li>LUC &gt;6% o &gt;400/µL en autoanalizador → revisar frotis (linfocitos reactivos)</li>
  <li>Diagnóstico diferencial: linfoma (adenopatías &gt;3 meses, consistencia gomosa) vs infección (dolor, blando, móvil)</li>
</ul>`
    },
    {
      nombre: 'Hantavirus — Material de clases 2023',
      archivo: 'Hanta TM 2023 unidad 2.pdf',
      carpeta: 'UNIDAD 2 HC 2023/IMAGENES DE LAS CLASES',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Hantavirus — Resumen</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Transmisión: inhalación de aerosoles de excretas de roedores (ratón de cola larga en Chile)</li>
  <li>Fases: prodrómica (fiebre/mialgias) → cardiopulmonar (disnea, hipotensión, shock)</li>
  <li>Hemograma diagnóstico: plaquetas &lt;50.000 · leucocitos &gt;25.000 · inmunoblastos ≥10%</li>
  <li>Hcto &gt;45% en fase de hemoconcentración = asociado a deceso</li>
  <li>Baciliformes &gt;20% = asociado a deceso</li>
  <li>Inmunoblastos ≥40% = criterio pronóstico adverso</li>
  <li>Confirmación: ELISA Hantavirus ISP + biología molecular</li>
  <li>Examen tanatológico: radiografía diagnóstica · histopatología: neumonitis intersticial + inmunoblastos</li>
</ul>`
    },
    {
      nombre: 'Guía Clínica LLA 2025',
      archivo: 'LEUCEMIA_LINFOBLASTICA_AGUDA_2025.pdf',
      carpeta: 'UNIDAD 2 HC 2023/GUIAS CLINICAS',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Leucemia Linfoblástica Aguda — Guía Clínica</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>LLA: neoplasia de progenitores linfoides B, T o NK con etiología mayormente desconocida</li>
  <li>Factores de riesgo: Síndrome de Down (↑ riesgo), traslocaciones KMT2A, SNPs</li>
  <li>Diagnóstico: ≥25% blastos en sangre o MO + inmunofenotipo + citogenética/FISH</li>
  <li>Estudio LCR: obligatorio (compromiso SNC frecuente en LLA)</li>
  <li>Pronóstico favorable: t(12;21) ETV6-RUNX1 en niños · hiperdiploidia</li>
  <li>Pronóstico desfavorable: t(9;22) Ph+ en adultos · t(4;11) KMT2A en lactantes</li>
  <li>Tratamiento: quimioterapia intensiva + profilaxis SNC. TPH si riesgo alto</li>
</ul>`
    },
    {
      nombre: 'Guía Clínica Mieloma Múltiple',
      archivo: 'GUIA CLINICA MIELOMA MÚLTIPLE.pdf',
      carpeta: 'UNIDAD 2 HC 2023/GUIAS CLINICAS',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Mieloma Múltiple — Guía Clínica</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Neoplasia de células plasmáticas (linfocito B terminal) productoras de inmunoglobulina monoclonal</li>
  <li>Criterios CRAB: hipercalCemia · insuficiencia Renal · Anemia · lesiones óseas (Bone)</li>
  <li>Electroforesis proteínas: pico monoclonal (banda M) en zona gamma</li>
  <li>Bence Jones: cadenas livianas libres en orina → nefrotóxicas</li>
  <li>MO: infiltración por plasmocitos ≥10% (células con núcleo excéntrico, cromatina en rueda de carro)</li>
  <li>Hemograma: anemia NN arregenerativa · rouleaux en frotis · VHS marcadamente ↑</li>
  <li>Tratamiento: bortezomib + dexametasona + lenalidomida (VRD). TPH autólogo</li>
</ul>`
    },
    {
      nombre: 'Guía Clínica SMD 2025',
      archivo: 'GUIA CLINICA 2025 SMD - FINAL.pdf',
      carpeta: 'UNIDAD 2 HC 2023/GUIAS CLINICAS',
      resumen: `<h4 style="color:#c97a96;margin:0 0 10px">Síndrome Mielodisplásico — Guía Clínica 2025</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Grupo heterogéneo de neoplasias mieloides con displasia + citopenias + riesgo de transformación a LMA</li>
  <li>Criterios diagnósticos: displasia en ≥10% de células de una serie + &lt;20% blastos en MO</li>
  <li>Clasificación OMS 2022 basada en tipo de displasia, citogenética y grado de fibrosis</li>
  <li>Sideroblastos en anillo: ≥15% (o ≥5% si mutación SF3B1) = criterio diagnóstico tipo SMD-RS</li>
  <li>Score IPSS-R: pronóstico basado en citogenética + % blastos + citopenias</li>
  <li>Hemograma: pancitopenia + displasia en frotis (hipogranularidad neutrófila, plaquetas gigantes)</li>
  <li>Tratamiento: hipometilantes (azacitidina) · lenalidomida (5q-) · TPH alogénico en candidatos</li>
</ul>`
    }
  ],
  u3: [
    {
      nombre: 'Tabla Resumen U3 — Neoplasias Mieloproliferativas y Linfoproliferativas',
      archivo: 'tabla resumen U3 H.clinica.docx',
      carpeta: 'UNIDAD 3 HC 2023/CLASES',
      resumen: `<h4 style="color:#3a8a5c;margin:0 0 10px">NMP y SLP — Puntos clave del resumen</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>LMC Phi+: t(9;22) BCR-ABL · leucocitosis 12-100k + basofilia + eosinofilia + SIN hiatus. ITK: Imatinib</li>
  <li>PV: JAK2 V617F 95% · GR↑↑ · flebotomía + AAS + Hidroxiurea · Perls(-) en MO</li>
  <li>TE: JAK2/CALR/MPL · plaquetas &gt;450k · AAS + Hidroxiurea · Anagrelida</li>
  <li>Mielofibrosis: dacriocitos + reacción leucoeritroblástica · Gomori(+) · Neoangiogénesis CD34+</li>
  <li>LLC: RAL &gt;5000 &gt;3 meses · restos Gumprecht · Score Matutes 3-4 · CD5+CD23+FMC7-</li>
  <li>HCL: células vellosas + monocitopenia + CD11c/CD25/CD103/CD123 · Cladribina</li>
  <li>Linfoma Folicular: t(14;18) BCL2 · sd VCS característica · biopsia (NUNCA punción)</li>
  <li>Linfoma Manto: t(11;14) Ciclina D1 · FISH 100%</li>
  <li>MF/Sézary: núcleo cerebriforme · MF solo piel · SS piel + sangre · criterios específicos</li>
</ul>`
    },
    {
      nombre: 'Guía Clínica LMC — MINSAL',
      archivo: 'GUIA CLINICA LEUCEMIA MIELOIDE CRÓNICA.pdf',
      carpeta: 'UNIDAD 3 HC 2023/GUIAS CLINICAS',
      resumen: `<h4 style="color:#3a8a5c;margin:0 0 10px">LMC — Guía Clínica MINSAL</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>LMC: neoplasia mieloproliferativa crónica con t(9;22) → proteína BCR-ABL (tirosina kinasa constitutivamente activa)</li>
  <li>Fases: crónica (5-6 años) → acelerada (6-9 meses) → blástica (3-6 meses, LMA o LLA)</li>
  <li>Diagnóstico: FISH + RT-PCR (BCR-ABL) + citogenética. Inmunofenotipo solo en crisis blástica</li>
  <li>Hemograma: reacción leucoeritroblástica + leucocitosis hasta 100k + neutrofilia + basofilia absoluta</li>
  <li>ITK 1ª generación: Imatinib 400-600mg/día (GLEEVEC)</li>
  <li>ITK 2ª gen: Nilotinib 300mg/12h · Dasatinib 100mg/día (si resistencia a Imatinib)</li>
  <li>Monitoreo respuesta: PCR cuantitativa para BCR-ABL cada 3 meses</li>
</ul>`
    },
    {
      nombre: 'Linfoma de Hodgkin — Guía Clínica',
      archivo: 'LINFOMA DE HODGKIN.pdf',
      carpeta: 'UNIDAD 3 HC 2023/GUIAS CLINICAS',
      resumen: `<h4 style="color:#3a8a5c;margin:0 0 10px">Linfoma de Hodgkin</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Célula neoplásica: célula de Reed-Sternberg (RS): binucleada con nucleolos prominentes "ojos de búho"</li>
  <li>Epidemiología bimodal: 15-34 años Y &gt;50 años · asociación con EBV (30-40%)</li>
  <li>Clínica: adenopatía cervical indolora + síntomas B (fiebre, sudoración nocturna, pérdida de peso ≥10%)</li>
  <li>Clasificación: esclerosis nodular (más frecuente) · celularidad mixta · depleción linfocítica · predominio linfocítico</li>
  <li>Diagnóstico: biopsia ganglionar (célula RS) + IHQ: CD30+ · CD15+ · CD45-</li>
  <li>Etapificación: sistema de Ann Arbor (I-IV) + A/B (sin/con síntomas B)</li>
  <li>Tratamiento: ABVD (doxorubicina, bleomicina, vinblastina, dacarbazina) + radioterapia</li>
  <li>Pronóstico: 80-90% de curación en estadios tempranos</li>
</ul>`
    },
    {
      nombre: 'LMC Phi — Criterios Mayo/Menon',
      archivo: 'Lmc phi CRITERIOS MAY, MENO.pdf',
      carpeta: 'UNIDAD 3 HC 2023/GUIAS CLINICAS',
      resumen: `<h4 style="color:#3a8a5c;margin:0 0 10px">LMC — Criterios de Fase y Respuesta</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Criterios de fase acelerada: blastos 10-19% · basófilos ≥20% · trombocitopenia &lt;100k no relacionada a tto</li>
  <li>Criterios de fase blástica: blastos ≥20% en sangre o MO · infiltración extramedular blástica</li>
  <li>Respuesta hematológica completa: leucocitos &lt;10k · plaquetas &lt;450k · no esplenomegalia</li>
  <li>Respuesta citogenética mayor: Ph+ &lt;35% · completa: Ph+ 0%</li>
  <li>Respuesta molecular mayor: BCR-ABL &lt;0.1% (IS)</li>
  <li>Respuesta molecular profunda (DMR): BCR-ABL ≤0.01% (condición para eventual discontinuación)</li>
</ul>`
    }
  ],
  lab: [
    {
      nombre: 'Laboratorio Hematología — Manual',
      archivo: 'LABORATORIO HEMATOLOGIA.pdf',
      carpeta: 'LABORATORIO',
      resumen: `<h4 style="color:#5a8fa8;margin:0 0 10px">Laboratorio Hematológico — Manual</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Hemograma: examen de mayor uso en clínica · evalúa las 3 series hematológicas</li>
  <li>Principios: impedancia eléctrica (Coulter) + light scattering (Sysmex) para diferenciación leucocitaria</li>
  <li>Parámetros calculados: HTO = VCM × GR / 10 · HCM = Hb / GR × 10 · CHCM = Hb / HTO × 100</li>
  <li>Frotis siempre obligatorio si: alarmas en autoanalizador, LUC &gt;6%, blastos sospechados</li>
  <li>Tinción de rutina: May-Grünwald Giemsa (MGG) para frotis y mielograma</li>
  <li>Reticulocitos: tinción supravital (azul brillante de cresilo) o fluorescencia (Sysmex)</li>
  <li>Valores críticos: comunicar verbalmente + registrar hora de notificación</li>
</ul>`
    },
    {
      nombre: 'Valores Mínimos de Referencia — UST 2022',
      archivo: 'V.  Min de Ref  de uso pedagógico año 2022 (1).pdf',
      carpeta: 'LABORATORIO',
      resumen: `<h4 style="color:#5a8fa8;margin:0 0 10px">Valores de Referencia Pedagógicos — UST 2022</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>HTO: H 40-50% · M 36-46%</li>
  <li>Hemoglobina: H 13-17.5 g/dL · M 12-15 g/dL</li>
  <li>GR: H 4.5-5.9 M/µL · M 4.1-5.1 M/µL</li>
  <li>VCM: 82-96 fL · HCM: 28-33 pg · CHCM: 32-36 g/dL · ADE: 11.5-14.5%</li>
  <li>Leucocitos: 4.00-10.00 K/µL · Plaquetas: 140-400 K/µL</li>
  <li>Neutrófilos: 2.400-7.300/µL (50-70%) · Linfocitos: 1.000-3.000/µL (20-40%)</li>
  <li>Monocitos: 200-800/µL · Eosinófilos: 50-500/µL · Basófilos: 0-100/µL</li>
  <li>Reticulocitos: 0.5-1.5% · Ferritina: H 30-300 · M 15-200 ng/mL</li>
</ul>`
    },
    {
      nombre: 'Morfología Celular — Guía',
      archivo: 'MORFOLOGIA.docx',
      carpeta: 'LABORATORIO/MORFOLOGIA',
      resumen: `<h4 style="color:#5a8fa8;margin:0 0 10px">Morfología de Serie Granulocítica</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Blasto: núcleo redondo + nucleolos + basofilia citoplasmática + sin granulaciones</li>
  <li>Promielocito: nucleolos (+) + granulaciones azurófilas primarias</li>
  <li>Mielocito: sin nucleolos + granulaciones viran de primarias a secundarias específicas</li>
  <li>Metamielocito (Juvenil): hendidura nuclear que NO sobrepasa la línea media</li>
  <li>Baciliforme: hendidura que SÍ sobrepasa la línea media · estrangulación ≥1/3</li>
  <li>Segmentado: 2-5 lóbulos conectados por filamentos de cromatina · sin nucleolos</li>
  <li>Hipersegmentación: &gt;5 lóbulos = megaloblástica patológica · &gt;6 lóbulos = criterio diagnóstico</li>
</ul>`
    },
    {
      nombre: 'Recomendaciones para Interpretación del Hemograma — ISP',
      archivo: 'Recomendaciones-para-la-Interpretación-del-Hemograma.pdf',
      carpeta: 'LABORATORIO/RECOMENDACIONES ISP',
      resumen: `<h4 style="color:#5a8fa8;margin:0 0 10px">Recomendaciones ISP — Interpretación Hemograma</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>El hemograma debe interpretarse siempre en contexto clínico del paciente</li>
  <li>Fórmula leucocitaria: 200 leucocitos en recuento diferencial. Si leucopenia: contar hasta 100 (múltiples frotis)</li>
  <li>Alarmas del autoanalizador deben derivar siempre a revisión de frotis periférico</li>
  <li>Informe de blastos: siempre como valor crítico, describir morfología y % · derivar a especialista</li>
  <li>Errores preanalíticos: EDTA pseudotrombocitopenia, hemólisis, crioaglutininas, lipemia</li>
  <li>VHS: velocidad de hemosedimentación. Recomendaciones ISP para toma correcta (tubo vertical, 60 min)</li>
  <li>Comunicación verbal obligatoria de valores críticos + registro con hora en informe</li>
</ul>`
    },
    {
      nombre: 'Caso Clínico Capítulo 19 — Anemia Aplásica',
      archivo: 'CASO CLINICO EN CAP 19.docx',
      carpeta: 'LABORATORIO/CLASES',
      resumen: `<h4 style="color:#5a8fa8;margin:0 0 10px">Anemia Aplásica — Caso Clínico Cap. 19</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Pancitopenia + reticulocitopenia + MO hipocelular + B12/folato normales + sin blastos = aplasia medular adquirida</li>
  <li>Historia de hepatitis autoinmune como factor desencadenante</li>
  <li>Si MO tiene ↑ blastos o ↑ reticulina → considerar mielodisplasia o leucemia (NO aplasia)</li>
  <li>Aplasia severa: hipocelularidad &gt;70% + ≥2 de: neutrófilos &lt;500, plaquetas &lt;20k, reticulocitos &lt;60k</li>
  <li>Tratamiento: TPH si hermano HLA-idéntico. Si no: GAT (globulina anti-timocito) + ciclosporina</li>
  <li>Transfusión GR: si síntomas de anemia. Plaquetas: si &lt;10.000/µL</li>
  <li>Evitar aloinmunización: ser cuidadoso con el número de transfusiones pre-TPH</li>
</ul>`
    },
    {
      nombre: 'Conceptos Generales de Anemia — Síndrome Anémico',
      archivo: 'Conceptos generales de Anemia- Sd. anemico.pdf',
      carpeta: 'LABORATORIO/CLASES',
      resumen: `<h4 style="color:#5a8fa8;margin:0 0 10px">Síndrome Anémico — Conceptos Generales</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Anemia: Hb &lt;13 g/dL (H) o &lt;12 g/dL (M) · OMS define como déficit de Hb para la edad y sexo</li>
  <li>Clasificación morfológica: micro (&lt;80 fL) / normo (80-100 fL) / macrocítica (&gt;100 fL)</li>
  <li>Clasificación fisiopatológica: arregenerativa (producción ↓) vs regenerativa (destrucción ↑ o pérdida)</li>
  <li>Síndrome anémico: palidez + taquicardia + disnea de esfuerzo + fatiga + cefalea</li>
  <li>Compensaciones fisiológicas: ↑ GC · vasodilatación periférica · desviación curva oxihemoglobina a la derecha</li>
  <li>Anemia aguda: síntomas cardiovasculares prominentes (shock hipovolémico)</li>
  <li>Anemia crónica: síntomas insidiosos · mayor tolerancia por adaptación</li>
</ul>`
    }
  ],
  libros: [
    {
      nombre: 'Anemia Hemolítica Intracorpuscular — Palomo Cap. 23',
      archivo: 'Anemia Hemolítica Intracorpuscular Palomo Cap 23 (1).pdf',
      carpeta: 'LIBROS',
      resumen: `<h4 style="color:#7a6570;margin:0 0 10px">Anemia Hemolítica Intracorpuscular — Palomo</h4>
<ul style="font-size:13px;padding-left:18px;line-height:1.9;margin:0">
  <li>Hemólisis intracorpuscular: defecto DENTRO del eritrocito (vs extracorpuscular: causa externas)</li>
  <li>Esferocitosis hereditaria: defecto espectrina/ankirina → pérdida membrana → esferocito → Coombs(-)</li>
  <li>Eliptocitosis hereditaria: defecto proteína 4.1 o espectrina → eliptocitos en frotis</li>
  <li>G6PD: enzima hexosa-monofosfato → déficit → hemólisis episódica por estrés oxidativo</li>
  <li>Cuerpos de Heinz: precipitados de Hb desnaturalizada (visibles con azul brillante de cresilo)</li>
  <li>Drepanocitosis: mutación β-globina Glu→Val → HbS → polimerización en hipoxia → células en hoz</li>
  <li>Laboratorio común: reticulocitos↑ + LDH↑ + bilirrubina indirecta↑ + haptoglobina↓</li>
  <li>Coombs directo NEGATIVO en hemólisis intracorpuscular (diferencia con AHAI)</li>
</ul>`
    }
  ]
};
window.LIBRARY_DATA = LIBRARY_DATA;
