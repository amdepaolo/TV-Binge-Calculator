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
    .then(resp => {
        document.getElementById('results').innerText = ''
        resp.forEach(buildResults)})
}

function buildResults(object){
    const results = document.getElementById('results')
    let showName = document.createElement('p')
    showName.innerText = object.show.name
    showName.id = object.show.id
    showName.addEventListener('click', ()=>fetchShow(showName.id))
    results.append(showName)
}

// from those results I should be able to select a show and get the number of episodes and seasons of that show and average runtime (click event)
function fetchShow(showID){
    fetch(`https://api.tvmaze.com/shows/${showID}?embed[]=episodes&embed[]=seasons`)
    .then(resp => resp.json())
    .then(buildShowInfo)
}

function buildShowInfo(showObject){
    document.getElementById('show-info').innerText = ''
    let showName = document.createElement('h2')
    let showImg = document.createElement('img')
    let description = document.createElement('p')
    description.innerHTML = showObject.summary
    showName.innerText = showObject.name
    showImg.src = showObject.image.medium
    const stats = showStats(showObject)
    document.getElementById('show-info').append(showName, showImg, description, buildShowNumbers(stats), divideWatch(stats))
    
}

function showStats(showObject){
    let showNums = {}
    showNums.numEps = showObject._embedded.episodes.length
    showNums.numSeas = showObject._embedded.seasons.length
    showNums.runtime = showObject.runtime;
    console.log(showNums)
    return showNums
}

function buildShowNumbers(showNums){
    let statDiv = document.createElement('div')
    let totalWatchTime = (showNums.numEps * showNums.runtime)/60
    let eps = document.createElement('p')
    let time = document.createElement('p')
    eps.innerText = `This show has ${showNums.numEps} episodes over ${showNums.numSeas} seasons`
    time.innerText = `Watching the show will take about ${totalWatchTime} hours`
    statDiv.append(eps, time)
    return statDiv
}

// I should be able to choose how many episodes a night I want to watch and get a number of sittings to complete (click event)

function divideWatch(showNums){
    let dayDiv = document.createElement('div')
    let numberSelect = document.createElement('input')
    numberSelect.type = 'number'
    numberSelect.id = 'number'
    numberSelect.value = 1
    dayDiv.innerText = 'How many episodes per day do you want to watch?'
    dayDiv.append(numberSelect)
    let results = document.createElement('p')
    results.innerText = `If you watch at pace of ${numberSelect.value} per day you'll finish the show in ${(showNums.numEps / numberSelect.value)} days`
    dayDiv.append(results)
    numberSelect.addEventListener('input', ()=>{
        if (numberSelect.value * showNums.runtime > 24 * 60){
            results.innerText = "You can't watch that many episodes in one day"
        }
        else {results.innerText = `If you watch at pace of ${numberSelect.value} per day you'll finish the show in ${math.ceil(showNums.numEps / numberSelect.value)} days`}
    })
    return dayDiv
}