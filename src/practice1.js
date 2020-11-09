const parseData = ({ data, column }) => {
    let person = [];
    data.map(item => {
        let describle = {};
        item.forEach((infor,index) => {
            describle[column[index].name] = item[index];
        });
        person.push(describle);
    })
    return person;
}
export { parseData };