const verifyRoles = (...allowedRoles) => {
	return (req, res, next) => {
		if(!req?.roles) return res.sendStatus