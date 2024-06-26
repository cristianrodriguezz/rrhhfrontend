import * as yup from 'yup';



// Expresión regular para validar otros códigos de área (incluyendo el 261) sin espacios ni guiones
const otherPhoneRegex = /^(11|260|261|262|2622|2624|2625|2626|263|264|266|2804|2901|2920|2954|2966|299|351|362|370|376|379|380|383|385|387|388|420|421|422|423|424|425|426|427|428|429|430|431|432|433|434|435|436|437|438|439|440|441|442|443|444|445|446|447|448|449|450|451|452|453|454|455|456|457|458|459|460|461|462|463|464|465|466|467|468|469|470|471|472|473|474|475|476|477|478|479|480|481|482|483|484|485|486|487|488|489|490|491|492|493|494|495|496|497|498|499|5411|5423|5434|5438|5435|5436|5437|5431|5432|5433|5430|5439|543|541|542|544|545|546|547|548|549|550|551|552|553|554|555|556|557|558|559|560|561|562|563|564|565|566|567|568|569|570|571|572|573|574|575|576|577|578|579|580|581|582|583|584|585|586|587|588|589|590|591|592|593|594|595|596|597|598|599|600|601|602|603|604|605|606|607|608|609|610|611|612|613|614|615|616|617|618|619|620|621|622|623|624|625|626|627|628|629|630|631|632|633|634|635|636|637|638|639|640|641|642|643|644|645|646|647|648|649|650|651|652|653|654|655|656|657|658|659|660|661|662|663|664|665|666|667|668|669|670|671|672|673|674|675|676|677|678|679|680|681|682|683|684|685|686|687|688|689|690|691|692|693|694|695|696|697|698|699|700|701|702|703|704|705|706|707|708|709|710|711|712|713|714|715|716|717|718|719|720|721|722|723|724|725|726|727|728|729|730|731|732|733|734|735|736|737|738|739|740|741|742|743|744|745|746|747|748|749|750|751|752|753|754|755|756|757|758|759|760|761|762|763|764|765|766|767|768|769|770|771|772|773|774|775|776|777|778|779|780|781|782|783|784|785|786|787|788|789|790|791|792|793|794|795|796|797|798|799|800|801|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|820|821|822|823|824|825|826|827|828|829|830|831|832|833|834|835|836|837|838|839|840|841|842|843|844|845|846|847|848|849|850|851|852|853|854|855|856|857|858|859|860|861|862|863|864|865|866|867|868|869|870|871|872|873|874|875|876|877|878|879|880|881|882|883|884|885|886|887|888|889|890|891|892|893|894|895|896|897|898|899|900|901|902|903|904|905|906|907|908|909|910|911|912|913|914|915|916|917|918|919|920|921|922|923|924|925|926|927|928|929|930|931|932|933|934|935|936|937|938|939|940|941|942|943|944|945|946|947|948|949|950|951|952|953|954|955|956|957|958|959|960|961|962|963|964|965|966|967|968|969|970|971|972|973|974|975|976|977|978|979|980|981|982|983|984|985|986|987|988|989|990|991|992|993|994|995|996|997|998|999)\d{7}$/;


export const candidateSchema = yup.object({
  first_name: yup.string().min(1).max(50, 'Debe tener 50 caracteres como máximo').required('Debes completar el nombre'),
  last_name: yup.string().min(1).max(50, 'Debe tener 50 caracteres como máximo').required('Debes completar el apellido'),
  age: yup.date().max(new Date(), 'La fecha de nacimiento no puede ser en el futuro').required('Debes completar tu fecha de nacimiento'),
  cuil: yup.string().matches(/^\d{11}$/, 'El CUIL debe contener exactamente 11 dígitos').required('Debes completar tu CUIL'),
  phone_number: yup.string()
  .max(25, 'Debe tener 25 caracteres como máximo')
  .matches(otherPhoneRegex, 'El número de teléfono no es válido')
  .required('Debes completar tu número de teléfono'),
  has_own_transport: yup.boolean(),
  has_work_experience: yup.boolean(),
  current_position_id: yup.number().integer().required('Debes completar tu posición'),
  province_id: yup.number().integer().required('Debes completar la provincia'),
  education_id: yup.number().integer().required('Debes completar tu educación'),
  availability_id: yup.number().integer().required('Debes completar tu disponibilidad'),
  location_id: yup.number().integer().required('Debes completar tu localidad'),
  cv: yup.mixed().required('El curriculum es requerido'),
  email: yup.string().email('Tiene que ser un email').max(40, 'Debe tener 40 caracteres como máximo').required('Debes completar tu email'),
  language_id: yup.number().integer().nullable(),
})



