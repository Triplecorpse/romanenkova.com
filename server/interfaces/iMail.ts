export default interface IMail {
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    html?: string;
    text?: string;
}
