import * as Crypto from 'expo-crypto';
import { Buffer } from "buffer"

String.prototype.hexEncode = () => {
    var hex, i;
  
    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ('000' + hex).slice(-4);
    }
  
    return result
}
  
String.prototype.hexDecode = () => {
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }
  
  return back;
}

export default async function encrypt(input, type) {

    let encodingType;
    let keyword = String(input)

    if(type === 'BASE64') {
        let buf = Buffer.from(input)
        return buf.toString('base64')
    }
    else if (type === 'HEX') {
        return keyword.hexEncode()
    }
    else {
        switch(type) {
            case 'SHA1':
                encodingType = Crypto.CryptoDigestAlgorithm.SHA1;
                break;
            case 'SHA256':
                encodingType = Crypto.CryptoDigestAlgorithm.SHA256;
                break;
            case 'SHA384':
                encodingType = Crypto.CryptoDigestAlgorithm.SHA384;
                break;
            case 'SHA512':
                encodingType = Crypto.CryptoDigestAlgorithm.SHA512;
                break;
            default:
                break;
        }
        return await Crypto.digestStringAsync( encodingType, input )
    }
}