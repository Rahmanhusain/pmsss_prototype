import Cams from "@/components/allcamera";
import Image from "next/image";

export default function Home() {
  return (
    <main id="body" className="flex min-h-screen flex-col items-center justify-between p-5" >
      <form method="post" className="w-4/6 h-auto text-center flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Capture Your Image</h1>

        <Cams />
      </form>
    </main>
  );
}
