const home = (req,res)=>{
    res.render("pages/home")
}

const about =(req,res)=>{
    res.render('pages/about')
}
const getBlog =(req,res)=>{
    res.render('pages/blog')
}
const testimony =(req,res)=>{
    res.render('pages/testimony')
}




module.exports ={
    home,
    about,
    getBlog
}