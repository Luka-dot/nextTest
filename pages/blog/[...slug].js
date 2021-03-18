import React from 'react'
import { useRouter } from 'next/router'

const BlogPostsPage = () => {
    const router = useRouter()

    console.log(router)
    return (
        <div>
            <h2> Blog Posts</h2>
        </div>
    )
}

export default BlogPostsPage
