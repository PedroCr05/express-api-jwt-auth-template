const express = require(`express`);

userSchema.set(`toJSON`, {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  },
});
