import { Button } from "@/components/ui/button";
import { data } from "@/data/data";
import { Barplot } from "@/dataviz/barplot/Barplot";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 " style={{ maxWidth: 600 }}>
      <div>
        <h1>Dataviz project Boilerplate</h1>

        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>

        <h2>The King's Plan</h2>
        <p>
          The king thought long and hard, and finally came up with{" "}
          <a
            href="#"
            className="font-medium text-primary underline underline-offset-4"
          >
            a brilliant plan
          </a>
          : he would tax the jokes in the kingdom.
        </p>
        <blockquote>
          "After all," he said, "everyone enjoys a good joke, so it's only fair
          that they should pay for the privilege."
        </blockquote>
        <h3>The Joke Tax</h3>
        <p>
          The king's subjects were not amused. They grumbled and complained, but
          the king was firm:
        </p>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p>
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king's
          foolishness get him down: a court jester named Jokester.
        </p>
        <Button className="mt-6">This is a button</Button>

        <h3>The People's Rebellion</h3>
        <p>
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </p>

        <p>And here is a plot</p>
        <Barplot width={500} height={400} data={data} />
      </div>
    </main>
  );
}
