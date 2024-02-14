import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [
        {
            user: String,
            content: String,
            votes: Number,
        },
    ],
});

// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

export const Post = model("Post", postSchema);
