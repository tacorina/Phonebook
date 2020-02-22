const list = [];
const name = document.querySelector("[name='nume']");
const phone = document.querySelector("[name='telefon']");
let index;

function draw() {
    let str = "";
    for (let i = 0; i < list.length; i++) {
        if (list.length > 0) {
            document.querySelector('table').classList.remove('hidden');
            str += `
            <tr>
                <td class="name">${list[i].nume}</td>
                <td class="phone">${list[i].telefon}</td>
                <td>
                    <button onclick="edit(${i})">Editeaza</button>
                    <button onclick="del(${i})">Sterge</button>
                </td>
            </tr>
        `
        }
    }

    document.querySelector('table tbody').innerHTML = str;
    index = undefined;
}

function add(event) {
    event.preventDefault();

    let newRow = {
        nume: name.value,
        telefon: phone.value    
    }

    if (index === undefined) {
        list.push(newRow);
    } else {
        list[index] = newRow;
    }

    name.value = '';
    phone.value = '';

    draw();
}

function edit(idx) {
    name.value = list[idx].nume;
    phone.value = list[idx].telefon;
    index = idx;
}

function del(idx) {
    if (confirm (`Sigur vrei sa stergi pe ${list[idx].nume} din lista de contacte?`)) {
        list.splice(idx,1);
        draw();
    }
}
