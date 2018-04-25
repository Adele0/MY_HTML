var id = 1;

function submodule() {
    console.log('导出对象的ID是',id);
}

module.exports = submodule;