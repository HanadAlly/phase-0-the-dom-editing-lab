document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");

    // Add title
    const title = document.createElement("h1");
    title.textContent = "My HTML adventure";
    body.appendChild(title);

    // Add paragraph
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `We're writing 
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> markup to 
        display in our <strong>browser</strong>. We're basically telling computers what to do. 
        <em>Neat!</em>`;
    body.appendChild(paragraph);

    // Add table
    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Element name</th>
                <th>Display value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>h1</td>
                <td>block</td>
            </tr>
            <tr>
                <td>p</td>
                <td>block</td>
            </tr>
            <tr>
                <td>strong</td>
                <td>inline</td>
            </tr>
            <tr>
                <td>em</td>
                <td>inline</td>
            </tr>
        </tbody>
    `;
    body.appendChild(table);
});
