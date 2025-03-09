
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

mongoose.connect('mongodb+srv://giftbaraka957:Jrhj4hcPeUFwgZxW@cluster0.jlfbb.mongodb.net/')
    .then(() => {
        console.log("Connected to MongoDB Successfully");
    })
    .catch((e) => {
        console.log(e);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAtt: {type:Date,default: Date.now},
    password: String
});

//create user model
const User = mongoose.model('User', userSchema);

async function runQueryExamples() {
     try {
        // create user
    //      const newUser = await User.create({
    //         name: 'deleted user',
    //         email: 'delete@gmail.com',
    //         age: 15,
    //         isActive: true,
    //         tags: ['developer'],
    //         password: '123456'
    //     });
                     
    //     console.log('User created successfully');
    //      console.log('User:', newUser.name);
    // //         // get all users
    //      const users = await User.find();
    //        console.log('Users:', users);
         //get users whose isActive is false
        //  const getUsersisActiveFalse = await User.find({isActive: false});
        //  console.log('Users whose isActive is false:', getUsersisActiveFalse);

        // GET one userby id
        //  const getUser = await User.findById('newUser._id');
        //  console.log('User:', getUser);
        //  const getUser = await User.findOne({name: 'John Doe'});
        //  console.log('User:', getUser);

        // const selectedFields = await User.find().select('name email -_id');
        // console.log('Selected Fields:', selectedFields);

        // limited users
        // const limitedUsers = await User.find().limit(2).skip(1);
        //  console.log('Limited Users:', limitedUsers);

        // Sort users by name
        //  const sortedUsers = await User.find().sort({age: -1});
        //  console.log('Sorted Users:', sortedUsers);

        //counts the  
        // const countDocuments = await User.countDocuments({isActive: false});
        // console.log('Count Documents:', countDocuments);
        const userId = new ObjectId(newUser._id);

        // delete user
        const deletedUser = await User.findByIdAndDelete(userId);
        console.log('Deleted User:', deletedUser);
        } catch (e) {
            console.log(e);
        }finally {
            mongoose.connection.close();
        }
    }
runQueryExamples();

