import { Typography } from "@mui/material";
import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["lives", "days", "health"];



class AnimatedWords extends Component {
    state = {
        number: randomNumber(),
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0,
        customIndex: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                number: randomNumber(),
                textIndex: this.state.textIndex + 1,
                paragraphIndex: this.state.paragraphIndex + 1
            });
        }, 4000);
        setInterval(() => {
            this.setState({
                textFastIndex: this.state.textFastIndex + 1
            });
        }, 150);
    }

    render() {
        return (
            <React.Fragment>

                {<section className="inline">
                    <ReactTextTransition
                        springConfig={presets.slow}
                        style={{ margin: "0 4px" }}
                        inline
                    >
                        {texts[this.state.textIndex % texts.length]}
                    </ReactTextTransition>
                </section>}

            </React.Fragment>
        );
    }
}

export default AnimatedWords;


{/* <section className="inline">
Create
<ReactTextTransition style={{ margin: "0 4px" }} inline>
  {texts[this.state.textFastIndex % texts.length]}
</ReactTextTransition>
React Applications.
</section> */}