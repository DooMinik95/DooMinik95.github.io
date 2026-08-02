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
  const textarea = document.getElementById('myText');
  const saveBtn = document.getElementById('saveBtn');
  const displayArea = document.getElementById('displayArea');

  // 1. LOAD: Read from localStorage when the page loads
  const savedText = localStorage.getItem('myNote');
  if (savedText !== null) {
    textarea.value = savedText;        // Populate the textarea
    displayArea.textContent = savedText; // Show it safely (using textContent!)
  }

  // 2. SAVE: Only save when the user clicks the button
  saveBtn.addEventListener('click', function() {
    const currentText = textarea.value;
    localStorage.setItem('myNote', currentText);
    displayArea.textContent = currentText; // Update the preview safely
    // Optional: give user feedback
    saveBtn.textContent = 'Saved!';
    setTimeout(() => { saveBtn.textContent = 'Save to LocalStorage'; }, 1500);
  });

  createTiles(tileData)
});
