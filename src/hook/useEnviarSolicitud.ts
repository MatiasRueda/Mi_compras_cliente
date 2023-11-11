export enum METODO {
    PUT = "PUT",
    POST = "POST"
}

export async function useEnviarSolicitud<T> (data: T, url: string, metodo: METODO) {
    const informacionDato: RequestInit = {
        method: metodo,
        body: JSON.stringify(data), 
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        }
    }
    return  await fetch(url, informacionDato).then(res => res.json()); 
}
