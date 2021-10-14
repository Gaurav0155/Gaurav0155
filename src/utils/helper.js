exports.autoGenrateSlug = (data)=>{
    //    slug = data.toString().toLowerCase().replace(" ", "-");
       return data
       .toLowerCase()
       .replace(/ /g,'-')
       .replace(/[^\w-]+/g,'')
       ;
}