const mongoose = require("mongoose");

// Schema

const permissionSchema = new mongoose.Schema({
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  roleName: { type: String, required: true },
  roleAlias: { type: String, required: true },
  resourceId: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
  resourceName: { type: String, required: true },
  resourceAlias: { type: String, required: true },
  isAllowed: { type: Boolean, required: true },
  isDisabled: { type: Boolean, required: true },
});

// reference model

const Permission = mongoose.model("Permission", permissionSchema);

Permission.createNew = async (permission) => {
  const model = new Permission(permission);
  return model;
};

module.exports = Permission;
