// const posts = require("../models/posts");
// const users = require("../models/users");
// const Role = require("../models/user_roles");
// const permit = (userAction) => {
//   return async (req, res, next) => {
//     const { role_id } = req.user;
//     if (userAction) {
//       try {
//         const permission = await Role.findOne({ role_id: role_id });
//         if (permission) {
//           const { permitted_actions } = permission;
//           if (permitted_actions[userAction] === true) {
//             next();
//           } else {
//             return res
//               .status(401)
//               .send({ errorMessage: "Not allowed to access" });
//           }
//         }else{
//             return res
//               .status(401)
//               .send({ errorMessage: "Not allowed to access" });
//         }
//       } catch (err) {}
//     }
//     else {
//       return res.status(401).send({ errorMessage: "Not allowed to access" }); 
//     }
    
//   };
// };

// async function postViewPermit(req, res, next) {
//   const userID = req.user.userId;
//   const postID = req.params.id
//   const userData = await users.findById(userID);
//   const postData = await posts.findById(postID);
//   const { post_status, smm_assignee, currently_assigned_to } = postData;
//   if(currently_assigned_to?.toString() === userID || currently_assigned_to === undefined ){
//     next();
//   }
//   else {
//     next();
//     return res.status(402).send({ errorMessage: "Not allowed to access" });
//   }
    
// }



// module.exports = {
//   permit,
//   postViewPermit,
// };