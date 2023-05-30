const getData = async () => {
    try {
        const response = await fetch(`http://localhost:8000/todos`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err);
    }

}
export default getData;