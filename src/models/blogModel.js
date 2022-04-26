const { default: mongoose } = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema(
{
        title: {
            type: String,
            required: true,
        }, 
        body: {
            type: String,
            required: true,
        }, 
        authorId: {
            type:ObjectId,
            ref:author,
            required: true,
            }, 
        tags: {
            type: [{type: String}],
        }, 
        category: {
            type:String, 
            required: true, 
        }, 
        subcategory: [{
            type: String
        }], 
        deletedAt: {
            type: Date,
            default: null,
        },
        isDeleted: {
            default:false,
            type:boolean,
        },
        publishedAt: {
            type: Date,
            default: null,
        }, 
        isPublished: {
            default:false,
            type:boolean,
        }
} ,{timestamps:true})

module.exports.blogSchema = mongoose.module("blog", blogSchema)
