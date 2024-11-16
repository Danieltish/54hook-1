import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";

export default function MembersPage() {
  return (
    <div>
      <h3 className="text-3xl">This will be the members page</h3>
      <Link href="/">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
        Go back home
        </Button>
      </Link>
    </div>
  );
}
