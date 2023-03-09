import home from '../modules/home/pt_br'
import news from '../modules/news/pt_br'
import article from '../modules/article/pt_br'
import pressbox from '../modules/pressbox/pt_br'
import searchresult from '../modules/searchresult/pt_br'

export default {
    navbar: {
        home: 'INÍCIO',
        news: 'NOTÍCIA',
        article: 'ARTIGO',
        press_box: 'MULTIMÉDIA',
        search: 'PROCURAR',
        language: 'LÍNGUA',
        modal_search: {
            write_to_search: 'Escrever para pesquisar',
            advance_search: 'Pesquisa antecipada',
            search: 'Procurar'
        },
        modal_language: {
            where_want: 'PARA ONDE VOCÊ QUER IR?',
            current_location: 'Localização atual',
            moto_latin: 'Motorola Latinoamérica',
            moto_north: 'Motorola global',
            mx: "México / Espanhol",
            arg: "Argentina / Espanhol",
            co: "Colombia / Espanhol",
            bra: "Brasil / Português",
            pe:  "Perú / Espanhol",
            cl: "Chile / Espanhol",
            global: "Global / Inglês"
        }
    },
    footer: {
        dont_miss: "Don 't perder quaisquer atualizações",
        agree: 'Concordo em receber comunicação da marca por e-mail da Motorola e confirmo que tenho 16 anos de idade ou mais.',
        find_our_products: 'ENCONTRE OS NOSSOS PRODUTOS',
        suscribe: 'SUSCRIBIRSE',
        pr_contact: 'CONTATO DE RELAÇÕES PÚBLICAS',
        contact_us: 'Entre em contato conosco',
        join_our_networks: 'JUNTE-SE ÀS NOSSAS REDES',
        confidentiality: 'CONFIDENCIALIDADE',
        form: {
            title: 'CONTATO',
            name: 'Nome',
            email: 'Email',
            subject: 'Assunto',
            message: 'Mensagem',
            leave_message: 'Deixe uma mensagem aqui',
            submit: 'Enviar'
        },
        inquiries_only: `Solo para consultas de relações públicas. Se tiver alguma dúvida sobre o seu dispositivo, comunique-se com o serviço de 
        <a href="https://motorola-global-portal.custhelp.com/app/mcp/contactus" target="_blank" class="text-info">
         atendimento ao cliente 
        </a> da Motorola.`,
        all_rights_reserved: 'Todos os direitos reservados',
        newsletter: {
            submit: 'Muito em breve entraremos em contato com você',
            subscribe: 'Você subscreveu o boletim informativo',
            already_subscribe: `Você já está, já está suscitando uma boletim informativo`,
            subscribe_error: 'Não foi possível assinar o boletim informativo.',
            type: 'info',
            title: 'Ei!',
            error: 'Erro'
        }
    },
    read_this_article: 'LEIA ESTE ARTIGO',
    download: 'Baixar',
    see_more: 'ver mais',
    press_box: 'SALA DE IMPRENSA',
    copied: 'Copiando',
    ...home,
    ...news,
    ...article,
    ...pressbox,
    ...searchresult
}