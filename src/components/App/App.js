import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import emoji from '../../emoji';

const notify = () => {
  toast.info("Copied to clipboard", {
    position: toast.POSITION.BOTTOM_CENTER
  });
};

export default class App extends React.Component {
  render() {
    return (
      <div className="appWrapper">
        <span className="title">ASCII EMOJI</span>

        <ul className="list">
          {emoji.map(item => (
            <li key={item.name} className="list-item">
              <CopyToClipboard text={item.value} onCopy={notify}>
                <span>{item.value}</span>
              </CopyToClipboard>
            </li>
          ))}
        </ul>

        <ToastContainer autoClose={2000} hideProgressBar/>
      </div>
    );
  }
}
