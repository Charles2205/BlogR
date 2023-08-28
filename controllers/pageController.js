const blog = require('../database/models/blogs')
const home = async (req,res)=>{
    const blogs = await blog.findAll()
  const results =blogs.map((v)=>{return v.dataValues})
    res.render('pages/home',{results}) 
    res.render("pages/home")
}

const about =(req,res)=>{
    res.render('pages/about')
}
const getBlog =(req,res)=>{
    res.render('pages/blog')
}
const contact =(req,res)=>{
    res.render('pages/contact')
}
const createBlog=async (req,res)=>{
    const {title,description,author} =req.body
    //to insert data to the db 
    await blog.create({title,description,author})
    res.redirect('/')
}



module.exports ={
    home,
    about,
    getBlog,
    contact,
    createBlog
}