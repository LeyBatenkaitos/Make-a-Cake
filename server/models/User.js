const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Se necesita un nombre valido"],
    },
    lastName: {
      type: String,
      required: [true, "Se necesita un apellido valido"],
    },

    address: {
      type: String,
      required: [true, "Se necesita una direccion"],
    },
    email: {
      type: String,
      required: [true, "Ingrese un email valido"],
      unique: true,
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

UserSchema.pre("save", function (next) {
  if (this.isNew)
    bcrypt.hash(this.password, 10).then((hash) => {
      this.password = hash;
      next();
    });
  else next();
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
