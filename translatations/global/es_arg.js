import home from '../modules/home/es_arg'
import news from '../modules/news/es_arg'
import article from '../modules/article/es_arg'
import pressbox from '../modules/pressbox/es_arg'
import searchresult from '../modules/searchresult/es_arg'


export default {
    navbar: {
        home: 'INICIO',
        news: 'NOTICIAS',
        article: 'ARTÍCULO',
        press_box: 'MULTIMEDIA',
        search: 'BUSCAR',
        language: 'IDIOMA',
        modal_search: {
            write_to_search: 'Ingresá tu búsqueda',
            advance_search: 'Busqueda avanzada',
            search: 'Buscar'
        },
        modal_language: {
            where_want: '¿A DÓNDE QUERÉS IR?',
            current_location: 'Ubicación actual',
            moto_latin: 'Motorola Latinoamérica',
            moto_north: 'Motorola global',
            mx: "Mexico / Español",
            arg: "Argentina / Español",
            co: "Colombia / Español",
            bra: "Brasil / Portugués",
            pe:  "Peru / Español",
            cl: "Chile / Español",
            global: "Global / Inglés"
        }
    },
    footer: {
        dont_miss: 'Recibí nuestras actualizaciones',
        agree: 'Acepto recibir comunicaciones de la marca por correo electrónico de Motorola y confirmo que tengo 16 años o más.',
        find_our_products: 'DESCUBRÍ NUESTROS PRODUCTOS',
        suscribe: 'SUSCRIBIRSE',
        pr_contact: 'CONTACTO PR',
        contact_us: 'Contactános',
        join_our_networks: 'SEGUÍNOS',
        confidentiality: 'AVISO DE CONFIDENCIALIDAD',
        form: {
            title: 'CONTACTO',
            name: 'Nombre',
            email: 'Correo',
            subject: 'Asunto',
            message: 'Mensaje',
            leave_message: 'Escribí su mensaje',
            submit: 'Enviar'
        },
        inquiries_only: `Solo para consultas de relaciones publicas. Si tenés alguna pregunta sobre su dispositivo, comuníquese con el servicio de 
        <a href="https://motorola-global-portal.custhelp.com/app/mcp/contactus" target="_blank" class="text-info">
         atención al cliente
        </a> de Motorola.`,
        all_rights_reserved: 'All rights reserved',
        newsletter: {
            submit: 'Muy pronto nos pondremos en contacto contigo',
            subscribe: 'Te has suscrito al boletín de noticias',
            already_subscribe: `Ya estás suscrito al boletín`,
            subscribe_error: 'No fue posible suscribirte al boletín de noticias',
            type: 'info',
            title: 'Ey!',
            error: 'Error'
        }
    },
    read_this_article: 'LEER MÁS',
    download: 'Descargar',
    see_more: 'ver más',
    press_box: 'SALA DE PRENSA',
    copied: 'Copiado',
    ...home,
    ...news,
    ...article,
    ...pressbox,
    ...searchresult
}