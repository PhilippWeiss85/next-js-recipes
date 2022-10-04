import Image from "next/image";

export default function Veggie() {
  return (
    <div>
      <Image
        src="/assets/pizza.jpg"
        alt="pizza"
        layout="responsive"
        width={2400}
        height={1597}
      />
      <h1>Hello Veggie</h1>
      <p>This is a text</p>
    </div>
  );
}
