module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view_dashboard');
    },
    viewCategory: (req, res) => {
        res.render('admin/category/view_category');
    }
}