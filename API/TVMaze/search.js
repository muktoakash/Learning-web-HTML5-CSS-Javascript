// TVMaze/search.html
// Async/await functionalities to interact with the TVMaze API

// Select form elements
const btn = document.getElementById("buttonSearch");
const input = document.getElementById("inputSearch");

// Event handler for button
btn.addEventListener('click', async () => {
    try {
        const searchTerm = input.value;

        data = await getMoviesData(searchTerm);
        displayUpdate(data);
    }
    catch (e) {
        console.log(e);
    }


})

// async function to handle API
async function getMoviesData(searchTerm) {
    try {
        resp = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        return resp.data;
    }
    catch (e) {
        console.log('Trouble getting Movies')
        return null;
    }


}

// display modifier function
displayUpdate = (data) => {

}
