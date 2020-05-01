const mongoose = require("mongoose"),
    courseSchema = mongoose.Schema({
        name: String,
        code: String,
        mission: String,
        ects: Number,
        examination: String,
        objectives:  String,
        contents: String,
        prerequisites:String,
        literature: String,
        methods: String,
        skills_knowledge_understanding: String,
        skills_intellectual: String,
        skills_practical: String,
        skills_general: String
    });
module.exports = mongoose.model("Course", courseSchema);