const DICTIONARY = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefhijkmnopqrstuvwxyz23456789";
const DICTIONARY_LENGTH = BigInt(DICTIONARY.length);

const example = {
    cl_crosshairgap: -2,
    cl_crosshair_outlinethickness: 1.5,
    cl_crosshaircolor_r: 50,
    cl_crosshaircolor_g: 250,
    cl_crosshaircolor_b: 84,
    cl_crosshairalpha: 200,
    cl_crosshair_dynamic_splitdist: 127,
    cl_fixedcrosshairgap: -10,
    cl_crosshaircolor: 5,
    cl_crosshair_drawoutline: 0,
    cl_crosshair_dynamic_splitalpha_innermod: 0.6,
    cl_crosshair_dynamic_splitalpha_outermod: 0.8,
    cl_crosshair_dynamic_maxdist_splitratio: 0.3,
    cl_crosshairthickness: 4.1,
    cl_crosshairstyle: 2,
    cl_crosshairdot: 1,
    cl_crosshairgap_useweaponvalue: 0,
    cl_crosshairusealpha: 0,
    cl_crosshair_t: 1,
    cl_crosshairsize: 33
  }

const serializeToBytes = info => {
    const bytes = [
        0,
        1,
        (info.cl_crosshairgap * 10) & 0xff,
        (info.cl_crosshair_outlinethickness * 2) & 7,
        info.cl_crosshaircolor_r,
        info.cl_crosshaircolor_g,
        info.cl_crosshaircolor_b,
        info.cl_crosshairalpha,
        info.cl_crosshair_dynamic_splitdist,
        (info.cl_fixedcrosshairgap * 10) & 0xff,
        (info.cl_crosshaircolor & 7) |
            (info.cl_crosshair_drawoutline ? 8 : 0) |
            (info.cl_crosshair_dynamic_splitalpha_innermod * 10) << 4,
        ((info.cl_crosshair_dynamic_splitalpha_outermod * 10) & 0xf) |
            ((info.cl_crosshair_dynamic_maxdist_splitratio * 10) << 4),
        (info.cl_crosshairthickness * 10) & 0x3f,
        ((info.cl_crosshairstyle << 1) & 0xe) |
            (info.cl_crosshairdot ? 0x10 : 0) |
            (info.cl_crosshairgap_useweaponvalue ? 0x20 : 0) |
            (info.cl_crosshairusealpha ? 0x40 : 0) |
            (info.cl_crosshair_t ? 0x80 : 0),
        (info.cl_crosshairsize * 10) & 0xff,
        ((info.cl_crosshairsize * 10) >> 8) & 0x1f,
        0,
        0
    ];

    let sum = 0;
    for (let i = 1; i < bytes.length; ++i) {
        sum += bytes[i];
    }
    bytes[0] = sum & 0xff;

    return bytes;
};

const encode = info => {
    const bytes = serializeToBytes(info);
    
    let acc = 0n;
    let pos = 1n;
    for (let i = bytes.length; i --> 0;) {
        acc += BigInt(bytes[i]) * pos;
        pos *= 256n;
    }
    
    let result = '';
    for (let i = 0; i < 25; ++i) {
        const digit = acc % DICTIONARY_LENGTH;
        acc = acc / DICTIONARY_LENGTH;
        result += DICTIONARY.charAt(Number(digit));
    }
    
    return `CSGO-${result.slice(0, 5)}-${result.slice(5, 10)}-${result.slice(10, 15)}-${result.slice(15, 20)}-${result.slice(20, 25)}`;
};

console.log(encode(example));