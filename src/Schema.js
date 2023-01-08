const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true
    },
    user_id: mongoose.Types.ObjectId,
    picture:String,

  });


const userDetailsSchema = new mongoose.Schema({
    gender: String,
    birthDate: Date,
    email: String,
    bio: String,
    startDate: Date,
    job: String,
    education: String,
    posts: [mongoose.Types.ObjectId],
    reads: [mongoose.Types.ObjectId]

  });


const postSchema = new mongoose.Schema({
    post_id: mongoose.Types.ObjectId,
    thumbnail: String,
    title: String

  });


const postDetailsSchema = new mongoose.Schema({
    author_id: mongoose.Types.ObjectId,
    content: String,
    label: String,
    uploadDate: Date,
    lastUpdate: Date,
    likes: Date,
    comments: [mongoose.Types.ObjectId]

  });


const commentsSchema = new mongoose.Schema({
    comment: String,
    commenter_id: mongoose.Types.ObjectId,
    replies: [mongoose.Types.ObjectId]

  });


module.exports = {usersSchema, userDetailsSchema, postSchema, postDetailsSchema, commentsSchema}