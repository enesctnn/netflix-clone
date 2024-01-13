import { FunctionComponent } from 'react';

const ScrollModal: FunctionComponent<{
  header?: string;
  label?: string;
  children: React.ReactNode;
  isCentered?: boolean;
  className?: string;
}> = (props) => {
  return (
    <div className=" text-white">
      <div className="bg-gray-400/30 w-screen h-2" />
      <div
        className={` flex flex-col gap-10 ${
          props.isCentered !== undefined ? '' : 'items-center py-20'
        }`}
      >
        <section className="text-center flex flex-col gap-5">
          <h1 className="whitespace-nowrap text-4xl font-bold">
            {props.header}
          </h1>
          <p className="text-xl text-center px-10">{props.label}</p>
        </section>
        {props.children}
      </div>
    </div>
  );
};

export default ScrollModal;
