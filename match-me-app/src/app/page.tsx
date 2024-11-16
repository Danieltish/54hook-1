import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Hello Africa!</h1>
        <p className="text-lg mb-4">
          I'm Daniel Mutinda, a passionate software developer dedicated to
          creating an app that redefines how you connect with potential
          partners. Designed with your relationship needs in mind, our platform
          is safe, easy to use, and built specifically for Africans.
        </p>
        <p className="text-lg mb-4">
          <strong>Your future partner is just a click away.</strong>
        </p>
        <p className="text-lg mb-4">
          Get ready, because something amazing is coming your way!
        </p>
      </div>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Click Here
      </Button>
    </div>
  );
}
