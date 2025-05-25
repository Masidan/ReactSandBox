import { useState } from 'react';
import data from './data'

const AllTasks = () => {

    const [myTasks,setMyTasks] = useState(data); //-useState prizadi pres setter nove filtrovane pole do promennemyTasks a hlavne provede refresh componenty

    const deleteTaskHandler = (id) => {
        const filteredData = myTasks.filter((item) => {
            return item.id !== id
        });
        setMyTasks(filteredData)
    }

    const deleteAllTasksHandler = () => {
        setMyTasks([]) //-vycisti vsechny ulozene tasky
    }
    
    return (
        <div className=" border border-1 bg-light p-3 m-2">
            <h5 className="text-center">Component: All tasks</h5>
            <ul className="list-group list-group-flush">

            
                {
                    myTasks.map( (task) => {

                        const {id, name} = task

                        return (
                            <div key={id} className="d-flex align-items-center gap-2">   
                                <li className="list-group-item w-100">{id}. {name}</li>
                                <button className="btn btn-danger btn-sm ms-auto" onClick={ () => deleteTaskHandler(id)}>vymazat</button>
                            </div>
                        )
                    })
                }
        
            </ul>
            <button className="btn btn-danger btn-sm mt-2 text-right" onClick={ () => deleteAllTasksHandler()}>Vymazat VŠE</button>
        </div>
    )
        
}


export default AllTasks