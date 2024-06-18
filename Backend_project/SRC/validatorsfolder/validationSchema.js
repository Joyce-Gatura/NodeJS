// validationSchema.js
// const { checkSchema } = require('express-validator');

// const validationSchema = checkSchema({
//     location: {
//         isString: true,
//         trim: true,
//         notEmpty: true,
//         errorMessage: 'location is required and should be a string'
//     },
//    title: {
//         isString: true,
//         trim: true,
//         notEmpty: true,
//         errorMessage: 'title is required and should be a string'
//     },
//     price: {
//         isNumeric: true,
//         trim: true,
//         notEmpty: true,
//         errorMessage: 'title is required and should be a string'
//     }


// });

// module.exports = validationSchema;

const { body } = require('express-validator');

const expressValidator = [
  // body('id').notEmpty().withMessage('You should include a title'),
  body('username').notEmpty().withMessage('You should input your username'),
  body('displayName').notEmpty().withMessage('displayName required')
];

module.exports = expressValidator;





