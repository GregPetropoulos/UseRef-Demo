import { useRef } from 'react';

export const UseRefHook = () => {
  const box = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(box);
  };
  return (
    <div className='container'>
      <h1>useRef Demo</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='box'>Box Input </label>
        <input type='text' ref={box} id='box' />
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
};
export default UseRefHook
