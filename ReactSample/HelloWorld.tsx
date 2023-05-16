import * as React from 'react';
import { Label } from '@fluentui/react';
import { HiEmojiHappy } from "react-icons/hi";


export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
    <>
      <Label>
        {this.props.name}
      </Label>
      <HiEmojiHappy />
    </>
    )
  }
}
