const blogs = require('./blog.model')
module.exports = {
    Query: {
        blogs: () => {

            return blogs.getBlogs()
        },
        blogByDate: (parent,args) => {
            console.log(args);
            return blogs.blogByDate(args.date);
        }
    }
}