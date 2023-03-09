export default function informativeDate(date, lang = 'en', dw = false) {
	lang = lang.split('-')[0]
	// console.log(lang, 'LANG INFORMATIVE')

	let days = {
		en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		es: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
		pt: ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo']
	}
	let months = {
		en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		pt: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
	}
	
	date = (_.isDate(date)) ? date : new Date(date)
	// console.log('date: ', date)
	
	let date_day_week = days[lang][date.getDay()-1]
    // console.log('Day Week', date_day_week)

    let date_day = date.getDate()
    // console.log('Day', date_day)
    
    let date_month = months[lang][date.getMonth()]
    // console.log('Month', date_month)

    let date_age = date.getFullYear()
    // console.log('Age', date_age)

    let finally_date = ''

    if(lang == 'en') {
    	finally_date = (dw) ? `${date_month} ${date_day_week} ${date_day}, ${date_age}` : 
    						  `${date_month} ${date_day}, ${date_age}`
    }
    else if(lang == 'es') {
    	finally_date = (dw) ? `${date_day_week} ${date_day} de ${date_month}, ${date_age}` : 
    						  `${date_day} de ${date_month}, ${date_age}`
    }
    else if(lang == 'pt') {
    	finally_date = (dw) ? `${date_day_week} ${date_day} de ${date_month}, ${date_age}` : 
    						  `${date_day} de ${date_month}, ${date_age}`
    }

	//this.$log('Finally date', finally_date)    						  

    return finally_date

}
