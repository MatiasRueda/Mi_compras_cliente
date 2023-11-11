import { Children , isValidElement , createElement , ReactNode } from "react";
import { get, useForm } from "react-hook-form";

function SForm( props: { id: string, btnEnviar: string, children: ReactNode , onSubmit: (data: any) => void }): JSX.Element {
    const { handleSubmit , register , formState: { errors } , watch , reset } = useForm();

    const informacionEnviada = (data: any): void => {
        props.onSubmit(data);
        reset();
    }
    return (
            <form id={props.id} autoComplete="off" onSubmit={handleSubmit(informacionEnviada)}>
                {Children.map(props.children, child => {
                    if(!isValidElement(child)) return child;
                    return child.props.nombre
                    ? createElement(child.type, {
                        ...{
                        ...child.props,
                        register: register,
                        reglas: !child.props.inputIgual
                            ? child.props.reglas : 
                              {...child.props.reglas, validate: (value: any) => {
                                if (watch(child.props.inputIgual) === value) return true;
                                return "Las contrasenias no coinciden"}},
                        error: get(errors, child.props.nombre),
                        key: child.props.nombre
                        }
                    })
                    : child;
                })}
                <button type="submit">{props.btnEnviar}</button>
            </form>
    )
}

export default SForm;