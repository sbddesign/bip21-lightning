const bip21 = require('bip21')
const qrcode = require('qrcode')
const { exec } = require('child_process')
const args = require('minimist')(process.argv.slice(2))

if(!args['btc'] || !args['ln']) {
    console.log('Error: missing required args.');
}
else {
    let options = {}

    if(args['amount']) options.amount = args['amount']
    if(args['name']) options.label = args['name']
    if(args['description']) options.message = args['description']
    
    // lightning must go last so that the rest of the message is not
    options.lightning = args['ln']
    
    const uri = bip21.encode(args['btc'], options)
    
    console.log('BIP21 Payment URI 👇\n\n' + uri + '\n\n')

    let qr = args['file'] ? args['file'] : 'qr.png';

    qrcode.toFile(qr, uri)
}