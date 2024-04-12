export interface Url {
    id: string;
    originalUrl: string;
    shortUrl: string
}

export type UrlWithOutId = Omit<Url, 'id','shortUrl'>