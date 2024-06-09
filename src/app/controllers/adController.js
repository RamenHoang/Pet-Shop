const Product = require('../models/Product');
const Category = require('../models/Category')
const Order = require('../models/Order')


class adController {
    //Product function
    storedProduct(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;
        Product.find({})
            .lean()
            .then((products) => res.render('ad/stored-products', { products, user, cart, success, error}))
            .catch(next);
    }

    createproduct(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;
        Category.find({})
            .lean()
            .then((categories) => res.render('ad/create', { categories, user, cart, success, error}))
            .catch(next);
    }

    async storeproduct(req, res, next) {
        const product = await Product.create(req.body);
        res.redirect('/');
    }

    editproduct(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;
        Product.findById(req.params.id)
            .lean()
            .then((product) => {
                Category.find({})
                .lean()
                .then((categories) => {
                    res.render('ad/edit-product', { product, categories, user, cart, success, error});
                })
                .catch(next);
            })
            .catch(next);
    }

    updateproduct(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/ad/stored-products'))
            .catch(next);
    }

    destroyproduct(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //Category function
    createcategory(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;
        res.render('ad/create-category', { user, cart, success, error});
    }

    storecategory(req, res, next) {
        const category = new Category(req.body);
        category
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    storedcategory(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;
        Category.find({})
            .lean()
            .then((categories) => res.render('ad/stored-category', { user, cart, categories, success, error}))
            .catch(next);
    }

    editcategory(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;
        Category.findById(req.params.id)
            .lean()
            .then((category) => {
                res.render('ad/edit-category', { category, user, cart, success, error});
            })
            .catch(next);
    }

    updatecategory(req, res, next) {
        Category.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/ad/stored-category'))
            .catch(next);
    }

    destroycategory(req, res, next) {
        Category.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    orders(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;

        Order.find({})
            .sort({ createdAt: -1 })
            .lean()
            .then((orders) => res.render('ad/stored-orders', { orders, user, cart, success, error }))
            .catch(next);
    }

    orderDetail(req, res, next) {
        const user = req.user ? req.user.toJSON() : null;
        const cart = req.session.cart;
        const success = req.flash('success') ?? null;
        const error = req.flash('error') ?? null;

        Order.findById(req.params.id)
            .lean()
            .then((order) => res.render('ad/stored-order-detail', { order, user, cart, success, error }))
            .catch(next);
    }

    updateOrderDetail(req, res, next) {
        Order.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }

    deleteOrder(req, res, next) {
        Order.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new adController();
