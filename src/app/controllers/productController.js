const Product = require('../models/Product');

module.exports = {
    productdetail: async (req, res, next) => {
        try {
            const user = req.user ? req.user.toJSON() : null;
            const success = req.flash('success') ?? null;
            const error = req.flash('error') ?? null;
            const cart = req.session.cart;
            const product = await Product.findOne({ slug: req.params.slug }).lean();

            if (!product) {
                throw new Error('Product not found');
            }

            return res.render('customer/detail', {
                success,
                error,
                product,
                user,
                cart
            });
        } catch (error) {
            req.flash('error', error.message);
            return res.redirect('/');
        }
    }
};
