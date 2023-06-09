import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import back from "./quote.module.css";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { BsHandIndexThumbFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function ApiCall() {
  const [quote, setQuote] = useState(" ");
  const [author, setAuthor] = useState("");

  const retrieveQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response);
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div id="new-quote" className={back.button}>
        <Button variant="flat" size="xxl" onClick={retrieveQuote}>
          Generate Random Quote
        </Button>
      </div>
      <div id="text" className={back.displayQuote}>
        <h2>Quote</h2>
        <p className={back.textDisplay}>
          <BsFillChatLeftQuoteFill />
          {quote}
          <BsFillChatRightQuoteFill />
        </p>
      </div>

      <div id="author" className={back.displayAuthor}>
        <h2>
          Author <BsHandIndexThumbFill />
        </h2>
        <p>{author}</p>
      </div>
      <div>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
          <BsTwitter className={back.icon} />
        </a>
      </div>
    </div>
  );
}
export default ApiCall;
