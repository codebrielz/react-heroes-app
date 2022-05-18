# useForm

Ejemplo:

```
    Tenemos que crear en nuestro componente el objeto con la informacion que queremos que tenga nuestro useForm
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    Importamos en nuestro componente nuestro arreglo del useForm
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

```