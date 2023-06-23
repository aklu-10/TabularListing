import { BASE_URL } from "../constants/constants";
async function deleteResource(endpoint='', id)
{
    try{
        return (await fetch(BASE_URL+endpoint+id, { method: 'DELETE' }));
    }catch(err){
        throw new Error(err);
    }

}

export default deleteResource;