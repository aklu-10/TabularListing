const getResource = async (url) =>
{
    console.log(url)
    return (await fetch(url)).json()
}

export default getResource;