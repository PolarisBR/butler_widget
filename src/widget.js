import React from "react";
const { ask } = require("./lib");

const ButlerWidget = ({ config }) => {
    console.log(`Widget instantiated: ${JSON.stringify(config)}`);
    const [question, setQuestion] = React.useState("");
    const [history, setHistory] = React.useState([]);

    const updateHistory = () => {
        ask(question).then(response => {
            setHistory(history.concat(question));
            setQuestion("");
        }).catch(error => {
            console.error("Something went wrong");
        });
    };

    return (<div>
        <div>Title {config.title}</div>
        <div>Customer ID: {config.customerId}</div>
        <pre>{history && history.map((e, index) => {
            return <div key={index}>{e}</div>
        })}</pre>
        <div>
            <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        </div>
        <div>
            <button onClick={(e) => updateHistory()}>Ask</button>
        </div>
    </div>);

}

export default ButlerWidget;