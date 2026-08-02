function createTiles(tileData) {
    const LINK=0, IMG=1
    let tileCount = tileData.length
    for (let i=0; i<tileCount; i++) {
        let tileLink = tileData[i][LINK]
        let tileImage = tileData[i][IMG]

        const tileHtml = `
            <div class="tile">
                <a href="${tileLink}" target="_blank">
                    <img src="./icons/${tileImage}" class="tile-image" height="200px" weight="200px" margin="5px"></img>
                </a>
            </div>
        `

        let tileHtmlNode = document.createElement("div")
        tileHtmlNode.innerHTML = tileHtml

        document.getElementById("tiles-container").append(tileHtmlNode)
    }
}

document.addEventListener('DOMContentLoaded', function() {
  createTiles(tileData)
});
