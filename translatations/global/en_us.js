import home from '../modules/home/en_us'
import news from '../modules/news/en_us'
import article from '../modules/article/en_us'
import pressbox from '../modules/pressbox/en_us'
import searchresult from '../modules/searchresult/en_us'

export default {
    navbar: {
        home: 'HOME',
        news: 'NEWS',
        article: 'ARTICLE',
        press_box: 'PRESS BOX',
        search: 'SEARCH',
        language: 'LANGUAGE',
        modal_search: {
            write_to_search: 'Write to search',
            advance_search: 'Advance search',
            search: 'Search'
        },
        modal_language: {
            where_want: 'WHERE DO YO WANT TO GO?',
            current_location: 'Current Location',
            moto_latin: 'Motorola Latin America',
            moto_north: 'Motorola global',
            mx: "Mexico / Spanish",
            arg: "Argentina / Spanish",
            co: "Colombia / Spanish",
            bra: "Brasil / Portuguese",
            pe:  "Peru / Spanish",
            cl: "Chile / Spanish",
            global: "Global / English"
        }
    },
    footer: {
        dont_miss: 'Don\'t miss any updates',
        agree: 'I agree to receive brand communication by email from Motorola, and I confirm that I am 16 years of age or older.',
        find_our_products: 'FIND OUR PRODUCTS',
        suscribe: 'SUSCRIBE',
        pr_contact: 'PR CONTACT',
        contact_us: 'Contact us',
        join_our_networks: 'JOIN OUR NETWORKS',
        confidentiality: 'CONFIDENTIALITY',
        form: {
            title: 'CONTACT',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            leave_message: 'Leave a message here',
            submit: 'Submit'
        },
        inquiries_only: `For PR inquiries only. For any questions regarding your device, please reach out to Motorola's
        <a href="https://motorola-global-portal.custhelp.com/app/mcp/contactus" target="_blank" class="text-info">
         customer service.
        </a>`,
        all_rights_reserved: 'All rights reserved',
        newsletter: {
            submit: 'Very soon we will get in touch with you',
            subscribe: 'You have subscribed to the newsletter',
            already_subscribe: `You're, already suscribe newletter`,
            subscribe_error: 'You not possible to subscribe to the newsletter',
            type: 'info',
            title: 'Hey!',
            error: 'error'
        }
    },
    read_this_article: 'READ THIS ARTICLE',
    download: 'Download',
    see_more: 'See more',
    press_box: 'PRESSBOX',
    copied: 'Copied',
    ...home,
    ...news,
    ...article,
    ...pressbox,
    ...searchresult
}
