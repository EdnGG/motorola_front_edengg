export default function urlB(cadena) {
	//const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'}

    let title = cadena.toLowerCase().replace(/\-/g, '')
	title = cadena.toLowerCase().replace(/\s/g, '-')
    //title = title.split('').map( letra => acentos[letra] || letra).join('').toString();

    title = title.replace(new RegExp(/[àáâãäå]/g),"a");
    title = title.replace(new RegExp(/æ/g),"ae");
    title = title.replace(new RegExp(/ç/g),"c");
    title = title.replace(new RegExp(/[èéêë]/g),"e");
    title = title.replace(new RegExp(/[ìíîï]/g),"i");
    title = title.replace(new RegExp(/ñ/g),"n");                
    title = title.replace(new RegExp(/[òóôõö]/g),"o");
    title = title.replace(new RegExp(/œ/g),"oe");
    title = title.replace(new RegExp(/[ùúûü]/g),"u");
    title = title.replace(new RegExp(/[ýÿ]/g),"y");

    title = title.replace(/[^a-zA-Z0-9- ]/g, '')

    return title
}