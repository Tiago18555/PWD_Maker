'use strict'

import * as Crypto from 'expo-crypto';
import { Buffer } from "buffer"

export function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

export function trimText(text, size, last) {
    return !last
        ? String(text).substring(0, size - 1)
        : String(text).substring(Number(String(text).length) - size)
}

export default async function encrypt(input, type) {

    let encodingType;
    let keyword = String(input)

    const hexEncode = (params) => {
        var hex, i;
      
        var result = "";
        for (i=0; i < params.length; i++) {
            hex = params.charCodeAt(i).toString(16);
            result += ('000' + hex).slice(-4);
        }
      
        return result
    }
      
    const hexDecode = (params) => {
        var j;
        var hexes = params.match(/.{1,4}/g) || [];
        var back = "";
        for(j = 0; j<hexes.length; j++) {
            back += String.fromCharCode(parseInt(hexes[j], 16));
        }
      
      return back;
    }

    if(type === 'BASE64') {
        let buf = Buffer.from(input)
        return buf.toString('base64')
    }
    else if (type === 'HEX') {
        return hexEncode(keyword)
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