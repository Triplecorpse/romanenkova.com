export interface IRecaptchaResponse {
    success: boolean;
    challenge_ts: string;
    hostname: string;
    'error-codes': Array<string>;
}