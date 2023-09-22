import { tv } from "tailwind-variants"

const contentSection = tv({
    slots: {
        Container: 'w-full h-[200rem] flex justify-end',
    }
})

const { Container } = contentSection();

export default function Content() {
  return (
    <section className={Container()}>
        Content
    </section>
  )
}
