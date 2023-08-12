import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map((e) => (
        <Card key={e.id} name={e.name} img={e.imgURL} contact={e.phone} email={e.email} />

      ))}

      {/* <Card name={contacts[1].name} img={contacts[1].imgURL} contact={contacts[1].phone} email={contacts[1].email} />
      <Card name={contacts[2].name} img={contacts[2].imgURL} contact={contacts[2].phone} email={contacts[2].email} /> */}
    </div>
  );
}

export default App;
