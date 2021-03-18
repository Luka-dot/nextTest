import React from 'react'
import {useRouter} from 'next/router'

const SelectedClinetProjectPage = () => {
    const router = useRouter()
    console.log(router)

    return (
        <div>
            <h2>Project for specific project (id of: {router.query.id}) for given client id: {router.query.clinetProjectId}</h2>

        </div>
    )
}

export default SelectedClinetProjectPage