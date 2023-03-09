export default function ({redirect,route}) {
    
    let isMaintenance = process.env.MAINTENANCE_MODE === 'true'

    if(isMaintenance) {
        console.log('res')
        return redirect('/maintenance')
    }

    if(!isMaintenance && route.name === 'maintenance') {
        return redirect('/')
    }
    

}