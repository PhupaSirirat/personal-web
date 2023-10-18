import { tv } from 'tailwind-variants';

const header = tv({
  slots: {
    Container: 'pt-16 w-fill flex flex-col justify-end items-center',
    MyName: 'text-4xl mb-4 font-bold',
    Text: 'w-3/4 text-center text-lg font-extralight',
  },
});

const { Container, MyName, Text } = header();

export default function Header() {
  return (
    <div className={Container()}>
      <h1 className={MyName()}>Phupa Sirirat</h1>
      <p className={Text()}>
        3rd Year Student - Faculty of Computer Science <br />
        Chulalongkorn University
      </p>
    </div>
  );
}
