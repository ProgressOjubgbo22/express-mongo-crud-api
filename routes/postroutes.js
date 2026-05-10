const express =require('express')
const router = express.Router();

const Post = require('../models/post')

//create post
router.post("/", async(req, res) => {
    try{
        const newPost = await Post.create(req.body);
        res.send(newPost);
    } catch (error){
        res.send(error.message);
    }
});

//get posts
router.get("/", async(req, res) => {
    try{
        const posts = await Post.find();
        res.send(posts);
    } catch(error) {
        res.send(error.message);
    }
});

//get post
router.get("/:id", async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return res.send("no product");
        res.send(post)
    } catch(error) {
        res.send(error.message);
    }
});

//update post
router.put("/:id", async(req, res) => {
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true}
    )
        if(!updatedPost) return res.send("no product");
        res.send(updatedPost)
    } catch (error){
        console.log(error.message);
        
    }
})

//delete post
router.delete("/:id", async(req, res) => {
   try{
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if(!deleted) return res.send("no product");
    res.send("post deleted") 
   }
    catch (error) {
    res.send(error.message)
}

})
module.exports = router;
