

function getLists() {
    try {
        let lists = JSON.parse(localStorage.getItem("lists"));
        return lists;    
    } catch (error) {
        let lists = [{name: 'List One'}, {name: 'List Two'}];
        localStorage.setItem("lists", JSON.stringify(lists));
        return lists;
    }
}

function listFactory(name) {
    return {name};
}

function addList(name) {
    let newList = listFactory(name);
    let lists = getLists();
    lists.push(newList);
    localStorage.setItem("lists", JSON.stringify(lists));
}


export {getLists, addList};