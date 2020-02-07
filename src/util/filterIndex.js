module.exports = function filterIndex(index, array, filter) {
    return array.findIndex(value => value[filter] == index);



}
