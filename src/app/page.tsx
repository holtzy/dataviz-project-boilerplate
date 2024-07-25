import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 " style={{ maxWidth: 900 }}>
      <div>
        <p>Hello</p>
        <Button>This is a button</Button>
      </div>
    </main>
  );
}
