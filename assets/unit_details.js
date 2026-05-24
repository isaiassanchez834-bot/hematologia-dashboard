/**
 * Datos de contenido — Hematología Clínica
 * Universidad Santo Tomás — Tecnología Médica
 * Editar aquí sin tocar el HTML principal.
 * FUENTE: INFORMACIÓN IVONNE\HC 2023\
 */
const UNIT_DETAIL = {
  1: {
    conceptos: `
<h3 style="color:#1a6bab;margin:0 0 16px">Alteraciones Plaquetarias y Hematológicas</h3>

<h4 style="color:#1a6bab;margin:18px 0 8px">Clasificación de Trombocitopenias</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left">Disminución producción</th>
    <th style="padding:7px;text-align:left">Alteración distribución</th>
    <th style="padding:7px;text-align:left">Aumento destrucción</th>
    <th style="padding:7px;text-align:left">Pseudotrombocitopenia</th>
  </tr></thead>
  <tbody><tr>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">
      <strong>Hereditarias:</strong><br>• Bernard Soulier (AR)<br>• Ausencia de radio (AR)<br>• Sd. plaquetas grises (AD/AR)<br>• Ligadas al X: micro/macrotrombocitopenias<br><br>
      <strong>Adquiridas:</strong><br>• Déficit nutricional (B12)<br>• Anemia aplástica (falla stem cell)<br>• Infiltración M.O. (mieloptasis)<br>• Fármacos: EDTA, quimioterapia, alcohol, estrógenos<br>• Infecciones virales: rubeola, CMV, parvovirus<br>• Septicemia (CID), malaria, protozoos
    </td>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">
      <strong>Esplenomegalia:</strong><br>• Enf. mieloproliferativa<br>• Sd. linfoproliferativo<br>• LMA<br><br>
      <strong>Otras:</strong><br>• Hipotermia (↓ síntesis)<br>• Embarazo (dilucional)<br>• Transfusión masiva
    </td>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">
      <strong>Aloinmune:</strong><br>• Púrpura aloinmune neonatal<br>• Púrpura post-transfusional<br><br>
      <strong>Autoinmune (PTI):</strong><br>• IgG anti-Gp plaquetarias<br>• Remoción por macrófagos esplénicos<br><br>
      <strong>Fármacos:</strong><br>• Haptenos (penicilina)<br>• Complejo ternario<br>• HIT (heparina + F4 plaquetario)
    </td>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">
      EDTA <em>in vitro</em>:<br>• Autoaglutinación<br>• Satelitismo plaquetario<br><br>→ Plaquetas unidas no se contabilizan<br>→ Recuento falsamente bajo
    </td>
  </tr></tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Trombocitosis</h4>
<p style="margin:0 0 8px;font-size:13px">Aumento del número de plaquetas en sangre y M.O., hiperplasia de megacariocitos (normal o anormal).</p>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left">Clonal (MALIGNA) — 2ª más frecuente</th>
    <th style="padding:7px;text-align:left">Reactiva (BENIGNA) — la más frecuente</th>
  </tr></thead>
  <tbody><tr>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">• Trastorno mieloproliferativo<br>• Trombocitemia esencial/primaria: trombosis masiva<br>• LMA-M7 (leucemia megacariocítica)<br>• Trastorno DOWN transitorio (3-6 meses → riesgo leucemia)</td>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">
      <strong>Transitorios:</strong> anemia aguda (reacción cruzada Epo/Tpo), recuperación de trombocitopenia, infección aguda (IL-6), ejercicio<br><br>
      <strong>Crónicos:</strong> déficit hierro, esplenomegalia/esplenectomía, cáncer, TBC, artritis, anemia hemolítica, drogas (vincristina, adrenalina)
    </td>
  </tr></tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Defectos de Hemostasia Primaria — Clasificación</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left">Tipo de defecto</th>
    <th style="padding:7px;text-align:left">Enfermedad principal</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Plaqueta ↔ Vaso / Subendotelio</td><td style="padding:7px;border:1px solid #ddd"><strong>Enf. Von Willebrand</strong> (↓ FvW) · <strong>Bernard Soulier</strong> (defecto GpIb,V,IX)</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd">Plaqueta ↔ Plaqueta (agregación)</td><td style="padding:7px;border:1px solid #ddd"><strong>Trombastenia de Glanzmann</strong> (defecto GpIIb/IIIa) · Afibrinogenemia · Hipofibrinogenemia</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Transducción de señales</td><td style="padding:7px;border:1px solid #ddd">Defectos en receptores agonistas (TxA2, colágeno GpVI, ADP P2Y1/P2Y12, epinefrina) · proteína G · movilización Ca · pleckstrina</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd">Síntesis AA y TxA2</td><td style="padding:7px;border:1px solid #ddd">Defecto en liberación de A. araquidónico · COX-1 · TxA2 (principal agonista plaquetario)</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Citoesqueleto (actina)</td><td style="padding:7px;border:1px solid #ddd"><strong>Sd. Wiskott-Aldrich</strong> (Xp11, gen WASP): defecto filopodio y lamelopodio → infecciones a repetición → riesgo linfomas</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd">Interacción factores coagulación</td><td style="padding:7px;border:1px solid #ddd"><strong>Sd. de Scott</strong>: defecto en escramblasa → no expone fosfatidilserina → no inicia coagulación</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Macrotrombocitopenias (gen MYH9)</td><td style="padding:7px;border:1px solid #ddd">May-Hegglin (cuerpos Döhle grandes) · Sd. Epstein (Döhle ausentes + nefritis + sordera) · Sd. Fechtner · Sd. Sebastian</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Enfermedades por Alteración de Gránulos Plaquetarios</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left">Enfermedad</th>
    <th style="padding:7px;text-align:left">Gránulo afectado</th>
    <th style="padding:7px;text-align:left">Herencia</th>
    <th style="padding:7px;text-align:left">Clínica / Genotipo</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Sd. Plaquetas Grises</strong></td><td style="padding:7px;border:1px solid #ddd">Ausencia gránulos <strong>alfa</strong> · plaquetas gigantes</td><td style="padding:7px;border:1px solid #ddd">AD y AR</td><td style="padding:7px;border:1px solid #ddd">Esplenomegalia · Fibrosis pulmonar · GATA-1</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Jakmon Paris-Trousseau</strong></td><td style="padding:7px;border:1px solid #ddd">Gránulos <strong>alfa gigantes</strong></td><td style="padding:7px;border:1px solid #ddd">AD</td><td style="padding:7px;border:1px solid #ddd">Retraso crecimiento · Enf. cardíaca · Dismorfias · FLI del 1q23</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Sd. Hemansky-Pudlak</strong></td><td style="padding:7px;border:1px solid #ddd">Ausencia gránulos <strong>densos</strong></td><td style="padding:7px;border:1px solid #ddd">AR</td><td style="padding:7px;border:1px solid #ddd">Albinismo OCP · Enf. pulmonar · Neutropenia · HPS-1 a HPS-8</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Sd. Chediak-Higashi</strong></td><td style="padding:7px;border:1px solid #ddd">Ausencia gránulos <strong>densos</strong> + gigantismo lisosómico leucocitos</td><td style="padding:7px;border:1px solid #ddd">AR</td><td style="padding:7px;border:1px solid #ddd">Albinismo OCP · Infecciones · Pancitopenia · Enf. neurológica · Riesgo leucemia · Mutación CHS1/LYST (1q23)</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Sd. Plaquetas York</strong></td><td style="padding:7px;border:1px solid #ddd">↑ Ca en sistema tubular denso (STD)</td><td style="padding:7px;border:1px solid #ddd">AD</td><td style="padding:7px;border:1px solid #ddd">Proteína STIM: censa Ca intracelular → ↑ Ca plaquetario</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Composición de Gránulos Plaquetarios</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left">Gránulos Densos (δ)</th>
    <th style="padding:7px;text-align:left">Gránulos Alfa (α)</th>
    <th style="padding:7px;text-align:left">Lisosomas</th>
  </tr></thead>
  <tbody><tr>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">Serotonina · pirofosfato · Ca · ATP · Factor XIII · cininógeno · IVE · Proteasas nexinas I y II · α2-macroglobulina · IL-1</td>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">Factores crecimiento: TGF-β · EGF · VEGF · PDGF<br>Factores coagulación: F.V · F.XI · AT-III · Proteína S<br>Inhibidores fibrinolisis: α2-antiplasmina · PAI-1<br>Proteínas adhesión: FvW · fibrinógeno · fibronectina · trombospondina</td>
    <td style="padding:7px;border:1px solid #ddd;vertical-align:top">Fosfatasas ácidas · elastasa · colagenasa · catepsina</td>
  </tr></tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Anemias — Clasificación General</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left">Tipo</th>
    <th style="padding:7px;text-align:left">Mecanismo principal</th>
    <th style="padding:7px;text-align:left">Morfología característica</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Ferropénica</strong></td><td style="padding:7px;border:1px solid #ddd">Déficit hierro (ingesta ↓, absorción ↓, pérdida crónica)</td><td style="padding:7px;border:1px solid #ddd">Microcítica hipocrómica · RDW ↑ · Reticulocitos ↓</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Megaloblástica</strong></td><td style="padding:7px;border:1px solid #ddd">Déficit B12 o folato → defecto síntesis ADN</td><td style="padding:7px;border:1px solid #ddd">Macrocitosis oval · Macropolicitos polisegmentados · Pancitopenia</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Enf. Crónica</strong></td><td style="padding:7px;border:1px solid #ddd">↑ Hepcidina → secuestro hierro en macrófagos</td><td style="padding:7px;border:1px solid #ddd">Normocítica/normocrómica (o micro-hipocrómica si prolongada)</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Hemolítica</strong></td><td style="padding:7px;border:1px solid #ddd">Destrucción acelerada GR (intra o extravascular)</td><td style="padding:7px;border:1px solid #ddd">Policromasia · Esferocitos (AHAI) · Reticulocitosis ↑↑</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Hemofilias y Enfermedad de Von Willebrand</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 4px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left"></th>
    <th style="padding:7px;text-align:left">EvW</th>
    <th style="padding:7px;text-align:left">Hemofilia A</th>
    <th style="padding:7px;text-align:left">Hemofilia B</th>
    <th style="padding:7px;text-align:left">Hemofilia C</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Factor</strong></td><td style="padding:7px;border:1px solid #ddd">FvW (cuantitativo o cualitativo)</td><td style="padding:7px;border:1px solid #ddd">Factor VIII</td><td style="padding:7px;border:1px solid #ddd">Factor IX</td><td style="padding:7px;border:1px solid #ddd">Factor XI</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Herencia</strong></td><td style="padding:7px;border:1px solid #ddd">Autosómica</td><td style="padding:7px;border:1px solid #ddd">Recesiva ligada X</td><td style="padding:7px;border:1px solid #ddd">Recesiva ligada X</td><td style="padding:7px;border:1px solid #ddd">Recesiva ligada X</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Frecuencia</strong></td><td style="padding:7px;border:1px solid #ddd">1:100 – 1:1.000</td><td style="padding:7px;border:1px solid #ddd">1:10.000</td><td style="padding:7px;border:1px solid #ddd">1:30.000</td><td style="padding:7px;border:1px solid #ddd">Muy rara (2 casos en Chile)</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Sexo</strong></td><td style="padding:7px;border:1px solid #ddd">Hombres y mujeres</td><td style="padding:7px;border:1px solid #ddd">Solo varones</td><td style="padding:7px;border:1px solid #ddd">Solo varones</td><td style="padding:7px;border:1px solid #ddd">Solo varones</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Clínica típica</strong></td><td style="padding:7px;border:1px solid #ddd">Hemorragias mucosas · menorragia · epistaxis · gingivorragias · sangrado postparto</td><td style="padding:7px;border:1px solid #ddd">Hemartrosis · hematomas musculares · hemorragia intracraneal</td><td style="padding:7px;border:1px solid #ddd">Hemartrosis · hematomas musculares</td><td style="padding:7px;border:1px solid #ddd">Variable</td></tr>
  </tbody>
</table>
`,
    valores: `
<h3 style="color:#1a6bab;margin:0 0 16px">Valores de Referencia — Unidad 1</h3>

<h4 style="color:#1a6bab;margin:0 0 8px">Recuento de Plaquetas</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:8px;text-align:left">Condición</th>
    <th style="padding:8px;text-align:left">Recuento (k/µL)</th>
    <th style="padding:8px;text-align:left">Interpretación</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd">Normal</td><td style="padding:8px;border:1px solid #ddd"><strong>150.000 – 400.000</strong></td><td style="padding:8px;border:1px solid #ddd">Hemostasia conservada</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Trombocitopenia leve</td><td style="padding:8px;border:1px solid #ddd">100.000 – 150.000</td><td style="padding:8px;border:1px solid #ddd">Vigilancia clínica</td></tr>
    <tr style="background:#fff3cd"><td style="padding:8px;border:1px solid #ddd">Diagnóstico PTI</td><td style="padding:8px;border:1px solid #ddd"><strong>&lt; 100.000</strong></td><td style="padding:8px;border:1px solid #ddd">+ morfología normal → PTI</td></tr>
    <tr style="background:#ffe0e0"><td style="padding:8px;border:1px solid #ddd">HIT Tipo II</td><td style="padding:8px;border:1px solid #ddd"><strong>~ 50.000</strong></td><td style="padding:8px;border:1px solid #ddd">Cambiar heparina de inmediato</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Trombocitosis reactiva</td><td style="padding:8px;border:1px solid #ddd">&lt; 1.000.000</td><td style="padding:8px;border:1px solid #ddd">Benigna, buscar causa subyacente</td></tr>
    <tr style="background:#ffe0e0"><td style="padding:8px;border:1px solid #ddd">Trombocitosis clonal</td><td style="padding:8px;border:1px solid #ddd"><strong>&gt; 1.000.000</strong></td><td style="padding:8px;border:1px solid #ddd">Maligna, estudio M.O.</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Diagnóstico PTI — Pruebas de Laboratorio</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:8px;text-align:left">Prueba</th><th style="padding:8px;text-align:left">Resultado diagnóstico</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd"><strong>PAIgG</strong> (gold estándar)</td><td style="padding:8px;border:1px solid #ddd">IgG asociada a plaquetas &gt; 100 → remoción inmune</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd"><strong>ELISA</strong></td><td style="padding:8px;border:1px solid #ddd">Anticuerpo específico anti-Gp plaquetarias</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd"><strong>MACA</strong></td><td style="padding:8px;border:1px solid #ddd">Detección IgG de membrana plaquetaria</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Mielograma</strong></td><td style="padding:8px;border:1px solid #ddd">Hiperplasia de megacariocitos + destrucción periférica &gt; 1%</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Ferritina Sérica — Anemia Ferropénica</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 6px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:8px;text-align:left">Población</th><th style="padding:8px;text-align:left">Rango normal (µg/L)</th><th style="padding:8px;text-align:left">Mediana</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd">Varón adulto</td><td style="padding:8px;border:1px solid #ddd">15 – 300</td><td style="padding:8px;border:1px solid #ddd">100 µg/L</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Mujer adulta</td><td style="padding:8px;border:1px solid #ddd">15 – 200</td><td style="padding:8px;border:1px solid #ddd">30 µg/L</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd">Niños</td><td style="padding:8px;border:1px solid #ddd">30 – 140</td><td style="padding:8px;border:1px solid #ddd">—</td></tr>
  </tbody>
</table>
<p style="font-size:12px;color:#6b7c93;margin:4px 0 20px"><strong>Ferritina ↓</strong> = confirma déficit de hierro · <strong>Ferritina ↑</strong> = anemia de enfermedad crónica</p>

<h4 style="color:#1a6bab;margin:18px 0 8px">Hemograma Comparativo por Tipo de Anemia</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:7px;text-align:left">Parámetro</th>
    <th style="padding:7px;text-align:left">Ferropénica</th>
    <th style="padding:7px;text-align:left">Megaloblástica</th>
    <th style="padding:7px;text-align:left">Enf. Crónica</th>
    <th style="padding:7px;text-align:left">Hemolítica</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Hb</strong></td><td style="padding:7px;border:1px solid #ddd">↓</td><td style="padding:7px;border:1px solid #ddd">↓</td><td style="padding:7px;border:1px solid #ddd">↓ leve-moderada</td><td style="padding:7px;border:1px solid #ddd">↓</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>VGM</strong></td><td style="padding:7px;border:1px solid #ddd">↓ microcítica</td><td style="padding:7px;border:1px solid #ddd">↑ macrocítica oval</td><td style="padding:7px;border:1px solid #ddd">Normal o ↓</td><td style="padding:7px;border:1px solid #ddd">Normal o ↑</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>HCM/CHCM</strong></td><td style="padding:7px;border:1px solid #ddd">↓ hipocrómica</td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">Normal o ↓</td><td style="padding:7px;border:1px solid #ddd">↑ (esferocitosis)</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>RDW</strong></td><td style="padding:7px;border:1px solid #ddd">↑</td><td style="padding:7px;border:1px solid #ddd">↑</td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">↑</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Reticulocitos</strong></td><td style="padding:7px;border:1px solid #ddd">↓ hiporregenerativa</td><td style="padding:7px;border:1px solid #ddd">↓ hiporregenerativa</td><td style="padding:7px;border:1px solid #ddd">↓</td><td style="padding:7px;border:1px solid #ddd">↑↑ regenerativa</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Bili. indirecta</strong></td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">↑ leve</td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">↑↑</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>DHL</strong></td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">↑</td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">↑</td></tr>
    <tr><td style="padding:7px;border:1px solid #ddd"><strong>Haptoglobina</strong></td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">↓ o ausente</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd"><strong>Ferritina</strong></td><td style="padding:7px;border:1px solid #ddd">↓↓</td><td style="padding:7px;border:1px solid #ddd">Normal</td><td style="padding:7px;border:1px solid #ddd">↑ (fase aguda)</td><td style="padding:7px;border:1px solid #ddd">Normal</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Severidad Hemofilias — Actividad del Factor</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:8px;text-align:left">Forma</th><th style="padding:8px;text-align:left">Actividad</th><th style="padding:8px;text-align:left">Presentación clínica</th>
  </tr></thead>
  <tbody>
    <tr style="background:#ffe0e0"><td style="padding:8px;border:1px solid #ddd"><strong>Severa</strong></td><td style="padding:8px;border:1px solid #ddd"><strong>&lt; 1%</strong></td><td style="padding:8px;border:1px solid #ddd">Hemorragias espontáneas antes de los 6 meses · Hemorragia intracraneal al parto</td></tr>
    <tr style="background:#fff3cd"><td style="padding:8px;border:1px solid #ddd"><strong>Moderada</strong></td><td style="padding:8px;border:1px solid #ddd"><strong>1 – 5%</strong></td><td style="padding:8px;border:1px solid #ddd">Sangrado antes de los 2 años · Traumas mínimos o post-maniobras invasivas</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd"><strong>Leve</strong></td><td style="padding:8px;border:1px solid #ddd"><strong>&gt; 5% y &lt; 40%</strong></td><td style="padding:8px;border:1px solid #ddd">Síndrome hemorragíparo frente a traumatismos importantes o cirugía</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Laboratorio — EvW vs Hemofilia A</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 20px">
  <thead><tr style="background:#1a6bab;color:#fff">
    <th style="padding:8px;text-align:left">Prueba</th><th style="padding:8px;text-align:left">EvW</th><th style="padding:8px;text-align:left">Hemofilia A</th>
  </tr></thead>
  <tbody>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd">Tiempo de sangría/oclusión</td><td style="padding:8px;border:1px solid #ddd">↑ Prolongado</td><td style="padding:8px;border:1px solid #ddd">Normal</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">TTPA</td><td style="padding:8px;border:1px solid #ddd">Variable (según ↓ F-VIII)</td><td style="padding:8px;border:1px solid #ddd">↑ Prolongado</td></tr>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd">TP</td><td style="padding:8px;border:1px solid #ddd">Normal</td><td style="padding:8px;border:1px solid #ddd">Normal</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">FvW:Ag</td><td style="padding:8px;border:1px solid #ddd">↓ Disminuido</td><td style="padding:8px;border:1px solid #ddd"><strong>Normal ← clave</strong></td></tr>
    <tr style="background:#f4f7fb"><td style="padding:8px;border:1px solid #ddd">F-VIII</td><td style="padding:8px;border:1px solid #ddd">↓ proporcional a ↓ FvW</td><td style="padding:8px;border:1px solid #ddd">↓↓ marcado</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">RIPA (ristocetina)</td><td style="padding:8px;border:1px solid #ddd">↓ Defecto</td><td style="padding:8px;border:1px solid #ddd">Normal</td></tr>
  </tbody>
</table>

<h4 style="color:#1a6bab;margin:18px 0 8px">Bernard Soulier — Datos Clave</h4>
<ul style="font-size:13px;color:#1c2b3a;padding-left:20px;line-height:1.9;margin:0">
  <li>Tiempo de sangría: <strong>&gt; 30 minutos</strong></li>
  <li>Trombocitopenia + plaquetas gigantes (80% de los casos)</li>
  <li>Defecto GpIb,V,IX → no interactúa con FvW → falla adhesión plaquetaria</li>
  <li>Contadores hematológicos registran plaquetas gigantes como GR → falso ↓ plaquetas</li>
</ul>
`,
    casos: `
<h3 style="color:#1a6bab;margin:0 0 16px">Casos Clínicos — Unidad 1</h3>

<div style="background:#f0f4ff;border-left:4px solid #1a6bab;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a6bab;margin:0 0 10px">Caso 1 — PTI (Púrpura Trombocitopénica Inmune)</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Petequias, equimosis y epistaxis. Rcto plaquetas &lt; 100.000/µL con morfología plaquetaria normal.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Mecanismo (PIT):</strong> Las plaquetas envejecen → Gp pierden estructura 3ria/4ria → expresan neoepítopos → IgG circulante se une → complejo reconocido por receptor Fc de macrófagos (bazo/monocitos) → destrucción plaquetaria. Las células T no logran apagar clones autorreactivos → presentan Ag GpIb,IX,V a linfocitos B → producción IgG anti-Gp normales → destrucción.</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Diagnóstico:</strong></p>
  <ul style="font-size:13px;margin:0 0 8px;padding-left:20px">
    <li>Mielograma: hiperplasia megacariocitos + destrucción periférica &gt; 1%</li>
    <li>PAIgG (gold estándar): IgG plaquetaria &gt; 100</li>
    <li>ELISA: anticuerpo anti-Gp plaquetarias</li>
    <li>Descartar: leucemia aguda, VIH, Hepatitis B y C (similitud antigénica)</li>
  </ul>
  <p style="font-size:13px;margin:0"><strong>Tratamiento:</strong> Corticoides · IgG intravenosa · Anti-CD20 (Rituximab) · Esplenectomía · Trombopoyetina · Inmunosupresores<br>
  <strong>PTI 2dario:</strong> LES · Sd. antifosfolípidos · LAL · Sd. Evans (trombocitopenia + anemia hemolítica inmune)</p>
</div>

<div style="background:#f0f4ff;border-left:4px solid #1a6bab;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a6bab;margin:0 0 10px">Caso 2 — HIT (Trombocitopenia inducida por Heparina)</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Contexto:</strong> Paciente que requiere anticoagulación rápida con heparina.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Mecanismo:</strong> Heparina + Factor 4 plaquetario → complejo reconocido por sist. inmune → linfocitos B producen IgG anti-F4-heparina → receptor Fc en plaquetas → activación plaquetaria → libera micropartículas con trombina → trombosis. Monocito con receptor Fc se activa → expone Factor Tisular → activa coagulación.</p>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:6px 0">
    <thead><tr style="background:#1a6bab;color:#fff">
      <th style="padding:6px;text-align:left"></th><th style="padding:6px;text-align:left">HIT Tipo I</th><th style="padding:6px;text-align:left">HIT Tipo II ★</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:6px;border:1px solid #ddd">Mecanismo</td><td style="padding:6px;border:1px solid #ddd">No inmune</td><td style="padding:6px;border:1px solid #ddd">Mediado por IgG</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:6px;border:1px solid #ddd">Rcto plaquetas</td><td style="padding:6px;border:1px solid #ddd">Moderadamente bajo</td><td style="padding:6px;border:1px solid #ddd">~ 50.000</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Manejo</td><td style="padding:6px;border:1px solid #ddd">Vigilancia</td><td style="padding:6px;border:1px solid #ddd">Cambiar heparina por otro anticoagulante</td></tr>
    </tbody>
  </table>
</div>

<div style="background:#f0f4ff;border-left:4px solid #1a6bab;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a6bab;margin:0 0 10px">Caso 3 — Hemofilia A (Caso de clases — Prof. José Pedro Díaz)</h4>
  <p style="font-size:13px;margin:0 0 6px"><strong>Presentación:</strong> Paciente masculino, 15 años, antecedentes de Hemofilia A. Consulta urgencias por 12 horas de aumento doloroso de volumen en rodilla derecha y claudicación, iniciado tras golpe leve.</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Examen físico:</strong> Pálido · FC 114 lpm · Aumento de volumen rodilla + rigidez articular.</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Diagnóstico:</strong> Hemartrosis por hemofilia A.<br>TTPA prolongado · TP normal · FvW:Ag normal (diferencia clave con EvW).</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Recuerda:</strong> Hemartrosis = manifestación más frecuente (65-80%). Articulaciones: rodilla &gt; codo &gt; tobillo &gt; hombros. Hemorragia repetida → artropatía hemofílica (hipertrofia sinovial, desaparición cartílago, atrofia muscular).</p>
  <p style="font-size:13px;margin:0"><strong>Tratamiento:</strong> Liofilizados del Factor VIII.</p>
</div>

<div style="background:#f0f4ff;border-left:4px solid #1a6bab;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a6bab;margin:0 0 10px">Caso 4 — Trombocitosis: Clonal vs Reactiva</h4>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:0">
    <thead><tr style="background:#1a6bab;color:#fff">
      <th style="padding:7px;text-align:left">Criterio</th><th style="padding:7px;text-align:left">Clonal (Maligna)</th><th style="padding:7px;text-align:left">Reactiva (Benigna)</th>
    </tr></thead>
    <tbody>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Esplenomegalia</td><td style="padding:7px;border:1px solid #ddd">40%</td><td style="padding:7px;border:1px solid #ddd">No</td></tr>
      <tr><td style="padding:7px;border:1px solid #ddd">Riesgo trombosis</td><td style="padding:7px;border:1px solid #ddd">ICTUS · T. arterial o venosa</td><td style="padding:7px;border:1px solid #ddd">No</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Riesgo hemorragia</td><td style="padding:7px;border:1px solid #ddd">Sí (plaquetas defectuosas)</td><td style="padding:7px;border:1px solid #ddd">No</td></tr>
      <tr><td style="padding:7px;border:1px solid #ddd">Enf. de base</td><td style="padding:7px;border:1px solid #ddd">No</td><td style="padding:7px;border:1px solid #ddd">Sí</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Rcto plaquetas</td><td style="padding:7px;border:1px solid #ddd"><strong>&gt; 1.000.000</strong></td><td style="padding:7px;border:1px solid #ddd"><strong>&lt; 1.000.000</strong></td></tr>
      <tr><td style="padding:7px;border:1px solid #ddd">Mielograma</td><td style="padding:7px;border:1px solid #ddd">Hiperplasia + displasia Mk · hiperdiploidia</td><td style="padding:7px;border:1px solid #ddd">Hiperplasia Mk morfología normal</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Morfología plaquetaria</td><td style="padding:7px;border:1px solid #ddd">Fragmentos núcleo Mk · plaquetas gigantes</td><td style="padding:7px;border:1px solid #ddd">Normal</td></tr>
    </tbody>
  </table>
</div>

<div style="background:#f0f4ff;border-left:4px solid #1a6bab;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#1a6bab;margin:0 0 10px">Caso 5 — Anemia Ferropénica vs Megaloblástica</h4>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:0">
    <thead><tr style="background:#1a6bab;color:#fff">
      <th style="padding:7px;text-align:left">Criterio</th><th style="padding:7px;text-align:left">Ferropénica</th><th style="padding:7px;text-align:left">Megaloblástica</th>
    </tr></thead>
    <tbody>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Etiología</td><td style="padding:7px;border:1px solid #ddd">↓ ingesta hierro · absorción deficiente · hemorragias crónicas</td><td style="padding:7px;border:1px solid #ddd">↓ B12 (anemia perniciosa, dieta) · ↓ folato (alcohol, malabsorción, embarazo)</td></tr>
      <tr><td style="padding:7px;border:1px solid #ddd">FSP</td><td style="padding:7px;border:1px solid #ddd">Hipocromía · microcitosis · anisocitosis · poiquilocitosis</td><td style="padding:7px;border:1px solid #ddd">Macrocitosis oval · macropolicitos polisegmentados</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Confirmación</td><td style="padding:7px;border:1px solid #ddd">Ferritina sérica ↓</td><td style="padding:7px;border:1px solid #ddd">AMO: médula hipercelular + megaloblastosis</td></tr>
      <tr><td style="padding:7px;border:1px solid #ddd">Tto 1ª línea</td><td style="padding:7px;border:1px solid #ddd">Hierro oral/sulfato ferroso · adultos 100-200 mg/día × 3-4 meses</td><td style="padding:7px;border:1px solid #ddd">Ác. fólico 1 mg/día VO · B12 1.000 U IM c/semana × 2-3 dosis</td></tr>
    </tbody>
  </table>
</div>
`,
    notas: `
<h3 style="color:#1a6bab;margin:0 0 16px">Notas para el Certamen — Unidad 1</h3>

<div style="background:#fff3cd;border-left:4px solid #f0a000;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#b07000;margin:0 0 10px">Lo más preguntado</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:2">
    <li>Clasificación trombocitopenias en 4 columnas (producción / distribución / destrucción / pseudo)</li>
    <li>Mecanismo PTI paso a paso (senescencia → neoepitopos → IgG → Fc macrófago → destrucción)</li>
    <li>HIT Tipo I vs Tipo II: mediado por IgG, cambiar anticoagulante</li>
    <li>Trombocitosis clonal vs reactiva: cuadro comparativo completo</li>
    <li>Diferencias EvW vs Hemofilia A en laboratorio (FvW:Ag, TTPA, RIPA)</li>
    <li>Severidad hemofilias: &lt;1% severa · 1-5% moderada · &gt;5% leve</li>
    <li>Herencia hemofilias: ligada al X, solo varones</li>
  </ul>
</div>

<div style="background:#f0f4ff;border-left:4px solid #1a6bab;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a6bab;margin:0 0 10px">Diferencias clave que confunden</h4>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:0">
    <thead><tr style="background:#1a6bab;color:#fff">
      <th style="padding:7px;text-align:left">Confusión frecuente</th><th style="padding:7px;text-align:left">La diferencia real</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:7px;border:1px solid #ddd">EvW vs Hemofilia A</td><td style="padding:7px;border:1px solid #ddd">EvW: FvW:Ag ↓, afecta hombres Y mujeres, clínica mucosa, RIPA defecto. Hemofilia A: FvW:Ag NORMAL, solo varones, hemartrosis, RIPA normal.</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">PTI vs Pseudotrombocitopenia</td><td style="padding:7px;border:1px solid #ddd">Pseudo: satelitismo y aglutinación IN VITRO por EDTA. Repetir en citrato o heparina. PTI: destrucción real in vivo.</td></tr>
      <tr><td style="padding:7px;border:1px solid #ddd">Trombocitosis clonal vs reactiva</td><td style="padding:7px;border:1px solid #ddd">Clonal: &gt;1.000.000, displasia M.O., esplenomegalia 40%, riesgo hemorragia. Reactiva: &lt;1.000.000, causa subyacente, sin displasia.</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Plaquetas grises vs Hemansky</td><td style="padding:7px;border:1px solid #ddd">Plaquetas grises: ausencia gránulos ALFA. Hemansky: ausencia gránulos DENSOS + albinismo OCP.</td></tr>
      <tr><td style="padding:7px;border:1px solid #ddd">Hemansky vs Chediak-Higashi</td><td style="padding:7px;border:1px solid #ddd">Ambos: ausencia gránulos densos. Chediak agrega gigantismo lisosómico en leucocitos + pancitopenia + riesgo leucemia.</td></tr>
      <tr style="background:#f4f7fb"><td style="padding:7px;border:1px solid #ddd">Anemia ferropénica vs enf. crónica</td><td style="padding:7px;border:1px solid #ddd">Ferropénica: ferritina ↓. Enf. crónica: ferritina ↑ (reactante fase aguda), Fe y transferrina ↓.</td></tr>
    </tbody>
  </table>
</div>

<div style="background:#f0fff4;border-left:4px solid #28a745;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a7a3a;margin:0 0 10px">Fármacos que afectan plaquetas</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:1.9">
    <li><strong>Aspirina:</strong> inhibe COX-1 de forma IRREVERSIBLE → bloquea TxA2. Dura 10 días (turnover plaquetario). Donante no puede dar sangre en ese período.</li>
    <li><strong>Clopidogrel / Ticlopidina / Prasugrel:</strong> inhiben receptor ADP (P2Y12)</li>
    <li><strong>Abciximab / Eptifibatide / Tirofiban:</strong> bloquean GpIIb/IIIa</li>
    <li><strong>Dipiridamol:</strong> aumenta AMPc plaquetario</li>
    <li><strong>EDTA:</strong> pseudotrombocitopenia in vitro (autoaglutinación)</li>
    <li><strong>Heparina:</strong> puede causar HIT tipo II (IgG anti-F4-heparina)</li>
    <li><strong>DDAVP:</strong> análogo vasopresina → libera FvW del endotelio → 4-5x el valor basal × 8-10 horas (tratamiento EvW)</li>
  </ul>
</div>

<div style="background:#f4f7fb;border-left:4px solid #6b7c93;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1c2b3a;margin:0 0 10px">Herencia Hemofilias — Regla rápida</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:1.9">
    <li>100% de las <strong>hijas</strong> de un hemofílico son portadoras</li>
    <li>50% de los <strong>hijos</strong> de mujeres portadoras son hemofílicos</li>
    <li>30-40% de hemofílicos NO tienen antecedentes familiares (mutación de novo)</li>
    <li>Frecuencia: Hemofilia A &gt; B &gt; C (C rarísima, 2 casos en Chile)</li>
  </ul>
</div>

<div style="background:#f4f7fb;border-left:4px solid #6b7c93;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#1c2b3a;margin:0 0 10px">Conexiones entre temas</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:1.9">
    <li>Anemia aguda → ↑ Eritropoyetina → reacción cruzada con Trombopoyetina → <strong>trombocitosis reactiva</strong></li>
    <li>FvW transporta y protege F-VIII → ↓ FvW = ↓ F-VIII proporcional → TTPA puede prolongarse en EvW grave</li>
    <li>Esplenomegalia: causa trombocitopenia (secuestro). Esplenectomía: causa trombocitosis (libera plaquetas).</li>
    <li>IL-6 (proteína fase aguda): estimula megacariopoyesis → trombocitosis reactiva en inflamación, TBC, artritis</li>
    <li>Vitamina C → síntesis colágeno → déficit causa purpura senil (escorbuto)</li>
    <li>Sd. Rendu-Weber-Osler: telangiectasia hemorrágica hereditaria (AD), anastomosis arteriola-vénula irregular, purpura, epistaxis</li>
  </ul>
</div>
`
  },
  2: {
    conceptos: `
<h3 style="color:#c97a96;margin:0 0 16px">Patología Leucocitaria — Conceptos</h3>

<h4 style="color:#c97a96;margin:0 0 8px">LMA vs LLA — Clasificación y Características</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Criterio</th>
    <th style="padding:7px;text-align:left">LMA (Leucemia Mieloide Aguda)</th>
    <th style="padding:7px;text-align:left">LLA (Leucemia Linfoblástica Aguda)</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Origen</strong></td><td style="padding:7px;border:1px solid #f0dde5">Expansión clonal maligna de blastos mieloides</td><td style="padding:7px;border:1px solid #f0dde5">Expansión clonal de progenitores linfoides inmaduros (B, T o NK)</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Tamaño blasto</strong></td><td style="padding:7px;border:1px solid #f0dde5">Mediano a grande</td><td style="padding:7px;border:1px solid #f0dde5">Pequeño a mediano</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Citoplasma</strong></td><td style="padding:7px;border:1px solid #f0dde5">Finos gránulos → pueden fusionarse → <strong>Bastones de Auer</strong> (60-70%)</td><td style="padding:7px;border:1px solid #f0dde5">Agranular. Sin bastones de Auer.</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Criterio diagnóstico</strong></td><td style="padding:7px;border:1px solid #f0dde5">≥ 20% blastos en sangre o MO (OMS)</td><td style="padding:7px;border:1px solid #f0dde5">≥ 25% blastos en sangre o MO</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Hiatus leucémico</strong></td><td style="padding:7px;border:1px solid #f0dde5">Sí — blastos + segmentados, sin formas intermedias</td><td style="padding:7px;border:1px solid #f0dde5">Sí</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Adenopatías</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>No presenta</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>Sí presenta</strong> (+ hematopoyesis extramedular)</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Marcadores IHQ</strong></td><td style="padding:7px;border:1px solid #f0dde5">cMPO, lisozima, esterasa. Cup-like blast (forma de bowl)</td><td style="padding:7px;border:1px solid #f0dde5">LLA-B: CD19, CD10, CD79a. LLA-T: CD3, CD7, CD5</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Displasia</strong></td><td style="padding:7px;border:1px solid #f0dde5">Sí: hipogranularidad, Döhle, bastones Auer, puentes internucleares</td><td style="padding:7px;border:1px solid #f0dde5">No hay displasia en hemograma ni mielograma</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Mal pronóstico</strong></td><td style="padding:7px;border:1px solid #f0dde5">↑ BCL2, mutación FLT3-ITD</td><td style="padding:7px;border:1px solid #f0dde5">t(9;22) Ph+ en adultos, t(4;11) KMT2A en lactantes</td></tr>
  </tbody>
</table>

<h4 style="color:#c97a96;margin:18px 0 8px">Clasificación de Blastos (LMA)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Tipo</th><th style="padding:7px;text-align:left">Descripción</th><th style="padding:7px;text-align:left">Equivalente</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Tipo I</strong></td><td style="padding:7px;border:1px solid #f0dde5">Agranular</td><td style="padding:7px;border:1px solid #f0dde5">Blasto puro</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Tipo II</strong></td><td style="padding:7px;border:1px solid #f0dde5">&lt; 20 gránulos</td><td style="padding:7px;border:1px solid #f0dde5">—</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Tipo III</strong></td><td style="padding:7px;border:1px solid #f0dde5">&gt; 20 gránulos</td><td style="padding:7px;border:1px solid #f0dde5"><strong>= Promielocito</strong> (equivalente blástico en LMA)</td></tr>
  </tbody>
</table>

<h4 style="color:#c97a96;margin:18px 0 8px">Síndrome Mononucleosico — EBV / CMV / Hantavirus</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Criterio</th>
    <th style="padding:7px;text-align:left">EBV (98%)</th>
    <th style="padding:7px;text-align:left">CMV (7%)</th>
    <th style="padding:7px;text-align:left">Hantavirus</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Virus</strong></td><td style="padding:7px;border:1px solid #f0dde5">DNA doble cadena · herpesvirus tipo 4</td><td style="padding:7px;border:1px solid #f0dde5">Herpesvirus tipo 5</td><td style="padding:7px;border:1px solid #f0dde5">RNA · zoonótico (roedores)</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Clínica</strong></td><td style="padding:7px;border:1px solid #f0dde5">Faringitis + adenopatías + esplenomegalia</td><td style="padding:7px;border:1px solid #f0dde5">Similar EBV pero menos faríngeo/ganglionar</td><td style="padding:7px;border:1px solid #f0dde5">Sd. cardiopulmonar: fiebre, mialgias, disnea → shock</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Heterófilos</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>Positivos</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>Negativos</strong> ← clave diferencial</td><td style="padding:7px;border:1px solid #f0dde5">Negativos</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Hemograma clave</strong></td><td style="padding:7px;border:1px solid #f0dde5">Leucocitosis 10-20 k/µL · Linfocitosis relativa ≥50% · Linfocitos reactivos ≥10% · Neutropenia &lt;1.500</td><td style="padding:7px;border:1px solid #f0dde5">Similar a EBV, células NK↑ (CD56+)</td><td style="padding:7px;border:1px solid #f0dde5">Plaquetas &lt;50.000 · Hcto &gt;45% · Leucocitos &gt;25k · Inmunoblastos ≥10%</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Célula morfológica</strong></td><td style="padding:7px;border:1px solid #f0dde5">Linfocito reactivo (basofilia citoplasmática)</td><td style="padding:7px;border:1px solid #f0dde5">Linfocito reactivo</td><td style="padding:7px;border:1px solid #f0dde5"><strong>Inmunoblasto (Downey III)</strong> — núcleo prominente, basofilia intensa</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Confirmación</strong></td><td style="padding:7px;border:1px solid #f0dde5">IgM/IgG anti-EBV · Anticuerpos heterófilos</td><td style="padding:7px;border:1px solid #f0dde5">Serología CMV</td><td style="padding:7px;border:1px solid #f0dde5">ELISA Hantavirus · biología molecular ISP</td></tr>
  </tbody>
</table>

<h4 style="color:#c97a96;margin:18px 0 8px">Herramientas Diagnósticas — Leucemias Agudas</h4>
<ul style="font-size:13px;padding-left:20px;line-height:1.9;margin:0">
  <li><strong>Hemograma:</strong> fórmula leucocitaria en 200 leucocitos (100 si hay leucopenia)</li>
  <li><strong>Mielograma:</strong> lectura de 500 células con tinción MGG. Evaluar: % blastos, displasia, % sideroblastos en anillo, citogenética</li>
  <li><strong>FACS / Citometría de flujo:</strong> inmunofenotipo con marcadores CD — más sensible que morfología</li>
  <li><strong>Citogenética / FISH:</strong> 80% de LLA tienen alteración citogenética identificable</li>
  <li><strong>LCR:</strong> obligatorio en LMA-m5 (monocítica) y LLA (compromiso SNC frecuente)</li>
  <li><strong>Bioquímica:</strong> función renal/hepática + marcadores lisis tumoral (LDH, Ca, ácido úrico, K, P)</li>
  <li><strong>Coagulación:</strong> FBG, DD, TP, TTPA — especialmente si hay bastones de Auer (riesgo CID)</li>
</ul>

<h4 style="color:#c97a96;margin:24px 0 8px">Mieloma Múltiple — Conceptos esenciales</h4>
<p style="font-size:13px;margin:0 0 8px">Neoplasia de células plasmáticas (CP) secretoras de proteína monoclonal. Segunda neoplasia hematológica más frecuente. Incidencia Chile: H 4,3 / M 3,2 por 100.000/año. (Guía SOCHIHEM 2025)</p>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Criterio diagnóstico CRAB / SLIM</th><th style="padding:7px;text-align:left">Definición</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>CP en MO ≥ 10%</strong> + criterio CRAB o SLIM</td><td style="padding:7px;border:1px solid #f0dde5">Definición IMWG 2014</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>C</strong>alcio sérico ≥ 11 mg/dL</td><td style="padding:7px;border:1px solid #f0dde5">Hipercalcemia</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>R</strong>enal: creatinina ≥ 2 mg/dL o clearence &lt; 40 mL/min</td><td style="padding:7px;border:1px solid #f0dde5">Insuficiencia renal</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>A</strong>nemia: Hb &lt; 10 g/dL o &gt; 2 g/dL bajo límite inferior</td><td style="padding:7px;border:1px solid #f0dde5">Anemia atribuible al MM</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>B</strong>one (hueso): lesión osteolítica ≥ 5 mm en TAC/PET/Rx</td><td style="padding:7px;border:1px solid #f0dde5">Lesión ósea</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>SLIM:</strong> CP en MO ≥ 60% <em>O</em> cadenas livianas ≥ 100 <em>O</em> &gt;1 lesión focal ≥ 5mm en RNM</td><td style="padding:7px;border:1px solid #f0dde5">Biomarcadores malignidad (sin CRAB)</td></tr>
  </tbody>
</table>
<ul style="font-size:13px;padding-left:20px;line-height:1.9;margin:0 0 18px">
  <li><strong>Laboratorio:</strong> Hemograma + VHS + frotis (Rouleaux + % CP circulantes) · EFP · Inmunofijación · Cadenas livianas libres (κ/λ) · B2-microglobulina · LDH</li>
  <li><strong>MO:</strong> Mielograma + biopsia + inmunofenotipo (citometría de flujo) + FISH (del17p, t4;14, t14;16, +1q)</li>
  <li><strong>Imágenes:</strong> PET-CT (elección enfermedad extramedular) · RNM (lesiones focales, sospecha asintomático) · TAC baja dosis (enfermedad ósea)</li>
  <li><strong>Morfología frotis:</strong> Rouleaux (apilamientos de GR "en pilas de monedas") · plasmocitos circulantes</li>
</ul>

<h4 style="color:#c97a96;margin:18px 0 8px">Síndrome Mielodisplásico (SMD) — Clasificación OMS 2022</h4>
<p style="font-size:13px;margin:0 0 8px">Grupo heterogéneo de neoplasias mieloides clonales. 80% se diagnostican en &gt;60 años. Incidencia: ~4/100.000/año. Riesgo de transformación a LMA variable según tipo. (Guía SOCHIHEM 2025)</p>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 12px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Tipo SMD (OMS 2022)</th><th style="padding:7px;text-align:left">Blastos MO / SP</th><th style="padding:7px;text-align:left">Marcador clave</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">MDS con bajo blastos + del 5q</td><td style="padding:7px;border:1px solid #f0dde5">&lt;5% MO / &lt;2% SP</td><td style="padding:7px;border:1px solid #f0dde5">Deleción 5q aislada · lenalidomida</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">MDS-SF3B1</td><td style="padding:7px;border:1px solid #f0dde5">&lt;5% / &lt;2%</td><td style="padding:7px;border:1px solid #f0dde5">Mutación SF3B1 · sideroblastos en anillo ≥15%</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">MDS-biTP53</td><td style="padding:7px;border:1px solid #f0dde5">&lt;20%</td><td style="padding:7px;border:1px solid #f0dde5">2 mutaciones TP53 · cariotipo complejo · peor pronóstico</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">MDS-LB (bajo blastos)</td><td style="padding:7px;border:1px solid #f0dde5">&lt;5% / &lt;2%</td><td style="padding:7px;border:1px solid #f0dde5">Displasia morfológica ≥10% en ≥1 serie</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">MDS-IB1 (aumento blastos 1)</td><td style="padding:7px;border:1px solid #f0dde5">5-9% MO / 2-4% SP</td><td style="padding:7px;border:1px solid #f0dde5">Mayor riesgo transformación</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">MDS-IB2 (aumento blastos 2)</td><td style="padding:7px;border:1px solid #f0dde5">10-19% MO / 5-19% SP</td><td style="padding:7px;border:1px solid #f0dde5">Alto riesgo transformación a LMA</td></tr>
  </tbody>
</table>
<p style="font-size:12px;color:#7a6570;margin:0 0 6px"><strong>Sideroblastos en anillo:</strong> ≥5 gránulos en disposición perinuclear ocupando 1/3 o más del contorno nuclear (tinción de Pearls/azul de Prusia).</p>
<p style="font-size:12px;color:#7a6570;margin:0"><strong>Mutaciones frecuentes SMD:</strong> SF3B1 (15-30%) · TET2 (15-25%) · ASXL1 (10-20%) · SRSF2 (10-15%) · RUNX1 (10-15%) · TP53 (5-10%)</p>
`,
    valores: `
<h3 style="color:#c97a96;margin:0 0 16px">Valores de Referencia — Unidad 2</h3>
<h4 style="color:#c97a96;margin:0 0 8px">LLA — Clasificación inmunofenotípica (OMS 2022 / EGIL)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Tipo LLA-B</th><th style="padding:7px;text-align:left">Marcadores</th>
    <th style="padding:7px;text-align:left">Tipo LLA-T</th><th style="padding:7px;text-align:left">Marcadores</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Pro-B</strong></td><td style="padding:7px;border:1px solid #f0dde5">TdT+ · CD19+ · CD22+ · CD79a+</td><td style="padding:7px;border:1px solid #f0dde5"><strong>Pro-T</strong></td><td style="padding:7px;border:1px solid #f0dde5">TdT+ · CD3c+ · CD7+ · CD2- · CD5-</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Común (cALL)</strong></td><td style="padding:7px;border:1px solid #f0dde5">TdT+ · CD19+ · CD22+ · CD79a+ · <strong>CD10+</strong> · Ig-(s y c)</td><td style="padding:7px;border:1px solid #f0dde5"><strong>Pre-T</strong></td><td style="padding:7px;border:1px solid #f0dde5">TdT+ · CD3c+ · CD7+ · CD2+ y/o CD5+ · CD1a-</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Pre-B</strong></td><td style="padding:7px;border:1px solid #f0dde5">TdT+ · CD19+ · CD22+ · CD79a+ · CD10+ · <strong>cIg+</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>T Tímica cortical</strong></td><td style="padding:7px;border:1px solid #f0dde5">TdT+ · CD3c+/s+ · CD7+ · CD2+ · CD5± · <strong>CD1a+</strong> · CD4+ · CD8±</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Madura (→ linfoma B)</strong></td><td style="padding:7px;border:1px solid #f0dde5">sIg+ · CD19+ · CD22+ · CD79a+ · CD20+/-</td><td style="padding:7px;border:1px solid #f0dde5"><strong>ETP (early T precursor)</strong></td><td style="padding:7px;border:1px solid #f0dde5">CD5-/d · CD1a- · CD8- · +1 marcador mieloide (CD117, CD34, CD13)</td></tr>
  </tbody>
</table>
<p style="font-size:12px;color:#7a6570;margin:-10px 0 18px"><strong>Nota OMS 2022:</strong> La LLA-B madura se clasifica ahora como Linfoma B maduro con invasión de MO/SP, no tratada en guía de LLA.</p>

<h4 style="color:#c97a96;margin:18px 0 8px">LLA — Grupos citogenéticos y pronóstico (adultos)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Alteración</th><th style="padding:7px;text-align:left">Frecuencia adultos</th><th style="padding:7px;text-align:left">Pronóstico</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">BCR::ABL1 (Ph+)</td><td style="padding:7px;border:1px solid #f0dde5">25-30%</td><td style="padding:7px;border:1px solid #f0dde5">⚠️ Desfavorable → agregar ITK al tratamiento</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">BCR::ABL1-like</td><td style="padding:7px;border:1px solid #f0dde5">15-20%</td><td style="padding:7px;border:1px solid #f0dde5">⚠️ Desfavorable similar a Ph+</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">KMT2A (MLL) reordenado</td><td style="padding:7px;border:1px solid #f0dde5">5-10%</td><td style="padding:7px;border:1px solid #f0dde5">⚠️ Desfavorable (especialmente en lactantes)</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">ETV6::RUNX1 (TEL-AML1)</td><td style="padding:7px;border:1px solid #f0dde5">Raro en adultos (25% niños)</td><td style="padding:7px;border:1px solid #f0dde5">✅ Favorable</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">Alta hiperdiploidía (≥51 crs)</td><td style="padding:7px;border:1px solid #f0dde5">Raro en adultos (25% niños)</td><td style="padding:7px;border:1px solid #f0dde5">✅ Favorable</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">iAMP21</td><td style="padding:7px;border:1px solid #f0dde5">2-3%</td><td style="padding:7px;border:1px solid #f0dde5">⚠️ Requiere tratamiento intensivo</td></tr>
  </tbody>
</table>

<h4 style="color:#c97a96;margin:0 0 8px">Hemograma en Leucemias Agudas</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Parámetro</th>
    <th style="padding:7px;text-align:left">LMA</th>
    <th style="padding:7px;text-align:left">LLA (niños)</th>
    <th style="padding:7px;text-align:left">LLA (adultos)</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Leucocitos</strong></td><td style="padding:7px;border:1px solid #f0dde5">Variable · frecuente leucocitosis y reacción leucemoide</td><td style="padding:7px;border:1px solid #f0dde5">50% &lt; 10.000/µL</td><td style="padding:7px;border:1px solid #f0dde5">40% &lt; 10.000/µL</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Blastos en MO</strong></td><td style="padding:7px;border:1px solid #f0dde5">—</td><td style="padding:7px;border:1px solid #f0dde5">80% presentan ≥90%</td><td style="padding:7px;border:1px solid #f0dde5">70% presentan ≥90%</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>Hemoglobina</strong></td><td style="padding:7px;border:1px solid #f0dde5">↓ (anemia NN arregenerativa)</td><td style="padding:7px;border:1px solid #f0dde5">52% Hb &lt;8 g/dL</td><td style="padding:7px;border:1px solid #f0dde5">46% Hb &gt;10 g/dL</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Plaquetas</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>&lt; 50.000/µL</strong> · trombocitopenia</td><td style="padding:7px;border:1px solid #f0dde5">48%: &lt;50.000</td><td style="padding:7px;border:1px solid #f0dde5">52%: &lt;50.000</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>RAN</strong></td><td style="padding:7px;border:1px solid #f0dde5">&lt;1.000/µL (neutropenia)</td><td style="padding:7px;border:1px solid #f0dde5">Neutropenia frecuente</td><td style="padding:7px;border:1px solid #f0dde5">Neutropenia frecuente</td></tr>
  </tbody>
</table>

<h4 style="color:#c97a96;margin:18px 0 8px">Criterios Diagnósticos OMS — Leucemias Agudas</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:8px;text-align:left">Diagnóstico</th><th style="padding:8px;text-align:left">Criterio</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fde0e8"><td style="padding:8px;border:1px solid #f0dde5"><strong>LMA</strong></td><td style="padding:8px;border:1px solid #f0dde5"><strong>≥ 20%</strong> blastos en sangre o MO, O presencia de alteraciones citogenéticas recurrentes (independiente del % blastos)</td></tr>
    <tr><td style="padding:8px;border:1px solid #f0dde5"><strong>LLA</strong></td><td style="padding:8px;border:1px solid #f0dde5"><strong>≥ 25%</strong> blastos en sangre o MO</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:8px;border:1px solid #f0dde5">Linfoma (vs LLA)</td><td style="padding:8px;border:1px solid #f0dde5"><strong>&lt; 25%</strong> blastos en sangre → confirmar por mielograma/biopsia</td></tr>
    <tr><td style="padding:8px;border:1px solid #f0dde5">Sd. Mielodisplásico</td><td style="padding:8px;border:1px solid #f0dde5">&lt; 20% blastos en MO + displasia en ≥1 serie</td></tr>
  </tbody>
</table>

<h4 style="color:#c97a96;margin:18px 0 8px">Inmunofenotipo — Marcadores CD por Leucemia</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Tipo</th><th style="padding:7px;text-align:left">Marcadores positivos clave</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>LMA</strong></td><td style="padding:7px;border:1px solid #f0dde5">cMPO · lisozima · esterasa · CD13 · CD33 · CD117</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>LLA-B</strong></td><td style="padding:7px;border:1px solid #f0dde5">CD45 · CD19 · CD10 · CD79a · TdT · CD34 (según estadio proB/común/preB)</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5"><strong>LLA-T</strong></td><td style="padding:7px;border:1px solid #f0dde5">CD3 · CD7 · CD5 · CD2 · TdT</td></tr>
  </tbody>
</table>

<h4 style="color:#c97a96;margin:18px 0 8px">Valores Diagnósticos — Síndrome Mononucleosico</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 4px">
  <thead><tr style="background:#c97a96;color:#fff">
    <th style="padding:7px;text-align:left">Parámetro</th><th style="padding:7px;text-align:left">Valor diagnóstico</th><th style="padding:7px;text-align:left">Significado</th>
  </tr></thead>
  <tbody>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">Leucocitosis</td><td style="padding:7px;border:1px solid #f0dde5">10.000–20.000/µL</td><td style="padding:7px;border:1px solid #f0dde5">Por linfocitosis reactiva</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">Linfocitosis relativa</td><td style="padding:7px;border:1px solid #f0dde5"><strong>≥ 50%</strong></td><td style="padding:7px;border:1px solid #f0dde5">Apoya SMN</td></tr>
    <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">Linfocitos reactivos</td><td style="padding:7px;border:1px solid #f0dde5"><strong>≥ 10%</strong> (LUC &gt;6% o &gt;400/µL)</td><td style="padding:7px;border:1px solid #f0dde5">Criterio diagnóstico EBV/CMV</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5">Neutropenia</td><td style="padding:7px;border:1px solid #f0dde5">&lt; 1.500/µL (&lt;60%)</td><td style="padding:7px;border:1px solid #f0dde5">Desviación a la izquierda linfocitaria</td></tr>
    <tr style="background:#fde0e8"><td style="padding:7px;border:1px solid #f0dde5"><strong>Hanta: Plaquetas</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>&lt; 50.000/µL</strong></td><td style="padding:7px;border:1px solid #f0dde5">Criterio diagnóstico Hantavirus</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Hanta: Inmunoblastos</strong></td><td style="padding:7px;border:1px solid #f0dde5"><strong>≥ 10%</strong> = diagnóstico · ≥40% = mal pronóstico</td><td style="padding:7px;border:1px solid #f0dde5">Downey III: basofilia intensa, núcleo prominente</td></tr>
    <tr style="background:#fde0e8"><td style="padding:7px;border:1px solid #f0dde5"><strong>Hanta: Leucocitos</strong></td><td style="padding:7px;border:1px solid #f0dde5">&gt; 25.000/µL + baciliformes &gt;20%</td><td style="padding:7px;border:1px solid #f0dde5">Asociado a mayor mortalidad</td></tr>
    <tr><td style="padding:7px;border:1px solid #f0dde5"><strong>Hanta: Hematocrito</strong></td><td style="padding:7px;border:1px solid #f0dde5">&gt; 45% en hemoconcentración / fase poliuria</td><td style="padding:7px;border:1px solid #f0dde5">Asociado a deceso</td></tr>
  </tbody>
</table>
`,
    casos: `
<h3 style="color:#c97a96;margin:0 0 16px">Casos Clínicos — Unidad 2</h3>

<div style="background:#fdf0f4;border-left:4px solid #c97a96;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#c97a96;margin:0 0 10px">Caso 1 — LMA vs LLA: Síndrome de Falla Medular</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación común:</strong> Palidez, fatiga, fiebre sin foco, sangrado espontáneo (epistaxis, equimosis), infecciones a repetición. El cuadro se instala en días a semanas.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Mecanismo:</strong> Los blastos desplazan la hematopoyesis normal → anemia (↓ GR), neutropenia (↓ granulocitos), trombocitopenia (↓ megacariocitos). Tríada: síndrome anémico + síndrome hemorrágico + síndrome febril.</p>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:6px 0">
    <thead><tr style="background:#c97a96;color:#fff">
      <th style="padding:6px;text-align:left">Hallazgo</th><th style="padding:6px;text-align:left">LMA</th><th style="padding:6px;text-align:left">LLA</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:6px;border:1px solid #f0dde5">Adenopatías</td><td style="padding:6px;border:1px solid #f0dde5"><strong>No</strong></td><td style="padding:6px;border:1px solid #f0dde5"><strong>Sí</strong> + aumento testicular + compromiso SNC</td></tr>
      <tr style="background:#fdf0f4"><td style="padding:6px;border:1px solid #f0dde5">Bastones de Auer</td><td style="padding:6px;border:1px solid #f0dde5"><strong>Sí</strong> (60-70%) — patognomónico</td><td style="padding:6px;border:1px solid #f0dde5">No</td></tr>
      <tr><td style="padding:6px;border:1px solid #f0dde5">Hematopoyesis extramedular</td><td style="padding:6px;border:1px solid #f0dde5">No</td><td style="padding:6px;border:1px solid #f0dde5">Sí: hepato- y esplenomegalia</td></tr>
      <tr style="background:#fdf0f4"><td style="padding:6px;border:1px solid #f0dde5">Valor crítico lab</td><td style="padding:6px;border:1px solid #f0dde5">Blastos + Hb↓ + plaquetas &lt;50k + neutropenia</td><td style="padding:6px;border:1px solid #f0dde5">Blastos + Hb↓ + plaquetas &lt;50k + neutropenia</td></tr>
    </tbody>
  </table>
  <p style="font-size:12px;margin:8px 0 0"><strong>Informe hemograma:</strong> No clasificar por FAB, solo informar % y descripción morfológica de blastos como VALOR CRÍTICO. Mielograma: clasificar FAB + derivar a FACS.</p>
</div>

<div style="background:#fdf0f4;border-left:4px solid #c97a96;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#c97a96;margin:0 0 10px">Caso 2 — Síndrome Mononucleosico por EBV</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Joven 22 años. Odinofagia intensa, adenopatías cervicales, fiebre 38.5°C, fatiga, esplenomegalia al examen físico.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Hemograma:</strong> Leucocitos 18.000/µL · Linfocitosis 62% · Linfocitos reactivos 15% · Neutrófilos 28% · Plaquetas 140.000/µL.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Serología:</strong> Anticuerpos heterófilos (+) · IgM anti-EBV (+).</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Diagnóstico:</strong> Mononucleosis infecciosa por EBV. Criterios: linfocitosis relativa ≥50%, linfocitos reactivos ≥10%, heterófilos positivos.</p>
  <p style="font-size:13px;margin:0"><strong>Complicaciones a vigilar:</strong> Rotura esplénica, anemia aplásica inmune, linfomas a largo plazo.</p>
</div>

<div style="background:#fdf0f4;border-left:4px solid #c97a96;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#c97a96;margin:0 0 10px">Caso 3 — Hantavirus: Síndrome Cardiopulmonar</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Trabajador agrícola. Inicio con fiebre, mialgias, cefalea, vómitos (3 días). Evoluciona a disnea, taquicardia, hipotensión. Radiografía: infiltrado intersticial bilateral.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Hemograma crítico:</strong> Plaquetas 35.000/µL · Leucocitos 28.000/µL · Hcto 47% · Baciliformes 25% · Inmunoblastos 18% (Downey III).</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Diagnóstico:</strong> Inmunoblastos ≥10% + plaquetas &lt;50k + compromiso cardiopulmonar → SOSPECHA HANTAVIRUS. Confirmar con ELISA ISP.</p>
  <p style="font-size:13px;margin:0"><strong>Pronóstico:</strong> Inmunoblastos ≥40% = criterio de mal pronóstico. Hcto &gt;45% en hemoconcentración = asociado a deceso.</p>
</div>

<div style="background:#fdf0f4;border-left:4px solid #c97a96;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#c97a96;margin:0 0 10px">Caso 4 — Anemia Aplásica Severa (Cap. 19)</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Pancitopenia + reticulocitopenia + hipocelularidad de MO. Niveles normales de B12 y folato. Ausencia de blastos. Historia de hepatitis autoinmune.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Diagnóstico:</strong> Anemia aplásica adquirida severa (vs. leucemia: sin blastos ni reticulina↑ en MO).</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Criterios de severidad:</strong> Hipocelularidad &gt;70% + ≥2 de: neutrófilos &lt;500/µL · plaquetas &lt;20.000/µL · reticulocitos &lt;60.000/µL.</p>
  <p style="font-size:13px;margin:0"><strong>Tratamiento:</strong> TPH (si hay hermano HLA-idéntico) o globulina anti-timocito + ciclosporina. Transfusión GR si sintomático; plaquetas si &lt;10.000/µL.</p>
</div>
`,
    notas: `
<h3 style="color:#c97a96;margin:0 0 16px">Notas para el Certamen — Unidad 2</h3>

<div style="background:#fde0e8;border-left:4px solid #c97a96;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#a0495e;margin:0 0 10px">Lo más preguntado</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:2">
    <li>Bastones de Auer: <strong>patognomónicos de LMA</strong> (60-70%). Nunca en LLA.</li>
    <li><strong>Mieloma:</strong> CP en MO ≥10% + criterio CRAB. Rouleaux en frotis. Banda M en EFP. CRAB = Ca, Renal, Anemia, Bone.</li>
    <li><strong>Mieloma SLIM:</strong> CP ≥60% O cadenas livianas ≥100 O lesión focal RNM → trata sin CRAB.</li>
    <li><strong>SMD:</strong> displasia ≥10% en ≥1 serie + &lt;20% blastos. Sideroblastos en anillo = ≥5 gránulos perinucleares. Mutación SF3B1 más frecuente.</li>
    <li><strong>LLA Ph+:</strong> 25-30% adultos → peor pronóstico → agregar ITK (imatinib/dasatinib) al tratamiento.</li>
    <li>Criterio OMS: LMA ≥20% blastos · LLA ≥25% blastos en sangre o MO</li>
    <li>Hiatus leucémico: blastos + segmentados, sin formas intermedias → LMA Y LLA</li>
    <li>LMA NO tiene adenopatías · LLA SÍ tiene adenopatías + hematopoyesis extramedular</li>
    <li>EBV: heterófilos (+) · CMV: heterófilos (-) → diferencia clave SMN</li>
    <li>Hanta: inmunoblastos ≥10% = dx · ≥40% = mal pronóstico · plaquetas &lt;50k = criterio dx</li>
    <li>LMA displasia: hipogranularidad + cuerpos de Döhle (más frecuente)</li>
    <li>Valor crítico en leucemia: informar % blastos y descripción morfológica (NO clasificación FAB en hemograma)</li>
  </ul>
</div>

<div style="background:#fdf0f4;border-left:4px solid #c97a96;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#c97a96;margin:0 0 10px">Diferencias clave que confunden</h4>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:0">
    <thead><tr style="background:#c97a96;color:#fff">
      <th style="padding:7px;text-align:left">Confusión</th><th style="padding:7px;text-align:left">Diferencia real</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:7px;border:1px solid #f0dde5">LMA vs LLA (adenopatías)</td><td style="padding:7px;border:1px solid #f0dde5">LMA: <strong>sin adenopatías</strong>. LLA: <strong>sí adenopatías</strong> + hepato/esplenomegalia + compromiso testicular.</td></tr>
      <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">LMA vs LMC (hemograma)</td><td style="padding:7px;border:1px solid #f0dde5">LMA: hiatus leucémico. LMC: reacción leucoeritroblástica + desviación izquierda + eosinofilia + basofilia, SIN hiatus.</td></tr>
      <tr><td style="padding:7px;border:1px solid #f0dde5">EBV vs CMV</td><td style="padding:7px;border:1px solid #f0dde5">EBV: faringitis + ganglios + heterófilos (+). CMV: cuadro similar pero heterófilos (-), menos faríngeo/ganglionar.</td></tr>
      <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">Linfocito reactivo vs Inmunoblasto</td><td style="padding:7px;border:1px solid #f0dde5">Linfocito reactivo = fenotipo T, basofilia citoplasmática. Inmunoblasto (Downey III) = núcleo prominente, basofilia INTENSA → valor diagnóstico en Hantavirus.</td></tr>
      <tr><td style="padding:7px;border:1px solid #f0dde5">Aplasia medular vs Leucemia</td><td style="padding:7px;border:1px solid #f0dde5">Aplasia: sin blastos, MO hipocelular. Leucemia: blastos ≥20%, MO puede ser normo/hipercelular.</td></tr>
      <tr style="background:#fdf0f4"><td style="padding:7px;border:1px solid #f0dde5">Blasto tipo III vs Promielocito</td><td style="padding:7px;border:1px solid #f0dde5">Son equivalentes. Promielocito = blasto tipo III = equivalente blástico en LMA para el recuento.</td></tr>
    </tbody>
  </table>
</div>

<div style="background:#f0fff4;border-left:4px solid #2e7d32;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a7a3a;margin:0 0 10px">Regla de informe en hemograma con blastos</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:1.9">
    <li>En <strong>hemograma</strong>: NO clasificar por FAB. SÍ informar % de blastos y descripción morfológica → gestionar como <strong>valor crítico</strong></li>
    <li>En <strong>mielograma</strong>: SÍ clasificar FAB + % blastos + derivar a FACS (citometría, citogenética, molecular)</li>
    <li><strong>Si &lt;20% blastos en sangre</strong>: sugerir sd. mononucleosico (diferencial con LMA)</li>
    <li><strong>Si &lt;25% blastos en sangre</strong>: confirmar por mielograma — podría ser linfoma en vez de LLA</li>
  </ul>
</div>

<div style="background:#fdf0f4;border-left:4px solid #c97a96;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#c97a96;margin:0 0 10px">Conexiones con otras unidades</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:1.9">
    <li>LMC (U3) → también tiene leucocitosis, pero con desviación izquierda GRANULOCÍTICA (no blástica) y cromosoma Filadelfia</li>
    <li>LLA-B en niños con t(12;21) ETV6-RUNX1 → mejor pronóstico</li>
    <li>Sd. Down: riesgo aumentado de LMA-M7 transitoria (3-6 meses → riesgo leucemia)</li>
    <li>CMV: complicación post-trasplante y en inmunosuprimidos → importante en hematología clínica</li>
    <li>Bastones de Auer → riesgo CID → solicitar pruebas de coagulación (TP, TTPA, FBG, DD)</li>
  </ul>
</div>
`
  },
  3: {
    conceptos: `
<h3 style="color:#3a8a5c;margin:0 0 16px">Neoplasias Mieloproliferativas y Linfoproliferativas</h3>

<h4 style="color:#3a8a5c;margin:0 0 8px">NMP — Neoplasias Mieloproliferativas Crónicas (Phi negativas vs Phi positiva)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#3a8a5c;color:#fff">
    <th style="padding:7px;text-align:left">Criterio</th>
    <th style="padding:7px;text-align:left">LMC (Phi+)</th>
    <th style="padding:7px;text-align:left">Policitemia Vera</th>
    <th style="padding:7px;text-align:left">Trombocitemia Esencial</th>
    <th style="padding:7px;text-align:left">Mielofibrosis Primaria</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Edad típica</strong></td><td style="padding:7px;border:1px solid #c8e6c9">45–55 años · ♂≥♀</td><td style="padding:7px;border:1px solid #c8e6c9">60 años</td><td style="padding:7px;border:1px solid #c8e6c9">60–70 años</td><td style="padding:7px;border:1px solid #c8e6c9">65–75 años</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Marcador genético</strong></td><td style="padding:7px;border:1px solid #c8e6c9"><strong>t(9;22) BCR-ABL</strong> Cromosoma Filadelfia</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>JAK2 V617F</strong> (95%)</td><td style="padding:7px;border:1px solid #c8e6c9">JAK2 (50-60%) · CALR · MPL</td><td style="padding:7px;border:1px solid #c8e6c9">JAK2 · CALR · MPL</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Serie afectada</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Granulocítica + megacariocítica</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>Eritroide</strong> (GR, Hb, Hcto ↑↑)</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>Plaquetaria</strong> (&gt;450k)</td><td style="padding:7px;border:1px solid #c8e6c9">Fibrosis MO → pancitopenia</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Hemograma clave</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Leucocitosis 12-100k + neutrofilia + basofilia + eosinofilia + blastos 0-4%. <em>Sin hiatus leucémico</em></td><td style="padding:7px;border:1px solid #c8e6c9">GR ↑ · Hb ↑ · Hcto ↑ · leucocitosis y trombocitosis posibles</td><td style="padding:7px;border:1px solid #c8e6c9">Plaquetas &gt;1.000.000 k/µL · serie roja y blanca normales</td><td style="padding:7px;border:1px solid #c8e6c9">Anemia + trombocitopenia + dacriocitos + reacción leucoeritroblástica</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Mielograma</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Hiperplasia granulocítica + megacariocítica. Reticulina ↑. &lt;10% blastos</td><td style="padding:7px;border:1px solid #c8e6c9">Hiperplasia eritroide + megacariocitos ↑. Sin hierro (Perls negativo)</td><td style="padding:7px;border:1px solid #c8e6c9">Megacariocitos ↑↑ hipersegmentados · fibrosis mínima</td><td style="padding:7px;border:1px solid #c8e6c9">Fibrosis + osteoesclerosis + neoangiogénesis (CD34+)</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Diagnóstico</strong></td><td style="padding:7px;border:1px solid #c8e6c9">FISH (gen Filadelfia) + RT-PCR (BCR-ABL) + citogenética t(9;22)</td><td style="padding:7px;border:1px solid #c8e6c9">Citogenética: -20q, trisomía 1,8,9</td><td style="padding:7px;border:1px solid #c8e6c9">Trombocitosis &gt;3 meses + ferritina + PCR + ausencia Howell-Jolly</td><td style="padding:7px;border:1px solid #c8e6c9">IHQ: CD34+ (neoangiogénesis) · Gomori (colágeno)</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Sobrevida / Tto</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Fase crónica 5-6 años · ITK: Imatinib 400-600 mg/día VO</td><td style="padding:7px;border:1px solid #c8e6c9">5 años · Flebotomía + AAS + Hidroxiurea</td><td style="padding:7px;border:1px solid #c8e6c9">10 años · AAS · Hidroxiurea · Anagrelida</td><td style="padding:7px;border:1px solid #c8e6c9">5-10 años · Hidroxiurea · TPH</td></tr>
  </tbody>
</table>

<h4 style="color:#3a8a5c;margin:18px 0 8px">SLP Maduros B — LLC y Leucemia de Células Peludas (HCL)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#3a8a5c;color:#fff">
    <th style="padding:7px;text-align:left">Criterio</th>
    <th style="padding:7px;text-align:left">LLC (Leucemia Linfocítica Crónica)</th>
    <th style="padding:7px;text-align:left">HCL (Leucemia de Células Peludas)</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Edad / género</strong></td><td style="padding:7px;border:1px solid #c8e6c9">60 años · hombres</td><td style="padding:7px;border:1px solid #c8e6c9">55 años · varones</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Hemograma</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Linfocitosis clonal: linfocitos pequeños maduros · <strong>Restos de Gumprecht</strong> (linfocitos rotos)</td><td style="padding:7px;border:1px solid #c8e6c9">Pancitopenia · monocitopenia · <strong>células vellosas</strong> en frotis</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Criterio diagnóstico</strong></td><td style="padding:7px;border:1px solid #c8e6c9">RAL &gt;5.000/µL por &gt;3 meses + prolinfocitos &lt;55% + &gt;40% linfocitos en MO. <strong>Score Matutes 3-4</strong></td><td style="padding:7px;border:1px solid #c8e6c9">FACS Score ≥3-4: 86-98% sensibilidad. No requiere mielograma (preferible biopsia)</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Marcadores CD</strong></td><td style="padding:7px;border:1px solid #c8e6c9">CD5+ · CD19+ · CD23+ · FMC7- · CD22/CD79 débil</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>CD11c · CD25 · CD103 · CD123</strong> (TRAP+ — ya no se usa)</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Morfología</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Linfocitos pequeños · cromatina condensada (caparazón de tortuga)</td><td style="padding:7px;border:1px solid #c8e6c9">Células vellosas CRSR · fibrosis reticulina en MO</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Tratamiento</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Fludarabina-ciclofosfamida · Rituximab (anti-CD20) · Ibrutinib</td><td style="padding:7px;border:1px solid #c8e6c9">No requiere tto si asintomático. Cladribina (2-CDA) de elección</td></tr>
  </tbody>
</table>

<h4 style="color:#3a8a5c;margin:18px 0 8px">Linfomas — No Hodgkin B (Folicular y del Manto)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#3a8a5c;color:#fff">
    <th style="padding:7px;text-align:left">Criterio</th>
    <th style="padding:7px;text-align:left">Linfoma Folicular</th>
    <th style="padding:7px;text-align:left">Linfoma del Manto</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Alteración</strong></td><td style="padding:7px;border:1px solid #c8e6c9">t(14;18) BCL2+ · c-myc+</td><td style="padding:7px;border:1px solid #c8e6c9">t(11;14) Ciclina D1+ · CD5+ · CD19+</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Característica</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Síndrome de vena cava superior si está en zona cervical</td><td style="padding:7px;border:1px solid #c8e6c9">Adenopatías + esplenomegalia + sangre (25%)</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Diagnóstico</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Biopsia ganglionar IHQ (NO punción) · evaluación Cotwold</td><td style="padding:7px;border:1px solid #c8e6c9">Biopsia IHQ + FISH t(11;14) 100%</td></tr>
  </tbody>
</table>

<h4 style="color:#3a8a5c;margin:18px 0 8px">SLP T — Leucemia LGG, LLTA, Micosis Fungoide / Sézary</h4>
<ul style="font-size:13px;padding-left:20px;line-height:1.9;margin:0">
  <li><strong>LGG (Leucemia de Linfocitos Grandes Granulares):</strong> Artritis reumatoide como base. Neutropenia + RAL 2.000–20.000 &gt;6 meses. NK+: CD57/CD56/CD16. T+: CD8/CD57. Tratamiento: Metotrexato, ciclosporina.</li>
  <li><strong>LLTA (Leucemia-Linfoma T del Adulto):</strong> HTLV-I (30-60 años post infección). Hipercalcemia + LDH↑. Flower cells. Marcadores: CD2/CD3/CD5/CD38. Inmunofenotipo CD4 negativo para CD7.</li>
  <li><strong>Micosis Fungoide (MF):</strong> Eritrodermia pruriginosa + placas/parches en piel. Triada: eritrodermia + linfadenopatía + biopsia piel con linfocitos de núcleo cerebriforme.</li>
  <li><strong>Síndrome de Sézary (SS):</strong> Como MF pero células cerebriformes también en sangre. Criterios: células Sézary ≥1.000 O razón CD4:CD8 &gt;10 O pérdida antígenos T (CD2/CD3/CD5/CD7/CD26).</li>
</ul>
`,
    valores: `
<h3 style="color:#3a8a5c;margin:0 0 16px">Valores de Referencia — Unidad 3</h3>

<h4 style="color:#3a8a5c;margin:0 0 8px">Hemograma Comparativo — Neoplasias Mieloproliferativas</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#3a8a5c;color:#fff">
    <th style="padding:7px;text-align:left">Parámetro</th>
    <th style="padding:7px;text-align:left">LMC</th>
    <th style="padding:7px;text-align:left">Policitemia Vera</th>
    <th style="padding:7px;text-align:left">Trombocitemia Esencial</th>
    <th style="padding:7px;text-align:left">Mielofibrosis</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>GR</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Anemia leve</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>↑↑ (eritrocitosis)</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Normal</td><td style="padding:7px;border:1px solid #c8e6c9">↓ (anemia)</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Leucocitos</strong></td><td style="padding:7px;border:1px solid #c8e6c9">12–100 k/µL ↑↑↑</td><td style="padding:7px;border:1px solid #c8e6c9">Normal o ↑ leve</td><td style="padding:7px;border:1px solid #c8e6c9">Normal</td><td style="padding:7px;border:1px solid #c8e6c9">Variable</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Plaquetas</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Variables (comúnmente ↑)</td><td style="padding:7px;border:1px solid #c8e6c9">Normal o trombocitosis</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>&gt;1.000.000 k/µL</strong></td><td style="padding:7px;border:1px solid #c8e6c9">↓ (trombocitopenia)</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9"><strong>Eosinófilos/Basófilos</strong></td><td style="padding:7px;border:1px solid #c8e6c9"><strong>↑ absolutos (&lt;20%)</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Posible basofilia</td><td style="padding:7px;border:1px solid #c8e6c9">Normal</td><td style="padding:7px;border:1px solid #c8e6c9">Variable</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>Morfología especial</strong></td><td style="padding:7px;border:1px solid #c8e6c9">Blastos 0-4% promedio 2%</td><td style="padding:7px;border:1px solid #c8e6c9">Normal</td><td style="padding:7px;border:1px solid #c8e6c9">Howell-Jolly · codocitos · eritroblastos</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>Dacriocitos</strong> + reacción leucoeritroblástica</td></tr>
  </tbody>
</table>

<h4 style="color:#3a8a5c;margin:18px 0 8px">Criterios LLC — Clasificación RAI y BINET</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#3a8a5c;color:#fff">
    <th style="padding:7px;text-align:left">Criterio RAI</th><th style="padding:7px;text-align:left">Estadio</th><th style="padding:7px;text-align:left">Características</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9"><strong>RAL &gt;5.000/µL</strong></td><td style="padding:7px;border:1px solid #c8e6c9">0 (bajo riesgo)</td><td style="padding:7px;border:1px solid #c8e6c9">Solo linfocitosis</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9">+ Adenopatías</td><td style="padding:7px;border:1px solid #c8e6c9">I</td><td style="padding:7px;border:1px solid #c8e6c9">Riesgo intermedio</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9">+ Esplenomegalia</td><td style="padding:7px;border:1px solid #c8e6c9">II</td><td style="padding:7px;border:1px solid #c8e6c9">Riesgo intermedio</td></tr>
    <tr><td style="padding:7px;border:1px solid #c8e6c9">+ Anemia (Hb &lt;11)</td><td style="padding:7px;border:1px solid #c8e6c9">III</td><td style="padding:7px;border:1px solid #c8e6c9">Alto riesgo</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9">+ Trombocitopenia</td><td style="padding:7px;border:1px solid #c8e6c9">IV</td><td style="padding:7px;border:1px solid #c8e6c9">Alto riesgo</td></tr>
  </tbody>
</table>
<p style="font-size:12px;color:#5a8a6a;margin:4px 0 18px">Score Matutes: CD5+CD23+FMC7-SMIG débil-CD22/CD79 débil. Puntuación 3-4 = LLC (98% sensibilidad).</p>

<h4 style="color:#3a8a5c;margin:18px 0 8px">Marcadores Genéticos — NMP (resumen certamen)</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 4px">
  <thead><tr style="background:#3a8a5c;color:#fff">
    <th style="padding:8px;text-align:left">Patología</th><th style="padding:8px;text-align:left">Marcador genético</th><th style="padding:8px;text-align:left">Técnica</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f6ed"><td style="padding:8px;border:1px solid #c8e6c9">LMC</td><td style="padding:8px;border:1px solid #c8e6c9"><strong>t(9;22) BCR-ABL</strong> · Cromosoma Filadelfia</td><td style="padding:8px;border:1px solid #c8e6c9">FISH + RT-PCR + citogenética (todos complementarios)</td></tr>
    <tr><td style="padding:8px;border:1px solid #c8e6c9">Policitemia Vera</td><td style="padding:8px;border:1px solid #c8e6c9"><strong>JAK2 V617F</strong> (95%)</td><td style="padding:8px;border:1px solid #c8e6c9">PCR alelo-específica</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:8px;border:1px solid #c8e6c9">Trombocitemia Esencial</td><td style="padding:8px;border:1px solid #c8e6c9">JAK2 V617F (50-60%) · CALR exón 9 (25%) · MPL (3%)</td><td style="padding:8px;border:1px solid #c8e6c9">PCR / secuenciación</td></tr>
    <tr><td style="padding:8px;border:1px solid #c8e6c9">Linfoma Folicular</td><td style="padding:8px;border:1px solid #c8e6c9">t(14;18) BCL2</td><td style="padding:8px;border:1px solid #c8e6c9">FISH / IHQ</td></tr>
    <tr style="background:#e8f6ed"><td style="padding:8px;border:1px solid #c8e6c9">Linfoma del Manto</td><td style="padding:8px;border:1px solid #c8e6c9">t(11;14) Ciclina D1</td><td style="padding:8px;border:1px solid #c8e6c9">FISH 100%</td></tr>
    <tr><td style="padding:8px;border:1px solid #c8e6c9">LLC</td><td style="padding:8px;border:1px solid #c8e6c9">17p- y 11q- = mal pronóstico</td><td style="padding:8px;border:1px solid #c8e6c9">Citogenética</td></tr>
  </tbody>
</table>
`,
    casos: `
<h3 style="color:#3a8a5c;margin:0 0 16px">Casos Clínicos — Unidad 3</h3>

<div style="background:#e8f6ed;border-left:4px solid #3a8a5c;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#3a8a5c;margin:0 0 10px">Caso 1 — LMC: Hallazgo incidental en hemograma</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Paciente 50 años, consulta por fatigabilidad y saciedad precoz. Esplenomegalia al examen físico (dolor hipocondrio izquierdo irradiado a fosa ilíaca).</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Hemograma:</strong> Leucocitos 85.000/µL · Neutrófilos 68% · Eosinófilos 8% · Basófilos 5% · Mielocitos 12% · Metamielocitos 4% · Blastos 2% · Anemia leve NN arregenerativa · Plaquetas 450.000.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Clave diagnóstica:</strong> NO hay hiatus leucémico. Hay desviación a la izquierda granulocítica completa + eosinofilia + basofilia absoluta → reacción leucoeritroblástica.</p>
  <p style="font-size:13px;margin:0 0 6px"><strong>Confirmación:</strong> FISH: gen Filadelfia (+) · RT-PCR: BCR-ABL (+) · Citogenética: t(9;22). Inmunofenotipo solo relevante en crisis blástica.</p>
  <p style="font-size:13px;margin:0"><strong>Tratamiento:</strong> Imatinib (GLEEVEC) 400-600 mg/día VO. Resistencia: Nilotinib 300 mg/12h o Dasatinib 100 mg/día. Fases: crónica (5-6 años) → acelerada (6-9 meses) → blástica (3-6 meses).</p>
</div>

<div style="background:#e8f6ed;border-left:4px solid #3a8a5c;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#3a8a5c;margin:0 0 10px">Caso 2 — LLC: Diagnóstico en control preventivo</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Hombre 62 años asintomático. Hemograma de rutina muestra linfocitosis importante. 60% de los LLC se detectan en exámenes preventivos.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Hemograma:</strong> Leucocitos 28.000/µL · Linfocitos 78% (RAL 21.840/µL) · Morfología: linfocitos pequeños maduros, cromatina condensada tipo "caparazón de tortuga" · Restos de Gumprecht · Anemia leve NN · Plaquetas normales.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Diagnóstico:</strong> RAL &gt;5.000/µL por más de 3 meses + prolinfocitos &lt;55% + Score Matutes 3-4 → LLC estadio RAI 0.</p>
  <p style="font-size:13px;margin:0"><strong>Complicación a vigilar:</strong> Trombocitopenia autoinmune (PTI asociado a LLC = Síndrome de Evans). Alteraciones citogenéticas de mal pronóstico: 17p- y 11q-.</p>
</div>

<div style="background:#e8f6ed;border-left:4px solid #3a8a5c;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#3a8a5c;margin:0 0 10px">Caso 3 — Policitemia Vera: Rubicundez y trombosis</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Hombre 63 años con plethora (rubicundez facial), cefalea, eritromelalgia (ardor y rubor en manos). Episodio de trombosis venosa profunda.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Hemograma:</strong> GR 7.2 M/µL · Hb 19 g/dL · Hcto 58% · VCM normal (constantes de Wintrobe normales) · Leucocitosis leve · Trombocitosis moderada.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>MO:</strong> Hiperplasia eritroide + megacariocitos ↑ + sin depósitos de hierro (tinción de Perls negativa).</p>
  <p style="font-size:13px;margin:0"><strong>Tratamiento:</strong> Flebotomía 2x/semana (250-400 mL). AAS 100 mg para modular activación plaquetaria. Hidroxiurea (HU) o Interferón (INF) para citorreducción.</p>
</div>

<div style="background:#e8f6ed;border-left:4px solid #3a8a5c;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#3a8a5c;margin:0 0 10px">Caso 4 — Linfoma No Hodgkin Folicular: Síndrome VCS</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Mujer 58 años con aumento de volumen cervical bilateral indoloro de 2 meses de evolución. Edema facial matutino y circulación colateral en tórax (síndrome de vena cava superior).</p>
  <p style="font-size:13px;border:1px solid #c8e6c9;background:#d8f0e0;border-radius:6px;padding:10px;margin:0 0 8px">⚠️ El Linfoma Folicular es el único LNH donde es característico el síndrome de VCS cuando está en zona cervical.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Diagnóstico:</strong> Biopsia ganglionar incisional o excisional + IHQ: BCL2+ · t(14;18). Estudio de etapificación por sistema Cotwold. PET/CT para evaluar masas residuales post-QMT.</p>
  <p style="font-size:13px;margin:0"><strong>Nota importante:</strong> NUNCA punción ganglionar para diagnóstico de linfoma (no brinda diagnóstico, solo estado del paciente). Tiempo de respuesta: 15 días según GES.</p>
</div>
`,
    notas: `
<h3 style="color:#3a8a5c;margin:0 0 16px">Notas para el Certamen — Unidad 3</h3>

<div style="background:#d8f0e0;border-left:4px solid #3a8a5c;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#1a7a3a;margin:0 0 10px">Lo más preguntado</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:2">
    <li>LMC: <strong>t(9;22) BCR-ABL</strong> = Cromosoma Filadelfia · Imatinib ITK</li>
    <li>LMC hemograma: leucocitosis + basofilia + eosinofilia + <strong>SIN hiatus leucémico</strong> (≠ LMA)</li>
    <li>PV: <strong>JAK2 V617F</strong> 95% · eritrocitosis · Perls negativo en MO</li>
    <li>TE: plaquetas <strong>&gt;450.000</strong> (clonal) vs trombocitosis reactiva &lt;1.000.000</li>
    <li>Mielofibrosis: <strong>dacriocitos</strong> (células en lágrima) + reacción leucoeritroblástica</li>
    <li>LLC: <strong>Restos de Gumprecht</strong> + cromatina "caparazón de tortuga" + Score Matutes 3-4</li>
    <li>HCL: <strong>CD11c · CD25 · CD103 · CD123</strong> (monocitopenia como hallazgo clásico)</li>
    <li>Linfoma Folicular: <strong>síndrome VCS + t(14;18) BCL2</strong></li>
    <li>Linfoma del Manto: <strong>t(11;14) Ciclina D1 · FISH 100%</strong></li>
    <li>MF/Sézary: linfocitos de <strong>núcleo cerebriforme</strong> en piel (MF) y también en sangre (SS)</li>
  </ul>
</div>

<div style="background:#e8f6ed;border-left:4px solid #3a8a5c;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#3a8a5c;margin:0 0 10px">Diferencias clave NMP — Cuadro resumen</h4>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:0">
    <thead><tr style="background:#3a8a5c;color:#fff">
      <th style="padding:6px;text-align:left">Confusión</th><th style="padding:6px;text-align:left">Diferencia real</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:7px;border:1px solid #c8e6c9">LMC vs LMA (leucocitosis)</td><td style="padding:7px;border:1px solid #c8e6c9">LMC: NO hiatus leucémico, desviación izquierda GRANULOCÍTICA, basofilia+eosinofilia. LMA: hiatus leucémico, blastos ≥20%.</td></tr>
      <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9">TE vs Trombocitosis reactiva</td><td style="padding:7px;border:1px solid #c8e6c9">TE: &gt;450k por &gt;3 meses + JAK2/CALR + ferritina normal + sin PCR↑ + sin Howell-Jolly. Reactiva: causa subyacente, resuelve con tto.</td></tr>
      <tr><td style="padding:7px;border:1px solid #c8e6c9">LLC vs HCL (inmunofenotipo)</td><td style="padding:7px;border:1px solid #c8e6c9">LLC: CD5+/CD23+/FMC7-. HCL: CD11c/CD25/CD103/CD123 y monocitopenia característica.</td></tr>
      <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9">MF vs Sézary</td><td style="padding:7px;border:1px solid #c8e6c9">MF: núcleo cerebriforme solo en piel (sin células en sangre). SS: núcleo cerebriforme en piel Y en sangre (leucemia).</td></tr>
      <tr><td style="padding:7px;border:1px solid #c8e6c9">Linfoma (diagnóstico)</td><td style="padding:7px;border:1px solid #c8e6c9">BIOPSIA excisional/incisional + IHQ. NUNCA punción para diagnóstico definitivo.</td></tr>
    </tbody>
  </table>
</div>

<div style="background:#f0fff4;border-left:4px solid #2e7d32;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#1a7a3a;margin:0 0 10px">Conexiones entre temas de la unidad</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:1.9">
    <li>LMC → Crisis blástica → puede transformarse en LMA o LLA → inmunofenotipo recién relevante en esa fase</li>
    <li>PV → puede evolucionar a Mielofibrosis Post-PV y luego a LMA (secuencia de progresión NMP)</li>
    <li>LLC + Síndrome de Evans = trombocitopenia autoinmune + anemia hemolítica (U1: AHAI)</li>
    <li>HCL: monocitopenia como hallazgo cardinal (recordar que LLC no tiene monocitopenia)</li>
    <li>Linfoma Folicular: BCL2↑ → inhibe apoptosis → célula que no muere + prolifera = base del linfoma</li>
    <li>Flebotomía en PV: puede generar cambios microcíticos e hipocrómicos a largo plazo (U1: ferropenia)</li>
    <li><strong>LMC Chile (Guía SOCHIHEM 2026):</strong> edad media 49 años (menor que media internacional 55-65). 94,8% diagnóstica en fase crónica. Sobrevida global 90% a 5 años con ITK.</li>
    <li><strong>Linfoma Hodgkin:</strong> célula RS = binucleada con nucléolos "ojos de búho". 80% curación. Distribución bimodal: 20-40 años y >50. Esclerosis nodular = variante más frecuente. CD30+ · CD15+ · CD45-.</li>
    <li><strong>LMC diagnóstico:</strong> RT-PCR (SP, más rápido) + FISH + citogenética convencional (3 técnicas complementarias). Índices pronósticos: Sokal, Hasford, ELTS.</li>
    <li><strong>Fase blástica LMC:</strong> ≥20% mieloblastos en SP o MO (OMS 2022). Antes se definía en ≥30%.</li>
  </ul>
</div>

<div style="background:#e8f6ed;border-left:4px solid #3a8a5c;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#3a8a5c;margin:0 0 10px">Linfoma de Hodgkin — Puntos clave (Guía SOCHIHEM 2016)</h4>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:0">
    <thead><tr style="background:#3a8a5c;color:#fff">
      <th style="padding:6px;text-align:left">Criterio</th><th style="padding:6px;text-align:left">Dato</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:7px;border:1px solid #c8e6c9">Célula neoplásica</td><td style="padding:7px;border:1px solid #c8e6c9">Reed-Sternberg: binucleada, nucléolos prominentes "ojos de búho". Origen: linfocito B del centro germinal.</td></tr>
      <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9">Inmunofenotipo RS</td><td style="padding:7px;border:1px solid #c8e6c9"><strong>CD30+ · CD15+ · CD45-</strong> (vs LNH: CD45+)</td></tr>
      <tr><td style="padding:7px;border:1px solid #c8e6c9">Epidemiología</td><td style="padding:7px;border:1px solid #c8e6c9">Media 37 años · distribución bimodal 20-40 y &gt;50 años · 150 casos/año en Chile · SG 80% a 5 años</td></tr>
      <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9">Clínica</td><td style="padding:7px;border:1px solid #c8e6c9">Adenopatías indoloras cervicales. 2/3 con afectación mediastínica. Síntomas B: fiebre + sudoración nocturna + baja de peso ≥10%. Prurito (10-15%).</td></tr>
      <tr><td style="padding:7px;border:1px solid #c8e6c9">Subtipos histológicos</td><td style="padding:7px;border:1px solid #c8e6c9">Esclerosis nodular (más frecuente) · Celularidad mixta · Depleción linfocítica · Predominio linfocítico</td></tr>
      <tr style="background:#e8f6ed"><td style="padding:7px;border:1px solid #c8e6c9">Factores de riesgo</td><td style="padding:7px;border:1px solid #c8e6c9">EBV post-mononucleosis · VIH · HLA-A1 · inmunosupresión (trasplante, autoinmune) · familiar de LH clásico</td></tr>
      <tr><td style="padding:7px;border:1px solid #c8e6c9">Tratamiento</td><td style="padding:7px;border:1px solid #c8e6c9">ABVD (doxorubicina, bleomicina, vinblastina, dacarbazina) ± radioterapia. Alta tasa de curación.</td></tr>
    </tbody>
  </table>
</div>
`
  },
  lab: {
    conceptos: `
<h3 style="color:#5a8fa8;margin:0 0 16px">Laboratorio Hematológico — Conceptos</h3>

<h4 style="color:#5a8fa8;margin:0 0 8px">Hemograma Automatizado — Principios de Análisis</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Principio</th><th style="padding:7px;text-align:left">Parámetro medido</th><th style="padding:7px;text-align:left">Fundamento</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Impedancia eléctrica (Coulter)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Recuento y volumen GR, leucocitos, plaquetas</td><td style="padding:7px;border:1px solid #b8d4e8">Célula pasa por orificio → resistencia eléctrica proporcional al volumen → cuenta y mide VCM</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Dispersión de luz láser (light scattering)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Diferenciación leucocitaria · reticulocitos</td><td style="padding:7px;border:1px solid #b8d4e8">Dispersión frontal (tamaño) + lateral (granularidad/complejidad interna) + lateral ortogonal (lóbulos nucleares)</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Absorción de cianuro/SDS</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Hemoglobina (HGB)</td><td style="padding:7px;border:1px solid #b8d4e8">Lisado eritrocitario + formación de ciano-metahemoglobina → absorbancia a 540 nm</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Hematocrito calculado</strong></td><td style="padding:7px;border:1px solid #b8d4e8">HTO</td><td style="padding:7px;border:1px solid #b8d4e8">HTO = VCM × GR / 10 (calculado, no medido directamente en muchos equipos)</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Radio de frecuencia (RF)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Diferenciación mononucleares/polinucleares</td><td style="padding:7px;border:1px solid #b8d4e8">Combinado con DC (corriente continua) para mejor diferenciación celular</td></tr>
  </tbody>
</table>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Parámetros del Hemograma — Qué mide cada uno</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Parámetro</th><th style="padding:7px;text-align:left">Qué mide</th><th style="padding:7px;text-align:left">Utilidad clínica</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>HGB (Hemoglobina)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Concentración de Hb en g/dL</td><td style="padding:7px;border:1px solid #b8d4e8">Parámetro principal para diagnóstico de anemia</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>HTO (Hematocrito)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">% volumen ocupado por GR</td><td style="padding:7px;border:1px solid #b8d4e8">Hemoconcentración (Hanta) / hemodilución (embarazo)</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>GR (eritrocitos)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Millones de eritrocitos/µL</td><td style="padding:7px;border:1px solid #b8d4e8">Con VCM: Índice de Mentzer (GR↑ en talasemia)</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>VCM (VGM)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Volumen corpuscular medio (fL)</td><td style="padding:7px;border:1px solid #b8d4e8">Clasifica anemia: micro (&lt;80) / normo (80-100) / macrocítica (&gt;100)</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>HCM (HGM)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Hemoglobina corpuscular media (pg)</td><td style="padding:7px;border:1px solid #b8d4e8">↓ en hipocromía (ferropenia, talasemia)</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>CHCM (CHGM)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Concentración de Hb corpuscular media (g/dL)</td><td style="padding:7px;border:1px solid #b8d4e8">↑ en esferocitosis (CHCM &gt;36) · ↓ en ferropenia</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>ADE (RDW)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Amplitud de distribución eritrocitaria (%)</td><td style="padding:7px;border:1px solid #b8d4e8">↑ = anisocitosis. Ferropenia: RDW↑ + VCM↓. EEC: RDW normal</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Reticulocitos</strong></td><td style="padding:7px;border:1px solid #b8d4e8">% eritrocitos inmaduros (RNA residual)</td><td style="padding:7px;border:1px solid #b8d4e8">↑ = regenerativo (hemólisis) · ↓ = arregenerativo (aplasia, ferropenia)</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Plaquetas</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Recuento en K/µL</td><td style="padding:7px;border:1px solid #b8d4e8">&lt;100k: trombocitopenia · &gt;450k: trombocitosis</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>LUC</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Grandes células no clasificadas</td><td style="padding:7px;border:1px solid #b8d4e8">&gt;6% o &gt;400/µL → revisar frotis: puede ser linfocitos reactivos o blastos</td></tr>
  </tbody>
</table>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Serie Granulocítica — Morfología y Maduración (fuente: MORFOLOGIA.docx)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Célula</th><th style="padding:7px;text-align:left">Núcleo</th><th style="padding:7px;text-align:left">Nucleolos</th><th style="padding:7px;text-align:left">Citoplasma</th><th style="padding:7px;text-align:left">Granulaciones</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Blasto</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Redondo</td><td style="padding:7px;border:1px solid #b8d4e8">Sí</td><td style="padding:7px;border:1px solid #b8d4e8">Basófilo</td><td style="padding:7px;border:1px solid #b8d4e8">Azurófilas NO (en LLA)</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Promielocito</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Redondo</td><td style="padding:7px;border:1px solid #b8d4e8">Sí</td><td style="padding:7px;border:1px solid #b8d4e8">Basófilo</td><td style="padding:7px;border:1px solid #b8d4e8">Azurófilas SÍ (primarias)</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Mielocito</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Redondo, sin nucleolos</td><td style="padding:7px;border:1px solid #b8d4e8">No</td><td style="padding:7px;border:1px solid #b8d4e8">Menos basófilo</td><td style="padding:7px;border:1px solid #b8d4e8">Viran de primarias a <strong>secundarias</strong></td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Metamielocito (Juvenil)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Con hendidura (no sobrepasa línea media)</td><td style="padding:7px;border:1px solid #b8d4e8">No</td><td style="padding:7px;border:1px solid #b8d4e8">Pálido</td><td style="padding:7px;border:1px solid #b8d4e8">Secundarias específicas</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Baciliforme (Cayado)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Hendidura pronunciada — SÍ sobrepasa línea media</td><td style="padding:7px;border:1px solid #b8d4e8">No</td><td style="padding:7px;border:1px solid #b8d4e8">Pálido</td><td style="padding:7px;border:1px solid #b8d4e8">Secundarias · estrangulación ≥1/3</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Segmentado (PMN)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Filamentos de cromatina · 2-5 lóbulos</td><td style="padding:7px;border:1px solid #b8d4e8">No</td><td style="padding:7px;border:1px solid #b8d4e8">Pálido a incoloro</td><td style="padding:7px;border:1px solid #b8d4e8">Secundarias específicas</td></tr>
  </tbody>
</table>
<p style="font-size:12px;color:#5a8fa8;margin:-10px 0 18px"><strong>Clave morfológica:</strong> Baciliforme vs Metamielocito: en baciliforme la hendidura SÍ sobrepasa la línea media. En metamielocito NO sobrepasa la línea media.</p>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Morfología Eritrocitaria — Lo que se busca en el frotis</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 4px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Morfología</th><th style="padding:7px;text-align:left">Descripción</th><th style="padding:7px;text-align:left">Patología asociada</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Esferocito</td><td style="padding:7px;border:1px solid #b8d4e8">Célula redondeada sin palidez central</td><td style="padding:7px;border:1px solid #b8d4e8">Esferocitosis hereditaria · AHAI</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Esquistocito</td><td style="padding:7px;border:1px solid #b8d4e8">Fragmento eritrocitario</td><td style="padding:7px;border:1px solid #b8d4e8">Hemólisis microangiopática (PTT, SHU, CID)</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Dacriocito</td><td style="padding:7px;border:1px solid #b8d4e8">Célula en lágrima</td><td style="padding:7px;border:1px solid #b8d4e8"><strong>Mielofibrosis</strong> (patognomónico)</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Codocito</td><td style="padding:7px;border:1px solid #b8d4e8">Célula en diana (target cell)</td><td style="padding:7px;border:1px solid #b8d4e8">Talasemia · hepatopatía · ferropenia severa</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Drepanocito</td><td style="padding:7px;border:1px solid #b8d4e8">Célula en hoz (sickle cell)</td><td style="padding:7px;border:1px solid #b8d4e8">Anemia de células falciformes</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Howell-Jolly</td><td style="padding:7px;border:1px solid #b8d4e8">Inclusión nuclear residual</td><td style="padding:7px;border:1px solid #b8d4e8">Asplenia / esplenectomía · anemia megaloblástica</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Cuerpos de Heinz</td><td style="padding:7px;border:1px solid #b8d4e8">Precipitados de Hb desnaturalizada</td><td style="padding:7px;border:1px solid #b8d4e8">Déficit G6PD (visible con tinción supravital)</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Anillo de Cabot</td><td style="padding:7px;border:1px solid #b8d4e8">Filamento en anillo/ocho dentro del eritrocito</td><td style="padding:7px;border:1px solid #b8d4e8">Anemia megaloblástica severa · LMA</td></tr>
  </tbody>
</table>
`,
    valores: `
<h3 style="color:#5a8fa8;margin:0 0 16px">Valores de Referencia — Laboratorio Hematológico</h3>

<h4 style="color:#5a8fa8;margin:0 0 8px">Tabla Completa de Valores Normales (Fuente: TABLA HC.docx — UST)</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 20px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:8px;text-align:left">Analito</th>
    <th style="padding:8px;text-align:left">Masculino</th>
    <th style="padding:8px;text-align:left">Femenino</th>
    <th style="padding:8px;text-align:left">Unidad</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>HTO</strong></td><td style="padding:8px;border:1px solid #b8d4e8">40,0 – 50,0</td><td style="padding:8px;border:1px solid #b8d4e8">36,0 – 46,0</td><td style="padding:8px;border:1px solid #b8d4e8">%</td></tr>
    <tr><td style="padding:8px;border:1px solid #b8d4e8"><strong>HB (Hemoglobina)</strong></td><td style="padding:8px;border:1px solid #b8d4e8">13,0 – 17,5</td><td style="padding:8px;border:1px solid #b8d4e8">12,0 – 15,0</td><td style="padding:8px;border:1px solid #b8d4e8">g/dL</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>GR (Eritrocitos)</strong></td><td style="padding:8px;border:1px solid #b8d4e8">4,50 – 5,90</td><td style="padding:8px;border:1px solid #b8d4e8">4,10 – 5,10</td><td style="padding:8px;border:1px solid #b8d4e8">M/µL</td></tr>
    <tr><td style="padding:8px;border:1px solid #b8d4e8"><strong>VCM (VGM)</strong></td><td style="padding:8px;border:1px solid #b8d4e8" colspan="2">82 – 96</td><td style="padding:8px;border:1px solid #b8d4e8">fL</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>HCM (HGM)</strong></td><td style="padding:8px;border:1px solid #b8d4e8" colspan="2">28 – 33</td><td style="padding:8px;border:1px solid #b8d4e8">pg</td></tr>
    <tr><td style="padding:8px;border:1px solid #b8d4e8"><strong>CHCM (CHGM)</strong></td><td style="padding:8px;border:1px solid #b8d4e8" colspan="2">32 – 36</td><td style="padding:8px;border:1px solid #b8d4e8">g/dL</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>ADE (RDW)</strong></td><td style="padding:8px;border:1px solid #b8d4e8" colspan="2">11,5 – 14,5</td><td style="padding:8px;border:1px solid #b8d4e8">%</td></tr>
    <tr><td style="padding:8px;border:1px solid #b8d4e8"><strong>Leucocitos totales</strong></td><td style="padding:8px;border:1px solid #b8d4e8" colspan="2">4,00 – 10,00</td><td style="padding:8px;border:1px solid #b8d4e8">K/µL</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>Plaquetas</strong></td><td style="padding:8px;border:1px solid #b8d4e8" colspan="2">140 – 400</td><td style="padding:8px;border:1px solid #b8d4e8">K/µL</td></tr>
  </tbody>
</table>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Fórmula Leucocitaria — Valores Normales</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 20px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:8px;text-align:left">Célula</th><th style="padding:8px;text-align:left">% Relativo</th><th style="padding:8px;text-align:left">Valor absoluto (/µL)</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>Neutrófilos</strong> (baciliforme + segmentado)</td><td style="padding:8px;border:1px solid #b8d4e8">50 – 70%</td><td style="padding:8px;border:1px solid #b8d4e8">2.400 – 7.300</td></tr>
    <tr><td style="padding:8px;border:1px solid #b8d4e8"><strong>Linfocitos</strong></td><td style="padding:8px;border:1px solid #b8d4e8">20 – 40%</td><td style="padding:8px;border:1px solid #b8d4e8">1.000 – 3.000</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>Monocitos</strong></td><td style="padding:8px;border:1px solid #b8d4e8">2 – 8%</td><td style="padding:8px;border:1px solid #b8d4e8">200 – 800</td></tr>
    <tr><td style="padding:8px;border:1px solid #b8d4e8"><strong>Eosinófilos</strong></td><td style="padding:8px;border:1px solid #b8d4e8">1 – 4%</td><td style="padding:8px;border:1px solid #b8d4e8">50 – 500</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:8px;border:1px solid #b8d4e8"><strong>Basófilos</strong></td><td style="padding:8px;border:1px solid #b8d4e8">0 – 1%</td><td style="padding:8px;border:1px solid #b8d4e8">0 – 100</td></tr>
  </tbody>
</table>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Valores Críticos — Requieren Acción Inmediata</h4>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 20px">
  <thead><tr style="background:#c0392b;color:#fff">
    <th style="padding:8px;text-align:left">Parámetro</th><th style="padding:8px;text-align:left">Valor crítico</th><th style="padding:8px;text-align:left">Acción</th>
  </tr></thead>
  <tbody>
    <tr style="background:#ffe0e0"><td style="padding:8px;border:1px solid #f0c0c0"><strong>Hemoglobina</strong></td><td style="padding:8px;border:1px solid #f0c0c0">&lt; 7 g/dL o &gt; 20 g/dL</td><td style="padding:8px;border:1px solid #f0c0c0">Contactar médico. Considerar transfusión si &lt;7</td></tr>
    <tr><td style="padding:8px;border:1px solid #f0c0c0"><strong>Plaquetas</strong></td><td style="padding:8px;border:1px solid #f0c0c0">&lt; 20.000/µL o &gt; 1.000.000/µL</td><td style="padding:8px;border:1px solid #f0c0c0">Riesgo hemorragia espontánea / trombosis</td></tr>
    <tr style="background:#ffe0e0"><td style="padding:8px;border:1px solid #f0c0c0"><strong>Leucocitos</strong></td><td style="padding:8px;border:1px solid #f0c0c0">&lt; 2.000/µL o &gt; 30.000/µL</td><td style="padding:8px;border:1px solid #f0c0c0">Riesgo infección severa / sospecha leucemia</td></tr>
    <tr><td style="padding:8px;border:1px solid #f0c0c0"><strong>Blastos</strong></td><td style="padding:8px;border:1px solid #f0c0c0">Cualquier % en sangre periférica</td><td style="padding:8px;border:1px solid #f0c0c0"><strong>VALOR CRÍTICO siempre</strong> → derivar urgente a hematólogo</td></tr>
    <tr style="background:#ffe0e0"><td style="padding:8px;border:1px solid #f0c0c0"><strong>Neutrófilos</strong></td><td style="padding:8px;border:1px solid #f0c0c0">&lt; 500/µL (neutropenia severa)</td><td style="padding:8px;border:1px solid #f0c0c0">Riesgo infección bacteriana grave</td></tr>
  </tbody>
</table>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Fórmula Leucocitaria Completa — Prof. José Pedro Díaz 2022 (Uso Pedagógico)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Célula</th><th style="padding:7px;text-align:left">% relativo</th><th style="padding:7px;text-align:left">Valor absoluto (/µL)</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Plasmocitos</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 1</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 100</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Basófilos</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 2</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 200</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Eosinófilos</td><td style="padding:7px;border:1px solid #b8d4e8">1 – 4</td><td style="padding:7px;border:1px solid #b8d4e8">40 – 400</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Mielocitos</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 1 (patológico)</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 100</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Metamielocitos (Juveniles)</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 1</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 100</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Baciliformes</strong></td><td style="padding:7px;border:1px solid #b8d4e8">0 – 3%</td><td style="padding:7px;border:1px solid #b8d4e8">0 – 300 /µL</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Segmentados</strong></td><td style="padding:7px;border:1px solid #b8d4e8">60 – 70%</td><td style="padding:7px;border:1px solid #b8d4e8">2.400 – 7.000 /µL</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Linfocitos</strong></td><td style="padding:7px;border:1px solid #b8d4e8">20 – 30%</td><td style="padding:7px;border:1px solid #b8d4e8">800 – 3.000 /µL</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Monocitos</strong></td><td style="padding:7px;border:1px solid #b8d4e8">4 – 8%</td><td style="padding:7px;border:1px solid #b8d4e8">160 – 800 /µL</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>RAN (Neutrófilos absolutos)</strong></td><td style="padding:7px;border:1px solid #b8d4e8">—</td><td style="padding:7px;border:1px solid #b8d4e8"><strong>2.400 – 7.300 /µL</strong></td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Reticulocitos</td><td style="padding:7px;border:1px solid #b8d4e8">0,5 – 2,5%</td><td style="padding:7px;border:1px solid #b8d4e8">H: 23–155 K/µL · M: 21–135 K/µL</td></tr>
  </tbody>
</table>

<h4 style="color:#5a8fa8;margin:18px 0 8px">VR Grupos Especiales — Díaz 2022</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 18px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Grupo</th><th style="padding:7px;text-align:left">Hb (g/dL)</th><th style="padding:7px;text-align:left">Hto (%)</th><th style="padding:7px;text-align:left">Leucocitos (K/µL)</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">RN — cordón</td><td style="padding:7px;border:1px solid #b8d4e8">16,5 ± 1,5</td><td style="padding:7px;border:1px solid #b8d4e8">51 ± 4,5</td><td style="padding:7px;border:1px solid #b8d4e8">18 ± 9</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">RN — 1 día</td><td style="padding:7px;border:1px solid #b8d4e8">19,3 ± 2</td><td style="padding:7px;border:1px solid #b8d4e8">56 ± 7</td><td style="padding:7px;border:1px solid #b8d4e8">20 ± 12</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Lactante 6 meses</td><td style="padding:7px;border:1px solid #b8d4e8">12,0 ± 1</td><td style="padding:7px;border:1px solid #b8d4e8">35 ± 5</td><td style="padding:7px;border:1px solid #b8d4e8">12 ± 6</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Embarazada 1er trimestre</td><td style="padding:7px;border:1px solid #b8d4e8">13,1 ± 1</td><td style="padding:7px;border:1px solid #b8d4e8">35,5 ± 3</td><td style="padding:7px;border:1px solid #b8d4e8">10 ± 3</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Embarazada 2º trimestre</td><td style="padding:7px;border:1px solid #b8d4e8">12,0 ± 1,6</td><td style="padding:7px;border:1px solid #b8d4e8">32,5 ± 5</td><td style="padding:7px;border:1px solid #b8d4e8">10 ± 3</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Embarazada 3er trimestre</td><td style="padding:7px;border:1px solid #b8d4e8">11,6 ± 1,5</td><td style="padding:7px;border:1px solid #b8d4e8">31,4 ± 3</td><td style="padding:7px;border:1px solid #b8d4e8">11 ± 2</td></tr>
  </tbody>
</table>
<p style="font-size:12px;color:#5a8fa8;margin:-10px 0 18px"><strong>Corrección Hb por altitud:</strong> &lt;1.000 m: 0 · 1.000 m: -0,2 · 1.500 m: -0,5 · 2.000 m: -0,8 · 2.500 m: -1,3 g/dL. Por tabaquismo ½-1 paq/día: -0,3 g/dL.</p>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Sistema de informe ISP — Morfología en cruces (Recomendaciones ISP 2017)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 12px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Cruz</th><th style="padding:7px;text-align:left">Cantidad x campo 100x</th><th style="padding:7px;text-align:left">Equivalente verbal</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>+</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Hasta 5 por campo</td><td style="padding:7px;border:1px solid #b8d4e8">Escasos · leve · discreto · presentes</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>++</strong></td><td style="padding:7px;border:1px solid #b8d4e8">6 – 10 por campo</td><td style="padding:7px;border:1px solid #b8d4e8">Regular cantidad · moderada · frecuente</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>+++</strong></td><td style="padding:7px;border:1px solid #b8d4e8">≥ 11 por campo</td><td style="padding:7px;border:1px solid #b8d4e8">Abundante · relevante · la mayoría</td></tr>
  </tbody>
</table>
<p style="font-size:12px;color:#5a8fa8;margin:0 0 8px"><strong>Orden informe serie roja:</strong> Anisocitosis → tamaño predominante (micro/macro) → cromía → poiquilocitosis relevantes (≤3 tipos) → inclusiones → hemoparásitos.</p>
<p style="font-size:12px;color:#5a8fa8;margin:0"><strong>Corrección leucocitos por eritroblastos:</strong> Si ≥10 eritroblastos/100 células → Leucocitos corregidos = (leucocitos × 100) / (eritroblastos + 100). Ejemplo: leucos 5,0 K/µL + 35 eritroblastos → corregido = 3,70 K/µL.</p>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Clasificación de Anemia por Severidad — OMS (Prof. Díaz 2022)</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 4px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Población</th><th style="padding:7px;text-align:left">Anemia (Hb)</th><th style="padding:7px;text-align:left">Leve (g/dL)</th><th style="padding:7px;text-align:left">Moderada (g/dL)</th><th style="padding:7px;text-align:left">Severa (g/dL)</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Mujer (sin embarazo &gt;15a)</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 12,0</td><td style="padding:7px;border:1px solid #b8d4e8">11,0–11,9</td><td style="padding:7px;border:1px solid #b8d4e8">8,0–10,9</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 8,0</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Hombre (&gt;15a)</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 13,0</td><td style="padding:7px;border:1px solid #b8d4e8">11,0–12,9</td><td style="padding:7px;border:1px solid #b8d4e8">8,0–10,9</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 8,0</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8">Embarazada (&gt;15a)</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 11,0</td><td style="padding:7px;border:1px solid #b8d4e8">10,0–10,9</td><td style="padding:7px;border:1px solid #b8d4e8">7,0–9,9</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 7,0</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8">Niño 12–14a</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 12,0</td><td style="padding:7px;border:1px solid #b8d4e8">11,0–11,9</td><td style="padding:7px;border:1px solid #b8d4e8">8,0–10,9</td><td style="padding:7px;border:1px solid #b8d4e8">&lt; 8,0</td></tr>
  </tbody>
</table>

<h4 style="color:#5a8fa8;margin:18px 0 8px">Variaciones Fisiológicas del Hemograma</h4>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:0 0 4px">
  <thead><tr style="background:#5a8fa8;color:#fff">
    <th style="padding:7px;text-align:left">Condición</th><th style="padding:7px;text-align:left">Cambio principal</th><th style="padding:7px;text-align:left">Mecanismo</th>
  </tr></thead>
  <tbody>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Altitud</strong></td><td style="padding:7px;border:1px solid #b8d4e8">GR↑ · Hb↑ · Hcto↑</td><td style="padding:7px;border:1px solid #b8d4e8">Hipoxia → ↑ EPO → eritropoyesis compensatoria</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Embarazo</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Hb↓ · Hcto↓ · leucocitosis leve · trombocitopenia gestacional</td><td style="padding:7px;border:1px solid #b8d4e8">Hemodilución fisiológica por ↑ volumen plasmático</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Neonatos</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Hb 14-20 g/dL · Hcto 45-65% · VCM↑</td><td style="padding:7px;border:1px solid #b8d4e8">HbF fetal → postnatal gradual reemplazo por HbA</td></tr>
    <tr><td style="padding:7px;border:1px solid #b8d4e8"><strong>Ejercicio intenso</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Leucocitosis transitoria · trombocitosis leve</td><td style="padding:7px;border:1px solid #b8d4e8">Demarginación · ↑ adrenalina</td></tr>
    <tr style="background:#e8f3fb"><td style="padding:7px;border:1px solid #b8d4e8"><strong>Tabaquismo</strong></td><td style="padding:7px;border:1px solid #b8d4e8">Hb↑ · Hcto↑ · leucocitosis</td><td style="padding:7px;border:1px solid #b8d4e8">CO → forma carboxiHb → hipoxia tisular → ↑ EPO</td></tr>
  </tbody>
</table>
`,
    casos: `
<h3 style="color:#5a8fa8;margin:0 0 16px">Casos Clínicos — Laboratorio Hematológico</h3>

<div style="background:#e8f3fb;border-left:4px solid #5a8fa8;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#5a8fa8;margin:0 0 10px">Caso 1 — Anemia Aplásica Severa (Capítulo 19)</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Presentación:</strong> Paciente con pancitopenia, historia de hepatitis autoinmune. Sin blastos en sangre ni MO.</p>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:6px 0">
    <thead><tr style="background:#5a8fa8;color:#fff">
      <th style="padding:6px;text-align:left">Hallazgo</th><th style="padding:6px;text-align:left">Resultado</th><th style="padding:6px;text-align:left">Significado</th>
    </tr></thead>
    <tbody>
      <tr style="background:#e8f3fb"><td style="padding:6px;border:1px solid #b8d4e8">Todas las series</td><td style="padding:6px;border:1px solid #b8d4e8">↓↓↓ (pancitopenia)</td><td style="padding:6px;border:1px solid #b8d4e8">Falla de todas las líneas celulares</td></tr>
      <tr><td style="padding:6px;border:1px solid #b8d4e8">Reticulocitos</td><td style="padding:6px;border:1px solid #b8d4e8">↓ (reticulocitopenia)</td><td style="padding:6px;border:1px solid #b8d4e8">MO no produce → arregenerativa</td></tr>
      <tr style="background:#e8f3fb"><td style="padding:6px;border:1px solid #b8d4e8">Blastos</td><td style="padding:6px;border:1px solid #b8d4e8">Ausentes</td><td style="padding:6px;border:1px solid #b8d4e8">Diferencia con leucemia</td></tr>
      <tr><td style="padding:6px;border:1px solid #b8d4e8">B12 y folato</td><td style="padding:6px;border:1px solid #b8d4e8">Normales</td><td style="padding:6px;border:1px solid #b8d4e8">Descarta megaloblástica</td></tr>
      <tr style="background:#e8f3fb"><td style="padding:6px;border:1px solid #b8d4e8">MO (biopsia)</td><td style="padding:6px;border:1px solid #b8d4e8">Hipocelular &gt;70%</td><td style="padding:6px;border:1px solid #b8d4e8">Confirma aplasia severa</td></tr>
    </tbody>
  </table>
  <p style="font-size:12px;margin:8px 0 0"><strong>Regla:</strong> Si hay ↑ blastos o reticulina en MO → considerar mielodisplasia o leucemia (NO aplasia).<br>
  <strong>Tto:</strong> Plaquetas si &lt;10.000/µL · GR si síntomas de anemia · TPH si hermano HLA-idéntico · GAT + ciclosporina si no hay donante.</p>
</div>

<div style="background:#e8f3fb;border-left:4px solid #5a8fa8;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#5a8fa8;margin:0 0 10px">Caso 2 — Interpretación de Hemograma Patológico: Anemia Ferropénica</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Datos del hemograma:</strong> Hb 9.2 g/dL · GR 4.1 M/µL · VCM 68 fL · HCM 22 pg · CHCM 30 g/dL · ADE 18% · Reticulocitos 0.4% · Leucocitos 6.500/µL · Plaquetas 380.000/µL.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Interpretación paso a paso:</strong></p>
  <ul style="font-size:13px;margin:0 0 8px;padding-left:20px;line-height:1.8">
    <li>Hb↓ → anemia confirmada</li>
    <li>VCM 68 fL (&lt;82) → microcítica</li>
    <li>HCM↓ + CHCM↓ → hipocrómica</li>
    <li>ADE 18% (&gt;14.5) → anisocitosis marcada</li>
    <li>Reticulocitos 0.4% → arregenerativa</li>
    <li>Plaquetas normales (sin trombocitosis reactiva todavía)</li>
  </ul>
  <p style="font-size:13px;margin:0"><strong>Diagnóstico probable:</strong> Anemia microcítica hipocrómica arregenerativa → Anemia Ferropénica. <strong>Confirmar con:</strong> Ferritina sérica &lt;30 ng/mL + Fe sérico↓ + TIBC↑. Frotis: hipocromía + microcitosis + poiquilocitosis (células en lápiz).</p>
</div>

<div style="background:#e8f3fb;border-left:4px solid #5a8fa8;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#5a8fa8;margin:0 0 10px">Caso 3 — Frotis con Linfocitos Reactivos: Mononucleosis</h4>
  <p style="font-size:13px;margin:0 0 8px"><strong>Datos del hemograma:</strong> Leucocitos 22.000/µL · Linfocitos 65% (RAL 14.300) · LUC 8% (bandas LUC &gt;400/µL) · Neutrófilos 25% · Plaquetas 130.000/µL.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Frotis:</strong> Se observan linfocitos de tamaño aumentado, citoplasma con basofilia periférica (tipo "hugging the red cell"). Morfología compatibe con linfocitos reactivos Downey tipo I y II.</p>
  <p style="font-size:13px;margin:0 0 8px"><strong>Interpretación:</strong> LUC &gt;6% o &gt;400/µL → revisar frotis → linfocitos reactivos → síndrome mononucleosico.</p>
  <p style="font-size:13px;margin:0"><strong>Informe sugerido:</strong> "Se observa linfocitosis con 15% de linfocitos reactivos de morfología compatible con síndrome mononucleosico. Se recomienda correlación clínica y serología para EBV/CMV."</p>
</div>
`,
    notas: `
<h3 style="color:#5a8fa8;margin:0 0 16px">Notas para el Certamen — Laboratorio</h3>

<div style="background:#e8f3fb;border-left:4px solid #5a8fa8;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#5a8fa8;margin:0 0 10px">Lo más preguntado en lab</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:2">
    <li>VR Hb: H 13-17.5 · M 12-15 g/dL · Plaquetas 140-400 K/µL · VCM 82-96 fL</li>
    <li>Valores críticos: blastos en sangre (SIEMPRE), Hb&lt;7, plaquetas&lt;20k, neutrófilos&lt;500</li>
    <li>Baciliforme vs Metamielocito: hendidura nuclear y límite de la línea media</li>
    <li>Dacriocito = mielofibrosis · Esferocito = esferocitosis/AHAI · Esquistocito = microangiopática</li>
    <li>LUC &gt;6% o &gt;400/µL → revisar frotis (puede ser linfocito reactivo O blasto)</li>
    <li>Anemia ferropénica: VCM↓ + RDW↑ + reticulocitos↓. EEC: RDW normal + reticulocitos↓</li>
    <li>Hemograma automatizado: impedancia (volumen) + light scattering (diferenciación leucocitaria)</li>
    <li><strong>Sistema ISP cruces:</strong> + = hasta 5/campo · ++ = 6–10/campo · +++ = ≥11/campo. Orden informe: tamaño → cromía → poiquilocitosis → inclusiones.</li>
    <li><strong>Corrección eritroblastos:</strong> si ≥10/100 células → leucos corregidos = (leucos × 100) / (eritroblastos + 100)</li>
    <li><strong>VR reticulocitos (Díaz 2022):</strong> 0,5–2,5% · H: 23–155 K/µL · M: 21–135 K/µL</li>
    <li><strong>VR neonatos:</strong> Hb 16,5–19,3 g/dL · leucocitos 18–20 K/µL (leucocitosis fisiológica)</li>
    <li><strong>Anemia severa OMS:</strong> Hb &lt;8 g/dL en adultos. Corrección Hb por altitud: a 2.000 m restar 0,8 g/dL; por tabaco ½–1 paq/día: -0,3 g/dL.</li>
    <li><strong>Baciliformes 0–3%:</strong> si &gt;3% = desviación izquierda (infección, inflamación, leucemia)</li>
  </ul>
</div>

<div style="background:#fde8c0;border-left:4px solid #b8860b;padding:14px 16px;margin:0 0 14px;border-radius:6px">
  <h4 style="color:#8b6000;margin:0 0 10px">Errores Preanalíticos más frecuentes</h4>
  <table style="width:100%;border-collapse:collapse;font-size:12px;margin:0">
    <thead><tr style="background:#b8860b;color:#fff">
      <th style="padding:6px;text-align:left">Error</th><th style="padding:6px;text-align:left">Consecuencia en hemograma</th><th style="padding:6px;text-align:left">Solución</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:6px;border:1px solid #f0c060">EDTA — tubo no mezclado</td><td style="padding:6px;border:1px solid #f0c060">Coágulos → falsa pancitopenia</td><td style="padding:6px;border:1px solid #f0c060">Mezclar inmediatamente 8-10 veces invertir</td></tr>
      <tr style="background:#fdf3cc"><td style="padding:6px;border:1px solid #f0c060">EDTA — pseudotrombocitopenia</td><td style="padding:6px;border:1px solid #f0c060">Satelitismo plaquetario + autoaglutinación → recuento falsamente bajo</td><td style="padding:6px;border:1px solid #f0c060">Repetir en tubo con citrato o heparina</td></tr>
      <tr><td style="padding:6px;border:1px solid #f0c060">Hemólisis de muestra</td><td style="padding:6px;border:1px solid #f0c060">Hb falsamente ↑ · GR falsamente ↓ · K falsamente ↑</td><td style="padding:6px;border:1px solid #f0c060">Nueva toma · evitar agitación brusca</td></tr>
      <tr style="background:#fdf3cc"><td style="padding:6px;border:1px solid #f0c060">Muestra en frío (&lt;4°C)</td><td style="padding:6px;border:1px solid #f0c060">Crioaglutininas → VCM falsamente ↑ · GR falsamente ↓</td><td style="padding:6px;border:1px solid #f0c060">Analizar a temperatura ambiente (30 min)</td></tr>
      <tr><td style="padding:6px;border:1px solid #f0c060">Demora en procesamiento (&gt;8h)</td><td style="padding:6px;border:1px solid #f0c060">Leucocitos se fragmentan → recuento leucocitario ↓ · plaquetas infladas</td><td style="padding:6px;border:1px solid #f0c060">Procesar antes de 4-6h (EDTA 4°C max 24h)</td></tr>
      <tr style="background:#fdf3cc"><td style="padding:6px;border:1px solid #f0c060">Lipemia (muestra ictérica/turbia)</td><td style="padding:6px;border:1px solid #f0c060">Hb falsamente ↑ (interfiere colorimetría)</td><td style="padding:6px;border:1px solid #f0c060">Blancos de muestra · centrifugación</td></tr>
    </tbody>
  </table>
</div>

<div style="background:#e8f3fb;border-left:4px solid #5a8fa8;padding:14px 16px;margin:0;border-radius:6px">
  <h4 style="color:#5a8fa8;margin:0 0 10px">Cómo reportar hallazgos críticos — Protocolo</h4>
  <ul style="font-size:13px;margin:0;padding-left:20px;line-height:1.9">
    <li><strong>Blastos:</strong> "Se observa X% de blastos en frotis de sangre periférica. Morfología: [describir]. Se informa como valor crítico y se recomienda mielograma urgente."</li>
    <li><strong>Linfocitos reactivos:</strong> "X% de linfocitos reactivos compatibles con síndrome mononucleosico. Correlacionar con clínica y serología."</li>
    <li><strong>Pseudotrombocitopenia:</strong> "Recuento de plaquetas posiblemente subestimado por satelitismo plaquetario por EDTA. Se recomienda repetir muestra en citrato."</li>
    <li><strong>Restos de Gumprecht:</strong> "Se observan restos de Gumprecht (smudge cells) en porcentaje elevado, compatible con LLC. Se recomienda inmunofenotipo."</li>
    <li>Todo valor crítico debe ser comunicado verbalmente al médico tratante y registrado en el informe con hora de notificación.</li>
  </ul>
</div>
`
  }
};
window.UNIT_DETAIL = UNIT_DETAIL;
