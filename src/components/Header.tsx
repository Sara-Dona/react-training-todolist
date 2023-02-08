import REACT from "react";
import "./Header.css"; //importar el archivo .css en el componente para utilizar los estylos

type HeaderProps  ={ //creacion de un props con una llave y valor (props=propiedades) si un componente necesita recibir informacion para funcionar la recibira via props 
    title:string;
};
//funcion componente a exportar en otro/s archivo/s para reutilizar a lo largo de todo el proyecto
export const Header =({title}:HeaderProps) => {
    return (
<div className="header">
 <h1>{title}</h1>  {/* //definir los componentes en etiquetas con corchetes de bichote {y la palabra adentro se llama interpolacion, es para llamar a la componente funcional} */}
</div>);
}

// Como en el código de la cabecera anterior, queremos utilizar el valor de la const `title` como título principal de la app. 
// Para ello, el componente Header debe tomar una prop "title" de tipo string y utilizarla en su código.
// Una vez que haya añadido la prop al componente Header, debería ver un error en el App.tsx. Para resolverlo, utilice la const `title` para dar la prop esperada al componente en el App.tsx.

// // Utilice el CSS dado en el archivo Header.css en su componente Header.