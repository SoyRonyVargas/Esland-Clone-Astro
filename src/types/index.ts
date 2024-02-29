// Generated by https://quicktype.io

export interface GaleriaData {
    edition:   string;
    maxPhotos: number;
    info:      Info[];
}

export interface Info {
    categoria:   string;
    ganador:     string;
    foto1:       string;
    comunidad1?: number;
    streamers1?: number;
    total1?:     number;
    finalista?:  string;
    foto2?:      string;
    comunidad2?: number;
    streamers2?: number;
    total2?:     number;
}