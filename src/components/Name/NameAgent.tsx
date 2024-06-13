import './NameAgent.scss';
import {createElement, createFactory, DetailedReactHTMLElement, ReactElement, ReactNode, useRef} from "react";

type AgentProps = {
    agent: String,
    //children: ReactNode,
    repeat: Number,
    className?: String
}

export const NameAgent = ({agent, className, repeat}: AgentProps) => {
    const ref = useRef<ReactElement>()


    const Span = (props: any) => {
        return(
            <div>
                {
                    [...Array(repeat)].map((e, i) =>
                    <span repeat={repeat} className={className} key={i}>{agent}</span>)
                }
            </div>
        )
    }


    return (
        <div className="name_agent">
            <h1>
                <Span repeat={repeat} className={className}>{agent}</Span>
            </h1>

        </div>
    )
}

