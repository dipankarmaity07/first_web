module.exports = {
  notes: async (parent, args, { models,user }) => {
    if(parent.id!=user.id){
      throw new Error("dont get permission to access data authentication")
    }
    return await models.Note.find({ id: user.id }).sort({ id: -1 });
  }
};
