import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type SubmitEvent,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const CustomeForm = forwardRef<FormHandle, FormProps>(({ onSave, children, ...rest }, ref) => {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('Clearing form');
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const finalData = Object.fromEntries(data);

    onSave(finalData);

    form.current?.reset();
  }

  return (
    <form {...rest} onSubmit={handleSubmit} ref={form}>
      {children}
    </form>
  );
});

export default CustomeForm;
