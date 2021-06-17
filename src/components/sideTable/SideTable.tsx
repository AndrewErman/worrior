/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { Category } from "../../domain";
import { SideTableItem } from "./SideTableItem";
import { TotalItemsInCategory } from "../../shell/hooks/useShellState";

const sideTableColl = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;

const sideTableRow = css`
  display: flex;
  position: absolute;
`;

type Props = {
    stats: TotalItemsInCategory;
    data: Category[];
    onMenuItemSelected: (item: Category) => void;
};

export const SideTable: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            <div css={sideTableColl}>
                {/*@ts-ignore*/}
                {props.data.map((item, index) => {
                    if(index < 8) {
                        return (
                            <SideTableItem
                                count={props.stats[item.id]}
                                category={item}
                                key={item.id}
                                onClick={props.onMenuItemSelected}
                            />

                        );
                    }
                    return null
                })}
            </div>
            <div css={sideTableRow}>
                {/*@ts-ignore*/}
                {props.data.map((item, index) => {
                    if(index > 8) {
                        return (
                            <SideTableItem
                                count={props.stats[item.id]}
                                category={item}
                                key={item.id}
                                onClick={props.onMenuItemSelected}
                            />
                        );
                    }
                    return null
                })}
            </div>
        </div>
    );
};
