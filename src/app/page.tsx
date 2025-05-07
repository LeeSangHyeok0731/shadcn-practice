import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className=" bg-green-300 w-screen h-screen">
      <Button variant="outline" size="lg">
        로그인
      </Button>
      <Checkbox className=" bg-white w-3">checkout</Checkbox>
    </div>
  );
}
