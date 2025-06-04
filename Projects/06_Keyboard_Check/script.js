const insert = document.querySelector(".insert");
const button = document.querySelector("button");
window.addEventListener("keydown",(e)=>{
    insert.innerHTML =`
        <table cellspacing="0">
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key=== ' '?"Space":e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
            <tr>

        </table>

    `
})