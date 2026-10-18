import { useState, type FormEvent, type ChangeEvent } from "react";

type SubscribeProps = {
  heading: string;
  info: string;
};

export default function Subscribe({ heading, info }: SubscribeProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const emailSend = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const emailSendRes = await emailSend.json();

      setEmail("");
      console.log("Subscribed successfully!", emailSendRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container mx-auto bg-secondary" id="subscribe">
      <div className="flex justify-between items-baseline gap-2 pt-20 pb-20">
        <div>
          <h2 className="font-bold text-[40px] text-white">{heading}</h2>
          <p className="text-white font-medium text-[14px] max-w-[442px]">{info}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-0 rounded-[5px] bg-white h-12"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="border-none outline-none bg-white w-2xs h-12 pt-3 p-3 rounded-[5px]"
            required
          />
          <button
            type="submit"
            className="text-[14px] text-white bg-primary pt-3.5 pb-3.5 pl-6 pr-6 rounded-[5px] cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}