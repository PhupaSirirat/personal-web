import { useRef } from 'react';
import { tv } from 'tailwind-variants';

const contentSection = tv({
  slots: {
    Container: 'w-full h-min flex flex-col items-end',
    ContentContainer: 'w-[55vw] h-screen px-16 py-32 text-lg',
    TextContent: 'mt-4',
    HyperText: 'text-3xl',
  },
});

const { Container, ContentContainer, TextContent, HyperText } =
  contentSection();

export default function Content() {
  const aboutMe = useRef<HTMLElement>(null);
  const experience = useRef<HTMLElement>(null);
  const projects = useRef<HTMLElement>(null);
  return (
    <section className={Container()}>
      <section className={ContentContainer()} ref={aboutMe}>
        <h1 className={HyperText()}>ABOUT ME</h1>
        <p className={TextContent()}>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation.
        </p>
        <p className={TextContent()}>
          My main focus these days is building products and leading projects for
          our clients at Upstatement. In my free time I've also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API.
        </p>
        <p className={TextContent()}>
          When I’m not at the computer, I’m usually rock climbing, hanging out
          with my wife and two cats, or running around Hyrule searching for
          Korok seeds.
        </p>
      </section>

      <section className={ContentContainer()} ref={experience}>
        <h1 className={HyperText()}>EXPERIENCE</h1>
        <p className={TextContent()}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          aliquam voluptas quis molestias animi provident dolore quae voluptates
          laborum laudantium aut facilis, recusandae iusto quia repudiandae!
          Iste reiciendis dolores ea? Autem amet deserunt rerum expedita nemo
          laudantium nisi quam perspiciatis ab dolore, itaque, obcaecati quod
          repudiandae quae odio. Maxime ex cumque neque eaque! Culpa, facere.
          Perspiciatis nemo dolor porro maiores! Excepturi illum laborum sunt
          deserunt asperiores mollitia, accusamus molestias velit commodi
          possimus maiores minus delectus dolore tenetur, maxime nisi pariatur
          aliquam adipisci accusantium? Libero, earum deserunt culpa laboriosam
          eos similique. Expedita rerum, ab odio nostrum commodi fuga, sunt
          eligendi quos omnis placeat neque suscipit velit optio. Sed quia harum
          similique officia vero et illo pariatur saepe, in aperiam odit
          consequatur. Adipisci non suscipit repellat cum provident quibusdam
          maxime! Eligendi voluptate, dolore quam soluta tempora amet. Vero
          adipisci alias assumenda sed aspernatur, maiores fuga magnam at eius
          voluptatum magni optio expedita.
        </p>
      </section>

      <section className={ContentContainer()} ref={projects}>
        <h1 className={HyperText()}>PROJECTS</h1>
        <p className={TextContent()}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          nostrum harum quasi corporis tempora deleniti. Reiciendis delectus
          unde, libero ea eius ullam, sed atque ex corrupti accusantium, eum
          facere hic! Natus veniam minus sit expedita repellat inventore quasi
          nemo, modi provident fugiat eaque? Eveniet quae dolor ipsa animi
          repellendus beatae quia id sit? Porro eius saepe laborum quaerat
          voluptatem non? Autem quibusdam, explicabo rerum alias consequuntur
          iure veritatis officia nesciunt et maiores aut minima incidunt
          exercitationem non sequi tenetur error illo? Provident quod nisi velit
          tenetur esse ut libero eaque! Sed unde vel eius vero sint? Minima
          natus tempore adipisci odit! Beatae totam quia, quaerat optio illum
          commodi sit, facilis unde rem deserunt in eius? Enim obcaecati a alias
          dolores. Tempore suscipit sint blanditiis voluptatem sunt eligendi
          harum laudantium. Perspiciatis laudantium perferendis minima tempore
          iste! Quis corporis unde fuga, alias placeat tempore eveniet minus
          tenetur ullam repellat consequuntur quam eaque.
        </p>
      </section>
    </section>
  );
}
