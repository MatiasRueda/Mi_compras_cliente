export const listaElementos = (Elemento: ({...props}: any) => JSX.Element, elementos: any): JSX.Element[] => {
    if (!elementos) return [];
    return elementos.map((props: any) => <Elemento key={Object.values(props)[0]} {...props}  />);
}
