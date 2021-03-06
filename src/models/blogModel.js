const { default: mongoose } = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

//*----------BLOG MODEL--------------

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
            ref:"author",
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
            type:Boolean,
        },
        publishedAt: {
            type: Date,
            default: null,
        }, 
        isPublished: {
            default:false,
            type:Boolean,
        }
} ,{timestamps:true})

module.exports = mongoose.model("blog", blogSchema)


