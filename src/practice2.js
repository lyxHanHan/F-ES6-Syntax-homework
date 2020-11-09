const inject = (item,section) => {
    let length=item.length;

    section.map(element => {
        let section=element.content;
        let index = element.index;
        if(index > length){
            item.splice(index+1,0,section)
        }else{
            item.splice(index,0,section)
        }
        length=index;
    })

    return item
}
export { inject };


// array.splice(index,howmany,item1,.....,itemX)