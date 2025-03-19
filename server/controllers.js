const db = require('./db.js')

const addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // SQL query to insert a new school
    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

    // Execute the query
    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(201).json({ message: "School added successfully", id: result.insertId });
    });
}

const listSchools = async(req, res) => {
    const { latitude, longitude } = req.query;

    // Validate input fields
    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Latitude and Longitude are required" });
    }

    // SQL query to fetch all schools and calculate distance
    const query = `
        SELECT *, 
            ( 6371 * ACOS( 
                COS(RADIANS(?)) * COS(RADIANS(latitude)) * 
                COS(RADIANS(longitude) - RADIANS(?)) + 
                SIN(RADIANS(?)) * SIN(RADIANS(latitude))
            )) AS distance 
        FROM schools
        ORDER BY distance ASC
    `;

    // Execute the query
    db.query(query, [latitude, longitude, latitude], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(200).json(result); // Return the sorted list of schools
    });
};

module.exports = { addSchool, listSchools }