
exports.Query = {
  numOfCourses: () => 5,
  price: () => 1465.51,
  isTrainer: () => true,
  courses: () => context.courses,
  course: (parent, args, context) =>
    context.courses.find((item) => item.id === args.id),
};
