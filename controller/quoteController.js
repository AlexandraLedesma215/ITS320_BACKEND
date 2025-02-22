import Quote from '../models/quoteModel.js';

async function getQuotes(req, res) {
    try {
        const quotes = await Quote.find();

        if (quotes.length > 0) {
            return res.status(200).json(quotes);
        } else {
            return res.status(404).json({ message: "No quotes yet." });
        }
    } catch (error) {
        console.error("Error getting quotes", error);
        return res.status(500).json({
            message: "Something went wrong while getting quotes"
        });
    }
}

async function createQuote(req, res) {
   
    const newQuote = new Quote(req.body);

    try {
        const savedQuote = await newQuote.save();
        return res.status(201).json(savedQuote);
    } catch (error) {
        console.error("Error creating quote", error);
        return res.status(500).json({
            message: "Something went wrong while creating quote"
        });
    }
}

export { getQuotes, createQuote };
