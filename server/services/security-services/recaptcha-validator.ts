import * as request from 'request';

const privateKey: string = '6Lc2zmsUAAAAAEBIlXk1nuiBQ75DsABN44Kxuxpn';

export function validateRecaptcha(key: string): Promise<any> {
    const captchaRequestOpts = {
        uri: `https://www.google.com/recaptcha/api/siteverify?secret=${privateKey}&response=${key}`,
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    };

    return new Promise<any>((resolve, reject) => {
        request.post(captchaRequestOpts, (g_error: any, g_response: any) => {
            if (g_error) {
                reject({m: 'Error in verifying recaptcha', e: g_error, r: g_response});
            }

            try {
                g_response = JSON.parse(g_response.body);
            } catch (e) {
                reject({m: 'Error in parsing recaptcha response', e: g_error, r: g_response, jsone: e});
            }

            if (!g_response.success) {
                reject({m: 'Recaptcha not verified', e: g_error, r: g_response});
            }

            resolve(g_response);
        })
    });
}
