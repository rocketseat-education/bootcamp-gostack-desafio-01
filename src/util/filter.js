module.exports = function filter(array, field, value) {
     return array.filter(v => v[field] == value)
}
