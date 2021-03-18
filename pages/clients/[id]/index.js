import React from 'react'
import { useRouter } from 'next/router'

const ClientProjectPage = () => {
    const router = useRouter()

    function loadProjectHandler() {
        console.log(router.query)

    //    router.push('/clients/max/projecta')
        router.push({
            pathname: '/clients/[id]/[clinetProjectId]',
            query: {id: router.query.id, clinetProjectId: 'projecta'}
        })
    }

    return (
        <div>
            <h2>The Project of given client</h2>
            <button onClick={loadProjectHandler} >Load project A</button>
        </div>
    )
}

export default ClientProjectPage
