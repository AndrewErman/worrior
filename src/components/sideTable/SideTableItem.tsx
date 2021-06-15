/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { Category } from "../../domain";
// @ts-ignore
import { getAssetManager } from "./bootstrap";

const item = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  background: rgba(255,255,255, .35);
  margin: 2px;
  min-width: 69px;
  height: 69px;
  margin-right: 100%;
  &:active {
    color: #000;
    transform: scale(0.95);
    transition: all 0.1s;
  }
  &:nth-child(9) {
    margin-right: 2px;
  }
  &:nth-child(10) {
    margin-right: 2px;
  }
  &:nth-child(11) {
    margin-right: 2px;
  }
  &:nth-child(12) {
    margin-right: 2px;
  }
  &:nth-child(13) {
    margin-right: 2px;
  }
`;

type Props = {
    count: number;
    category: Category;
    onClick?: (item: Category) => void;
};

export class SideTableItem extends React.Component<Props> {
    public render() {
        return (
            <div css={item} onClick={this.onSideMenuSelected}>
                {`${this.props.category.displayName} (${this.props.count})`}
            </div>
        );
    }

    private onSideMenuSelected = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.category);
        }
    }
}
