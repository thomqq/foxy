module.exports = function isAdmin (req, res, next) {

  // `req.session` contains a set of data specific to the user making this request.
  // It's kind of like our app's "memory" of the current user.

  if(!req.session.authenticated) {
    return res.forbidden('User not logged');
  }

  if ( req.session.user.role !== 'admin' ) {
    return res.forbidden('User no admin');
  }

  // Finally, if the user has a clean record, we'll call the `next()` function
  // to let them through to the next policy or our controller
  next();
};