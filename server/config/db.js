const mongoose = require('mongoose');
const uri = process.env.DATABASE
const Role = require('../model/role')
const RoleAdmin = require('../model/adminRole')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
const db = mongoose.connection
db.once('open', async () => {
  if (await Role.countDocuments().exec() > 0) return
  Promise.all([
    Role.create({name:'Admin',type:'admin',code:'role_admin'}),
    Role.create({name:'Editor',type:'admin',code:'role_admin_editor'}),
    Role.create({name:'Authenticated',type:'user',code:'role_user_auth'}),
    Role.create({name:'Public',type:'user',code:'role_user_public'})
  ]).then(() => console.log('Added Roles'))
  
  const getRoleAdmin = await Role.findOne({code: 'role_admin_editor'})
  if (getRoleAdmin){
    Promise.all([
      RoleAdmin.create(
        {
          conditions: [],
          properties: 
          {
            fields: ["title", "description", "price", "image", "slug", "categories", "Custom_field.title", "Custom_field.required", "Custom_field.options", "status"]
          },
          subject: "application::product.product",
          action: "plugins::content-manager.explorer.update",
          role:getRoleAdmin._id
        })
    ]).then(() => console.log('Set role editor'))
  }
})