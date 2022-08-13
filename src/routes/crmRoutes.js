import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      // (req, res, next) => {
      //   res.send("GET request succesful!");
      // }
      getContacts
    )
    //.post((req, res) => res.send("POST request succesful!"));
    //This is a post endpoint.
    .post(addNewContact);

  app
    .route("/contact/:contactID")
    //This is a get endpoint. It is used for getting a specific contact.
    .get(getContactWithID)

    //.put((req, res) => res.send("PUT request succesful!"))
    //This is a put endpoint. It is used for updationg a specific contact.
    .put(updateContact)

    //.delete((req, res) => res.send("DELETE request succesful!"));
    //This is a delete endpoint. It is used for removing a specific contact.
    .delete(deleteContact);
};

export default routes;
