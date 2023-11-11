
exports.Course = {
  genre: (parent, args, context) => context.genres.find(item => item.id === parent.genreId),

  reviews: (parent, args, context) => context.reviews.filter(item => item.courseId === parent.id),
};
