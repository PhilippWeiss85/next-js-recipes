import Image from "next/image";

export default function Dessert() {
  return (
    <div>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="pie"
        layout="responsive"
        width={1599}
        height={2400}
      />
      <h2>Hello Dessert</h2>
      <p>This is a text</p>
    </div>
  );
}
