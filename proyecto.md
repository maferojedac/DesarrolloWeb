
const useTareas = () => {
    let [tareas, setTareas] = useState([]);

        const anadirTarea = (tarea) = {
            setTareas([...tareas, tarea]);
        };
        const quitarTarea = (indice) => {
            const nuevasTareas = [...tareas];
            nuevasTareas.splice(indice, 1);
            setTareas(nuevasTareas);
        }

        return {
            tareas,anadirTarea,quitarTarea
        };
};