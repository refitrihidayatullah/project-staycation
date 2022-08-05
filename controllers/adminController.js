const Category = require('../models/Category')
module.exports = {
    viewDashboard: (req, res) => {
        const title = "Staycation | Dashboard";
        res.render('admin/dashboard/view_dashboard', { title });
    },
    viewCategory: async(req, res) => {
        try {
            const title = "Staycation | category";
            const category = await Category.find();
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            // console.log(category);
            res.render('admin/category/view_category', { category, alert, title });
        } catch (err) {
            res.redirect('/admin/category');
        }

    },
    addCategory: async(req, res) => {
        try {
            const { name } = req.body;
            // console.log(name);
            await Category.create({ name });
            req.flash('alertMessage', 'Success Add Category');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/category');
        } catch (err) {
            req.flash('alertMessage', '$err.message');
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category');
        }

    },
    editCategory: async(req, res) => {
        try {
            const { id, name } = req.body;
            const category = await Category.findOne({ _id: id });
            // console.log(id);
            // console.log(category);
            category.name = name;
            await category.save();
            req.flash('alertMessage', 'Success Update Category');
            req.flash('alertStatus', 'success');
            res.redirect("/admin/category");
        } catch (err) {
            req.flash('alertMessage', '$err.message');
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category');
        }
    },
    deleteCategory: async(req, res) => {
        try {
            const { id } = req.params;
            const category = await Category.findOne({ _id: id });
            await category.remove();
            req.flash('alertMessage', 'Success Delete Category');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/category');

        } catch (err) {
            req.flash('alertMessage', '$err.message');
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category');
        }
    },
    viewBank: (req, res) => {
        const title = "Staycation | Bank";
        res.render('admin/bank/view_bank', { title });
    },
    viewItem: (req, res) => {
        const title = "Staycation | Item";
        res.render('admin/item/view_item', { title });
    },
    viewBooking: (req, res) => {
        const title = "Staycation | Booking";
        res.render('admin/booking/view_booking', { title });
    }
}