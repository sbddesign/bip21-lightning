const bip21 = require('bip21')
const qrcode = require('qrcode')
const { exec } = require('child_process')
const args = require('minimist')(process.argv.slice(2))

if(!args['btc'] || !args['amt'] || !args['description'] || !args['ln']) {
    console.log('Error: missing required args.');
}
else {
    const uri = bip21.encode(args['btc'], {
        amount: args['amt'],
        label: args['name'] ? args['name'] + ': ' + args['description'] : args['description'],
        message: args['description'],
        lightning: args['ln']
    })
    
    console.log('BIP21 Payment URI 👇\n\n' + uri + '\n\n')

    let qr = args['file'] ? args['file'] : 'qr.png';

    qrcode.toFile(qr, uri)
}