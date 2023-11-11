
exports.Genre = {
  courses: (parent, args, context) => context.courses.filter(item => item.genreId === parent.id),
};
