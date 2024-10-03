import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export const User = () => {
  return (
    <div className="w-[620px]">
      <h1 className="text-lg font-bold">Хэрэглэгчийн хэсэг</h1>
      <Separator className="my-6" />
      <div className="flex flex-col gap-4">
        <div>
          <Label>Овог:</Label>
          <Input type="text" className="input-primary mt-2" />
        </div>
        <div>
          <Label>Нэр:</Label>
          <Input type="text" className="input-primary mt-2" />
        </div>
        <div>
          <Label>Утасны дугаар:</Label>
          <Input type="number" className="input-primary mt-2" />
        </div>
        <div>
          <Label>Имэйл хаяг:</Label>
          <Input type="email" className="input-primary mt-2" />
        </div>
        <div>
          <Label>Зураг</Label>
          <Input type="file" className="input-primary mt-2" />
        </div>
        <div>
          <Label>Хаяг</Label>
          <Textarea className="input-primary mt-2" />
        </div>
        <div className="self-end">
          <Button className="button-primary">Мэдээлэл шинэчлэх</Button>
        </div>
      </div>
    </div>
  );
};
