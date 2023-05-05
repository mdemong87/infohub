


function urlfinder(databaseName, value, seturl) {

    //return data url 
    const data = databaseName.filter((current) => {
        return current.id === value
    });
    //update other state
    return seturl(data[0].url);
}

export default urlfinder;