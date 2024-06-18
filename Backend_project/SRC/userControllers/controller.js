


// const { PrismaClient } = require('@prisma/client');
// const { validationResult, matchedData } = require('express-validator');
// const prisma = new PrismaClient();

// // Function to get all data
// const getAllData = async (req, res) => {
//     try {
//         const data = await prisma.user.findMany(); 
//         res.json(data);
//     } catch (err) {
//         console.error('Error reading data:', err);
//         res.status(500).send('Error reading data');
//     }
// };

// // Function to get data by ID
// const getDataById = async (req, res) => {
//     try {
//         const myData = await prisma.user.findUnique({
//             where: { id: parseInt(req.params.id) },
//         });
//         if (myData) {
//             res.cookie('data', JSON.stringify(myData), { httpOnly: true });
//             res.status(200).json(myData);
//         } else {
//             res.status(404).send('Data not found');
//         }
//     } catch (err) {
//         console.error('Error reading data:', err);
//         res.status(500).send('Error reading data');
//     }
// };

// // Function to create new data
// const createData = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const {username, displayName} = matchedData(req)
//         const newData = await prisma.user.create({
    
//             data: {
//                 username,
//                 displayName
//             },
//         });
//         res.status(201).json(newData);
//     } catch (err) {
//         console.error('Error writing data:', err);
//         res.status(500).send('Error writing data');
//     }
// };

// // Function to update data
// const updateData = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const myData = await prisma.user.update({
//             where: { id: parseInt(req.params.id) },
//             data: {
//                 username: req.body.username,
//                 displayName: req.body.displayName,
//             },
//         });
//         res.json(myData);
//     } catch (err) {
//         console.error('Error updating data:', err);
//         res.status(500).send('Error updating data');
//     }
// };

// // Function to delete data
// const deleteData = async (req, res) => {
//     try {
//         await prisma.user.delete({
//             where: { id: parseInt(req.params.id) },
//         });
//         res.status(204).send();
//     } catch (err) {
//         console.error('Error deleting data:', err);
//         res.status(500).send('Error deleting data');
//     }
// };

// module.exports = {
//     getAllData,
//     getDataById,
//     createData,
//     updateData,
//     deleteData
// };


const { PrismaClient } = require('@prisma/client');
const { validationResult, matchedData } = require('express-validator');
const prisma = new PrismaClient();

// Function to get all data
const getAllData = async (req, res) => {
    try {
        const data = await prisma.user.findMany();
        res.json(data);
    } catch (err) {
        console.error('Error reading data:', err);
        res.status(500).send('Error reading data');
    }
};

// Function to get data by ID
const getDataById = async (req, res) => {
    try {
        const myData = await prisma.user.findUnique({
            where: { id: parseInt(req.params.id) },
        });
        if (myData) {
            res.cookie('data', JSON.stringify(myData), { httpOnly: true });
            res.status(200).json(myData);
        } else {
            res.status(404).send('Data not found');
        }
    } catch (err) {
        console.error('Error reading data:', err);
        res.status(500).send('Error reading data');
    }
};

// Function to create new data
const createData = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { username, displayName } = matchedData(req, { locations: ['body'] });
        const newData = await prisma.user.create({
            data: {
                username,
                displayName
            },
        });
        res.status(201).json(newData);
    } catch (err) {
        console.error('Error writing data:', err);
        res.status(500).send('Error writing data');
    }
};

// Function to update data
const updateData = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { username, displayName } = matchedData(req, { locations: ['body'] });
        const myData = await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: {
                username,
                displayName,
            },
        });
        res.json(myData);
    } catch (err) {
        console.error('Error updating data:', err);
        res.status(500).send('Error updating data');
    }
};

// Function to delete data
const deleteData = async (req, res) => {
    try {
        await prisma.user.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting data:', err);
        res.status(500).send('Error deleting data');
    }
};

module.exports = {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData
};

