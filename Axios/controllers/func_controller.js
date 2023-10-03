const user_model = require('../models/user_model')
const comment_model = require('../models/comment_model')
const utils = require('../utils/utils');
const axios = require('axios');

exports.get_comments = async (req, res) => {
    let response = await utils.sendRequest("comments")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }

    response.data.comments.forEach(async (val) => {
        console.log(val)
        let commentId = val.id
        let body = val.body
        let postId = val.postId
        let user = val.user
        console.log(commentId)
        let data = await comment_model.find({ commentId: commentId })
        console.log("hi", data)
        if (data.length === 0) {
            await comment_model.create({
                commentId: commentId,
                body: body,
                postId: postId,
                user: user
            })
        }
    })

    res.send("Comment data inserted successfully")

}
exports.get_user_details = async (req, res) => {
    let response = await utils.sendRequest("comments")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    response.data.comments.forEach(async (val) => {
        console.log(val.user)
        let userId = val.user.id
        let username = val.user.username
        let data = await user_model.find({ 'user.userId': userId })
        if (data.length === 0) {
            await user_model.create({ user: { userId: userId, username: username } })
        }
    })

    res.send("User data inserted successfully")
}

