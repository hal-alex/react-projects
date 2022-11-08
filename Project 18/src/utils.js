const paginate = (followers) => {
    console.log("utils", followers)
    const itemsPerPage = 10
    const pages = Math.ceil(followers.length / itemsPerPage)
    console.log("pages", pages)

    const newFollowers = Array.from({ length: pages }, (_, index) => {
        const start = index * itemsPerPage
        console.log(start)
        return followers.slice(start, start + itemsPerPage)
    })
    console.log(newFollowers)
    return newFollowers
}

export default paginate
