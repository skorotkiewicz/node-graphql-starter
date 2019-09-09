const Post = require('./models/Post');
const User = require('./models/User');

const resolvers = {
    Query: {
        getUsers: ()=> User.find(),
        getPosts: ()=> Post.find(),
        getUser: async (_,{id}) => {
          var result = await User.findById(id);
          return result;
      }
    },
    Mutation: {
        addUser: async (_, { name, email, password }) => {
            const user = new User({name, email, password});
            await user.save();
            return user;
        },
        addPost: async (_, { title, description }) => {
            const post = new Post({title, description});
            await post.save();
            return post;
        },
        deleteUser: async (_, {id}) => {
            await User.findByIdAndRemove(id);
            return "User deleted";
        }
    }
}

module.exports = resolvers;