import { useRouter } from 'next/router'

function projectIdPage () {
    const router = useRouter()

    console.log(router)

    return (
        <div>
            <h2>Portfolio Page for project {router.query.id}</h2>
        </div>
    )
}

export default projectIdPage