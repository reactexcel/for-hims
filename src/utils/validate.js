export default (data) => {
    const error = {}
    for(let el in data){
        if(!data[el]){
            error[el] = 'Required Field'
        }
    }
    return error;
}