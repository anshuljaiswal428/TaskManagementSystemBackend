const express = require("express");
const router = express.Router();

// Import middleware and controller functions
const { protect, adminOnly } = require("../middlewares/authMiddleware");

const {
    exportTasksReport,
    exportUsersReport,
} = require("../controllers/reportController");

// Route to export all tasks (Excel/PDF)
router.get("/export/tasks", protect, adminOnly, exportTasksReport);

// Route to export user-task report
router.get("/export/users", protect, adminOnly, exportUsersReport);

module.exports = router;
