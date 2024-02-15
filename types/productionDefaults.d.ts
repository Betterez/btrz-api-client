export let baseURL: string;
export let timeout: number;
export namespace baseURLOverride {
    function inventory(url: any): string;
    function trips(url: any): string;
}
