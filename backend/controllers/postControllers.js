const postSchema = require('../schema/postSchema')



/*Create a post*/
exports.createPosts=async(req,res)=>{

    const {description} = req.body
    const {firstName,lastName,_id} = req.user

    try{

        if(!description){
            res.status(401).send({
                createPostStatus:false,
                message:'Description of the posts cannot be empty!'
                
            })

            return new Error('Description field is empty!')
        }


        await postSchema.create({
            createdBy:_id,
            firstName,
            lastName,
            description,
            likes:{}
        })

        res.status(200).send({
            createPostStatus:true,
            message:'Post created successfully!'
            
        })


    }catch(error){

        res.status(500).send({
            createPostStatus:false,
            message:`Unable to create post due to ${error}`
        })

        return new Error(`Unable to create post due to ${error}`)
    }
}



/* Get All Posts */
exports.getPosts = async(req,res)=>{

   try{

    const posts = await postSchema.find()
    res.status(200).send({
        getPostStatus:true,
        message:'Received posts successfully!',
        posts,
     })

   }catch(error){
      res.status(500).send({
        getPostStatus:false,
        message:'Failed to receive posts!',
        posts:[],

      })

      return new Error('Failed to receive posts!')
   }

}


/*Get User's post if Authorised */
exports.getUserPosts = async(req,res)=>{

    try{

        const posts = await postSchema.find({createdBy:req.user._id})
        res.status(200).send({
            getUserPostStatus:true,
            message:"Received user's post successfully!",
            posts,
         })
    
       }catch(error){
          res.status(500).send({
            getUserPostStatus:false,
            message:"Failed to receive user's posts!",
            posts:[],
    
          })
    
          return new Error("Failed to receive user's posts!")
       }
    

}



/* Post your comment */
exports.createComment = async(req,res) =>{

    const postId = req.params.id;

    if(!req.body.comment){

        res.status(401).send({
            commentStatus:false,
            message:"Comment Field is empty!"
        })

        return new Error("Comment Field is empty!")

    }


    try{
        const post = await postSchema.findById(postId)

        if(!post){

            res.status(401).send({
                commentStatus:false,
                message:"Post not found!"
            })

            return new Error("Post not found!")

        }

        post.comments.push(req.body.comment)

        post.save({
          
            new:true
        })

        res.status(200).send({
            commentStatus:true,
            message:"Commented successfully!"
        })

    }catch(error){
      
        res.status(500).send({
            commentStatus:false,
            message:`Commenting failed due to ${error}`
        })

        return new Error(`Commenting failed due to ${error}`)

    }

}


/*Like a post if Authorised*/
exports.doLike = async(req,res)=>{

    try{

        const post = await postSchema.findById(req.params.id)
        if(!post){

            res.status(401).send({
                likeStatus:false,
                message:"Post not found!"
            })

            return new Error("Post not found!")

        }

        console.log('....',post,typeof(post.likes))

        const isliked = post.likes.get(req.user._id)

        if(!isliked)
        post.likes.set(req.user._id,true);
        else
        post.likes.delete(req.user._id);

        const updatePost = await postSchema.findByIdAndUpdate(req.params.id,{
            likes:post.likes
        },{new:true})

        res.status(200).send({
            likeStatus:true,
            message:"Liked the post!"
        })


    }catch(error){

        res.status(500).send({
            likeStatus:false,
            message:`Unable to like the post due to ${error}`
        })

        return new Error(`Unable to like the post due to ${error}`)
    }
}


