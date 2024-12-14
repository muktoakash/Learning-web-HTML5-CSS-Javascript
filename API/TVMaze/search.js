// TVMaze/search.html
// Async/await functionalities to interact with the TVMaze API

// Select form elements
const btn = document.getElementById("buttonSearch");
const input = document.getElementById("inputSearch");
const listMovies = document.getElementById("imageList");
const clearButton = document.getElementById("clear")

// Event handler for search button
btn.addEventListener('click', async () => {
    try {
        const searchTerm = input.value;
        clearDisplay();

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
        const config = { params: { q: searchTerm } };
        resp = await axios.get(`https://api.tvmaze.com/search/shows`, config)
        return resp.data;
    }
    catch (e) {
        console.log('Trouble getting Movies')
        return null;
    }


}

// display modifier function
displayUpdate = (data) => {
    for (title of data) {
        var listItem = document.createElement('LI');
        var imageItem = document.createElement('IMG');
        if (title.show.image) {
            imageItem.src = title.show.image.medium;
            listItem.append(imageItem);
            listMovies.append(listItem);
        }
    }
}

// Reset display
clearDisplay = () => {
    input.value = "";
    listMovies.innerHTML = "<ul></ul>"
}

// Add event handler for clear button
clearButton.addEventListener('click', clearDisplay)
