document.addEventListener('DOMContentLoaded',()=>{
    console.log('DOM Content Loaded')
    submitSearch()
})

// type in a name of a tv show and see a list of results (submit event)
function submitSearch(){
    const search = document.getElementById('search')
    search.addEventListener('submit', (e)=>{
        e.preventDefault()
        fetchResults(search.show.value)
    })
}

function fetchResults(showTitle){
    fetch(`https://api.tvmaze.com/search/shows?q=${showTitle}`)
    .then(resp => resp.json())
    .then(resp => resp.forEach(buildResults))
}

function buildResults(object){
    const results = document.getElementById('results')
    let showName = document.createElement('p')
    showName.innerText = object.show.name
    showName.id = object.show.id
    results.append(showName)
}