# BIP21 Lightning QR codes

This is a CLI tool for generating a BIP21 compatible payment URI and accompanying QR code which also contains a lightning invoice.

## Instructions

1. Run `npm i`
2. Run `npm run test` to generate a BIP21 QR code with the included test data.

To generate your own custom BIP21 QR, run this:

```
npm run qr -- --amt=<<amount>> --name=<<name of recipient>> --description='<<Description or memo>>' --btc=<<on -chain address>> --ln=<<lightning invoice>>
```