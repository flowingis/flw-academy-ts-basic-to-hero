type Point2D = { x: number; y: number };

type Point3D = Point2D & { z: number };

const point2D: Point2D = { x: 1, y: 2 };
const point3D: Point3D = { x: 1, y: 2, z: 3 };

type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

type ContactDetails = Person & Email & Phone;

const printContact = (contactDetails: ContactDetails): void => {
  console.log(`Name: ${contactDetails.name}`);
  console.log(`Email: ${contactDetails.email}`);
  console.log(`Phone: ${contactDetails.phone}`);
};

printContact({ name: "John", email: "john@john.com", phone: "123-456-7890" });
