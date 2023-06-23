import { BASE_URL } from "../constants/constants";
async function deleteResource(endpoint='', id)
{
    console.log(BASE_URL+endpoint+id);
    return (await fetch(BASE_URL+endpoint+id, { method: 'DELETE' }))
}

export default deleteResource;