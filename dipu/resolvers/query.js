module.exports = {
  notes: async (parent, args, { models ,user}) => {
    if(args.id!=user.id){
      throw new Error("dont get permission to access data authentication")
    }
    return await models.Note.find({id:args.id}).limit(10);
    // return await models.Note.find({id:{$lt:6}}).sort({id:1}).limit(10);
  },
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  },
  user: async (parent, args, { models }) => {
    return await models.User.findOne({ username: args.username });
  },
  users: async (parent, args, { models }) => {
    return await models.User.find({});
  },
  me: async (parent, args, { models, user }) => {
    return await models.User.findById(user.id);
  }
};
