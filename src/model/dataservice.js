
const listQA = require('./qa.json');

const getFirstQA = () => {
    if ((listQA || []).length === 0)    return  undefined;
    return listQA[0];
}

const lvl0Id = getFirstQA().id;

const getQA = (id) => {
    for (var element of listQA) {
        if (element.id === id) {
            return element;
        }
    }
}

const isFirstQA = (qa) => {
    return qa.id === lvl0Id;
}

const isLastQA = (qa) => {
    console.log((qa || {}).type !== 'question');
    return (qa || {}).type !== 'question';
}

const isLastId = (id) => {
    const qa = getQA(id);
    console.log(qa);
    return isLastQA(qa);
}

const DataService = {
    getFirstQA: getFirstQA,
    getQA: getQA,
    isFirstQA: isFirstQA,
    isLastId: isLastId
};

export default DataService;
