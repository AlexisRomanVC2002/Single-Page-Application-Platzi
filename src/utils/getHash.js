const getHash = () => {
    return location.hash.toLocaleLowerCase().split("/")[1] || '/';
}

export default getHash;