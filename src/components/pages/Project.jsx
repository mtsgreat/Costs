import style from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 

function Project(){

    // pega id da URL
    const { id } = useParams()

    const [project, setProject] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((erro) => console.log(erro))


    }, [id])
    

    return (
        <p>{project.name}</p>
    )
}

export default Project