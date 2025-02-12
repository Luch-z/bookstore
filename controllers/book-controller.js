const Book = require("../models/book");

const getAllBooks = async (req, res) => {
    const allBooks = await Book.find({});
    try {
        if (allBooks?.length > 0) {
            res.status(200).json({
                success: true,
                message: "List of books fetched successfully",
                data: allBooks,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No books found in collection",
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wong! Please try again",
        });
    }
};

const getSingleBook = async (req, res) => {
    try {
        const currentBookID = req.params.id;
        const singleBook = await Book.findById(currentBookID);

        if (singleBook) {
            res.status(200).json({
                success: true,
                data: singleBook,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No book found in collection",
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wong! Please try again",
        });
    }
};

const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if (newBookFormData) {
            res.status(201).json({
                success: true,
                message: "Book added successfully",
                data: newlyCreatedBook,
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wong! Please try again",
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const updateFormBook = req.body;
        const currentBookID = req.params.id;
        const updatecurrentBook = await Book.findByIdAndUpdate(
            currentBookID,
            updateFormBook,
            {
                new: true,
            }
        );
        if (updatecurrentBook) {
            res.status(200).json({
                success: true,
                message: "Book update successfully",
                data: updatecurrentBook,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wong! Please try again",
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const currentBookID = req.params.id;
        const deleteCurrentBook = await Book.findByIdAndDelete(currentBookID);
        if (deleteCurrentBook) {
            res.status(200).json({
                success: true,
                message: "Book delete successfully",
                data: deleteCurrentBook,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wong! Please try again",
        });
    }
};

module.exports = {
    getAllBooks,
    getSingleBook,
    addNewBook,
    updateBook,
    deleteBook,
};
