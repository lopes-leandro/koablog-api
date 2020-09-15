module.exports = () => {
  return async (ctx, next) => {
    const {user} = ctx.sesstion;
    if(user) {
      await next();
    } else {
      ctx.redirect('/auth');
    }
  }
}