import React from 'react';
import './style.css';

const Button = (props) => {
  if (props.href) {
    return (
      <a href={props.href}>
        <button disabled={props.disabled ? true : false}>
          {props.children}
        </button>
      </a>
    );
  } else {
    return (
      <button disabled={props.disabled ? true : false}>{props.children}</button>
    );
  }
};

export default function App() {
  return (
    <div>
      <h1 className="red">Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="row">
        <Button disabled={true}>Btn-1</Button>
        <Button>Btn-2</Button>
      </div>
      <div className="row">
        <Button disabled={true} href="/#">
          Btn-3
        </Button>
        <Button href="/#">Btn-4</Button>
      </div>
    </div>
  );
}
