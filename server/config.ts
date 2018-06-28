export interface iConfig {
    port: number;
    dbt: string;
    dbp: string;
}

export const config: iConfig = {
    port: 3000,
    dbt: 'mongodb://localhost/rom_test',
    dbp: 'mongodb://localhost/rom_prod'
};
