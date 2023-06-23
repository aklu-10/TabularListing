const getResource = async (url) =>
{
    return (await fetch(url)).json()
}

export default getResource;