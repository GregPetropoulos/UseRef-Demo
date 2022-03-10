import { useRef } from 'react';

 export const UseRefHook = () => {
  const box = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(box);
    // console.log(box.current);
    // console.log(box.current.value);

    // Set the value directly and this doesn't cause a re-render
    // When submitted change color of field and say Thank you
    box.current.style.backgroundColor="dodgerblue"
    box.current.value= 'Thank you'

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
}
export default UseRefHook
