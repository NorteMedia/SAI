const Head = require("../models/head.model.js");

// Create and Save a new Head
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Head
  const head = new Head({
    email_head: req.body.email_head,
    nombre_head: req.body.nombre_head
  });

  // Save head in the database
  Head.create(head, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the head."
      });
    else res.send(data);
  });
};

// Retrieve all heads from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Head.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving heads."
      });
    else res.send(data);
  });
};

// Find a single head by Id
exports.findOne = (req, res) => {
  Head.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found head with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving head with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};



// Update a head identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Head.updateById(
    req.params.id,
    new Head(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found head with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating head with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a head with the specified id in the request
exports.delete = (req, res) => {
  Head.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found head with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete head with id " + req.params.id
        });
      }
    } else res.send({ message: `head was deleted successfully!` });
  });
};

// Delete all heads from the database.
exports.deleteAll = (req, res) => {
  head.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all heads."
      });
    else res.send({ message: `All heads were deleted successfully!` });
  });
};