const API = "https://rickandmortyapi.com/api/character";

const getData = async (id) => {
    const apiURL = id ? `${API}/${id}` : API;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch(err){
        console.err("Fetch error: ", err);
    }
}

export default getData;