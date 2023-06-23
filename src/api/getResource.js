const getResource = async (url) =>
{
    try{
        return (await fetch(url)).json();
    }catch(err){
        throw new Error(err);
    }
}

export default getResource;